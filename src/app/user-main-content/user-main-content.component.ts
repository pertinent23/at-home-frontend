import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-main-content',
  imports: [NgIf],
  templateUrl: './user-main-content.component.html',
  styleUrl: './user-main-content.component.scss'
})
export class UserMainContentComponent {
  isExerice: boolean = false;

  onStart() {
    window.location.href = "/home/record";
  }
}
