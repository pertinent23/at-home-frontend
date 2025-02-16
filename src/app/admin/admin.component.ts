import { Component, inject, OnInit } from '@angular/core';
import { NavBarComponent } from '../ui/nav-bar/nav-bar.component';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-admin',
  imports: [NavBarComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit {
  api = inject(ApiService);

  constructor() {}

  ngOnInit() {
    this.api.verifyToken().then((response) => {
      return response;
    })
    .then((response) => {
      switch (response.status) {
        case 200:
        case 202:
          if(!response.data.isAdmin)
            window.location.href = '/login';
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
      window.location.href = '/login';
    });
  }

  goBack() {
    window.history.back();
  }
}
