import { NgFor, NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

interface Message{
  body: string;
  createdAt: Date;
  sendBy: string;
}

const messagesTests: Message[] = [
  {body: "Bonjour monsieur gerard", createdAt: new Date(Date.now()), sendBy: "admin"},
  {body: "ça va?", createdAt: new Date(Date.now()), sendBy: "admin"},
  {body: "Bonjour tout le monde j'espere que vous allez bien", createdAt: new Date(Date.now()), sendBy: "me"},
  {body: "Bonjour tout le monde j'espere que vous allez bien", createdAt: new Date(Date.now()), sendBy: "me"},
  {body: "ça va?", createdAt: new Date(Date.now()), sendBy: "admin"},
  {body: "Bonjour tout le monde j'espere que vous allez bien", createdAt: new Date(Date.now()), sendBy: "me"},
  {body: "ça va?", createdAt: new Date(Date.now()), sendBy: "me"},
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
  messages: Message[] = messagesTests;
  content: string = '';
  userId: string = '';

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id') || '';
  }

  isMe(mss: Message): boolean {
    switch (this.userId.length) {
      case 0:
        return mss.sendBy === 'me';

      default:
        return mss.sendBy === 'admin';
    };
  }

  getHourFromDate(date: Date): string {
    return date.getHours() + ':' + date.getMinutes();
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
    if (this.content.trim().length >= 3) {

    }
  }
}
