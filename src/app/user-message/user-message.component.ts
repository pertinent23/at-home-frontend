import { NgFor, NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Message } from '../app.types';
import { ApiService } from '../services/api.service';

const messagesTests: Message[] = [
  {body: "Bonjour monsieur gerard", sendAt: new Date(Date.now()).toString(), sendBy: "admin"},
  {body: "ça va?", sendAt: new Date(Date.now()).toString(), sendBy: "admin"},
  {body: "Bonjour tout le monde j'espere que vous allez bien", sendAt: new Date(Date.now()).toString(), sendBy: "me"},
  {body: "Bonjour tout le monde j'espere que vous allez bien", sendAt: new Date(Date.now()).toString(), sendBy: "me"},
  {body: "ça va?", sendAt: new Date(Date.now()).toString(), sendBy: "admin"},
  {body: "Bonjour tout le monde j'espere que vous allez bien", sendAt: new Date(Date.now()).toString(), sendBy: "me"},
  {body: "ça va?", sendAt: new Date(Date.now()).toString(), sendBy: "me"},
];

@Component({
  selector: 'app-user-message',
  imports: [FormsModule, NgIf, NgFor],
  templateUrl: './user-message.component.html',
  styleUrl: './user-message.component.scss'
})
export class UserMessageComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  receiver: string = 'Admin';
  messages: Message[] = [];
  content: string = '';
  userId: string = '';
  api = inject(ApiService);

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id') || '';
    (() => {
      if (this.userId) {
        return this.api.getMessagesById(this.userId);
      } else {
        return this.api.getMyMessage();
      }
    })()
    .then((response) => {
      return response
    })
    .then((response) => {
      this.messages = response.data;
    })
    .catch((err) => {
      return console.log('error');
    })
  }

  isMe(mss: Message): boolean {
    switch (this.userId.length) {
      case 0:
        return mss.sendBy === 'me';

      default:
        return mss.sendBy === 'admin';
    };
  }

  getHourFromDate(date: string): string {
    const realDate = new Date(date);
    return realDate.getHours() + ':' + realDate.getMinutes();
  }

  isNested(mss: Message, index: number): boolean {
    if (index < this.messages.length - 1) {
      return this.messages[index + 1].sendBy === mss.sendBy;
    }
    return false;
  }

  backToHome() {
    window.history.back();
  }

  sendMessage() {
    console.log(this.content)
    if (this.content.trim().length >= 3) {

      (this.userId 
        ? this.api.sendMessagesByAdmin(this.userId, this.content) 
        : this.api.sendMessagesByUser(this.content))
          .then((res) => {
            return res;
          })
          .then((res) => {
            switch(res.status) {
              case 200:
              case 201:
              case 202:
                this.messages.push({
                  body: this.content.toString(),
                  sendAt: new Date(Date.now()).toString(),
                  sendBy: this.userId ? 'admin' : 'me'
                });
                this.content = '';
                [document.getElementById('form')].map((el) => {
                  if (el instanceof HTMLFormElement)
                    el.reset();
                });

                break;
              
              case 403:
                window.location.href = '/login';
                break;

              default:
                console.log(res.status);
            }
          });
    }
  }
}
