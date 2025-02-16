import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from '../services/api.service'; 
import { Folder } from '../app.types';

@Component({
  selector: 'app-user-home',
  imports: [RouterOutlet],
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.scss'
})
export class UserHomeComponent implements OnInit {
  api = inject(ApiService);
  user?: Folder;

  ngOnInit(): void {
    this.api.verifyToken()
    .then((response) => {
      return response;
    })
    .then((response) => {
      switch (response.status) {
        case 200:
        case 202:
          console.log("ok");
          break;
        
        case 403:
          window.location.href = '/login';
          break;
        
        default:
          console.log(response.status);
          break;
      }
    })
    .catch((error) => {
      console.log("error");
      console.log(error)
      window.location.href = '/login';
    });    
  }

  goHome(): void {
    window.location.href = "/home";
  }

  goMessages(): void {
    window.location.href = "/message";
  }
}
