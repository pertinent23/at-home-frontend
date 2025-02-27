import { NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Folder } from '../app.types';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-user-main-content',
  imports: [NgIf],
  templateUrl: './user-main-content.component.html',
  styleUrl: './user-main-content.component.scss'
})
export class UserMainContentComponent implements OnInit {
  isExerice: boolean = false;
  source: string = '';
  user?: Folder;

  private readonly api = inject(ApiService);
  private readonly loader = inject(LoaderService);

  ngOnInit(): void {
    this.loader.show();
    this.api.getMyFolder()
    .then((response) => {
      return response;
    })
    .then((response) => {
      switch (response.status) {
        case 200:
        case 202:
          this.user = response.data;
          this.isExerice = response.data.video !== "NAN";
          this.source = response.data.video;
          this.loader.hide();
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
    });    
  }

  onStart() {
    window.location.href = "/home/record";
  }
}
