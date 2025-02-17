import { AfterViewInit, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { NavBarComponent } from '../ui/nav-bar/nav-bar.component';
import { NgIf } from '@angular/common';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-add-exercise',
  imports: [NavBarComponent, NgIf],
  templateUrl: './add-exercise.component.html',
  styleUrl: './add-exercise.component.scss'
})
export class AddExerciseComponent implements AfterViewInit {

  private readonly route = inject(ActivatedRoute);
  private readonly api = inject(ApiService);
  private readonly loader = inject(LoaderService);

  progressBar: number = 0;
  video: string = '';
  userId: string;
  error: string = '';

  constructor() {
    this.userId = this.route.snapshot.paramMap.get('id') || '';
  }

  chargeFile() {
    const el = document.getElementById('video');
    if (el instanceof HTMLInputElement) {
      const file = el.files ? el.files[0] : null;
      if (file) {
        if (file.type !== "video/mp4") {
          this.error = "Mauvais fichier séléctionné";
        } else {
          const reader = new FileReader();

            reader.addEventListener('progress', (e) => {
              this.progressBar = (e.loaded / e.total)*100;
            });

            reader.addEventListener('load', (e) => {
              this.video = reader.result?.toString() || '';
            });

            reader.addEventListener('error', () => {
              this.error = 'Impossible de charger le fichier';
            });
          
          reader.readAsDataURL(file);
        }
      }
    }
  }

  onSubmit() {
    if (this.video) {
      console.log('ici');
      this.postMyVideo(this.video);
    }
  }

  ngAfterViewInit(): void {
    
  }

  postMyVideo(video: string): void {
    this.loader.show();
    this.api.postVideo(this.userId, video)
      .then(res => res)
      .then(res => {
        switch(res.status) {
          case 200:
          case 201:
          case 202:
            window.location.href = "/admin";
            break;

          default:
            console.log(res.status);
            break;
        }
      })
      .catch(err => {
        switch(err.status) {
          case 401:
            this.loader.hide();
            this.error = "Erreur lors de la publication";
            break;

          case 403:
            window.location.href = "/login";
            break;
          
          default:
            this.loader.hide();
            console.log(err.status);
            break;
        }
      });
  }

  goBack() {
    window.history.back();
  }
}
