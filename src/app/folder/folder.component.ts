import { Component, inject, OnInit } from '@angular/core';
import { NavBarComponent } from '../ui/nav-bar/nav-bar.component';
import { NgIf } from '@angular/common';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  imports: [NavBarComponent, NgIf],
  templateUrl: './folder.component.html',
  styleUrl: './folder.component.scss'
})
export class FolderComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private api = inject(ApiService);

  userId: string;
  firstname: string = 'Gaudu';
  lastname: string = 'David';
  age: number = 30;
  username: string = "davidgaudu";
  source: string = "";
  lastdate: string = "12/35/27";

  constructor() {
    this.userId = this.route.snapshot.paramMap.get('id') || '';
  }

  ngOnInit(): void {
    if(this.userId) {
      this.api.getUserById(this.userId)
      .then(res => res)
      .then(res => {
        this.firstname = res.data.firstname;
        this.lastname = res.data.lastname;
        this.age = Number(res.data.age);
        this.username = res.data.username;

        this.api.getFolderById(this.userId)
          .then(res => res)
          .then(res => {
            this.source = res.data.record;
            this.lastdate = res.data.recordedAt;
          })
          .catch(err => {
            console.log(err)
            window.location.href = "/login";
          });
      })
      .catch(err => {
        console.log(err)
        window.location.href = "/login";
      });
    }
  }

  goBack() {
    window.history.back();
  }

  sendMessage() {
    window.location.href = `/message/${this.userId}`;
  }

  addExercise() {
    window.location.href = `/add-exercise/${this.userId}`
  }
}
