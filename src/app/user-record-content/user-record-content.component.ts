import { NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-user-record-content',
  imports: [NgIf, FormsModule],
  templateUrl: './user-record-content.component.html',
  styleUrl: './user-record-content.component.scss'
})
export class UserRecordContentComponent implements OnInit {
  source1: string = "";
  source2: string = "";

  comment: string = '';
  isPaused: boolean = false;
  isPlaying: boolean = false;
  isSending: boolean = false;
  isError: boolean = false;
  isAccessRefused: boolean = false;
  canRecord: boolean = false;

  videoPosition: number = 1;
  record?: MediaRecorder;
  recordData: Blob[] = [];
  stream?: MediaStream;
  result?: Blob;

  principalVideo?: HTMLVideoElement;
  secondlVideo?: HTMLVideoElement;

  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  private readonly api = inject(ApiService);
  private readonly loader = inject(LoaderService);

  ngOnInit(): void {
    this.getCameraStream();
    this.api.getMyFolder()
      .then(res => res)
      .then(res => {
        switch(res.status) {
          case 200:
          case 201:
          case 202:
            this.source1 = res.data.video;
            break;
          
          case 403:
            window.location.href = "/login";
            break;

          default:
            console.log(res.status);
            break;
        }
      })
      .catch(err => {
        console.log(err)
        window.location.href = "/login";
      });
  }

  resetTime(): void {
    this.hours = this.minutes = this.seconds = 0;
  }

  initTime(): void {
    const x = setInterval(() => {
      if (!this.isPaused && this.isPlaying && !this.isSending) {
        this.seconds++;
        if(this.seconds >= 60) {
          this.seconds = 0;
          this.minutes++;
          if(this.minutes >= 60) {
            this.minutes = 0;
            this.hours++;
          }
        }
      } else if (!this.isPlaying) {
        console.log("finish");
        clearInterval(x);
      }
    }, 1000);
  }

  getSource(code: number): string {
    switch(this.videoPosition) {
      case 1:
        return code == 1 ? this.source1 : this.source2;

      case 2:
        return code == 1 ? this.source2 : this.source1;
    }

    return '';
  }

  isMainStream(code: number): boolean {
    switch(this.videoPosition) {
      case 1:
        return code == 1 ? false : true;

      case 2:
        return code == 1 ? true : false;
    }

    return true;
  }

  setStream() : void {
    Array.from(document.getElementsByTagName('video')).map(item => {
      if(item instanceof HTMLVideoElement) {
        if (item.classList.contains('main-stream')) {
          item.autoplay = true;
          item.src = '';
          item.volume = 0;
          this.principalVideo = item;
          if (this.stream) {
            item.srcObject = this.stream;
          }
        } else {
          item.autoplay = false;
          item.srcObject = null;
          item.src = this.source1;
          this.secondlVideo = item;
        }
      }
    })
  }

  toogleSource() : void {
    /*if(this.videoPosition === 1) {
      this.videoPosition = 2;
    } else {
      this.videoPosition = 1;
    }
    this.setStream();*/
  }

  getCameraStream(): void {
    if (typeof navigator !== "undefined" && navigator.mediaDevices) {
      this.isError = false;
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((stream) => {
          this.stream = stream;
          this.canRecord = true;
          this.setStream();
        })
        .catch((err) => {
          this.isError = true;
          this.isAccessRefused = true;
          console.log("error");
        });
    } else {
      this.isError = true;
    }
  }

  startRecording(): void {
    if (this.stream) {
      this.record = new MediaRecorder(this.stream);
      this.isPlaying = true;

      this.record.ondataavailable = (event) => {
        if (event.data.size > 0) {
          this.recordData.push(event.data);
        }
      };

      this.record.onstop = () => {
        this.result = new Blob(this.recordData, { type: "video/mp4" });

        const url = URL.createObjectURL(this.result);
        Array.from(document.getElementsByTagName('video')).map(item => {
          if(item instanceof HTMLVideoElement) {
            if (!item.classList.contains('main-stream')) {
              item.autoplay = true;
              item.src = url;
              console.log(url);
            }
          }
        });
      };

      this.setStream();
      this.record.start();
      this.secondlVideo?.play();
      this.initTime();
    }
  }

  pauseRecord() : void {
    if (this.record?.state == "recording") {
      this.record?.pause();
      this.isPaused = true;
      this.secondlVideo?.pause();
    }
  }

  unpauseRecord() : void {
    if (this.record?.state == "paused") {
      this.record?.resume();
      this.isPaused = false;
      this.secondlVideo?.play();
    }
  }

  stopRecord() : void {
    this.record?.stop();
    this.isSending = true;
    this.isPaused = false;
    this.resetTime();

    if (this.secondlVideo) {
      this.secondlVideo.pause();
      this.secondlVideo.currentTime = 0;
    }
  }

  cancelSend(): void {
    this.isSending = false;
    this.recordData = [];
    this.isPlaying = false;
    this.isPaused = false;
    this.setStream();
  }

  isStartButtonVisible(): boolean {
    return !this.isPaused && this.canRecord && !this.isPlaying;
  }

  send(): void {
    if (this.result) {
      const filereader = new FileReader();

      filereader.addEventListener('load', () => {
        this.loader.show();
        this.api
          .postRecord(filereader.result?.toString() || '', this.comment)
          .then((res) => res)
          .then((res) => {
            switch(res.status) {
              case 200:
              case 201:
              case 202:
                window.location.href = "/home";
                break;
              
              case 403:
                window.location.href = "/login";
                break;
              
              default:
                this.loader.hide();
                console.log(res.status);
            }
          })
          .catch((err) => {
            this.loader.hide();
            console.log(err);
          })
      });

      filereader.readAsDataURL(this.result);
    }
  }
}
