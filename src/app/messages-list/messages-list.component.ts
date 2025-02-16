import { Component, inject, OnInit } from '@angular/core';
import { NavBarComponent } from '../ui/nav-bar/nav-bar.component';
import { ApiService } from '../services/api.service';
import { User } from '../app.types';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-messages-list',
  imports: [NavBarComponent, NgFor],
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.scss'
})
export class MessagesListComponent implements OnInit {
  private readonly api = inject(ApiService);
  public users: User[] = [];

  ngOnInit(): void {
    this.api.getUserList()
    .then(res => res)
    .then(res => {
      switch(res.status) {
        case 200:
        case 201:
        case 202:
          this.users = res.data;
          break;

        default:
          console.log(res.status);
          break;
      }
    })
    .catch(err => {
      console.log(err)
      //window.location.href = "/login";
    });
  }

  goBack() {
    window.history.back();
  }
}
