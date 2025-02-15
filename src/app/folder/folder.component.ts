import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../ui/nav-bar/nav-bar.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-folder',
  imports: [NavBarComponent, NgIf],
  templateUrl: './folder.component.html',
  styleUrl: './folder.component.scss'
})
export class FolderComponent implements OnInit {
  firstname: string = 'Gaudu';
  lastname: string = 'David';
  age: number = 30;
  username: string = "davidgaudu";
  source: string = "";
  lastdate: string = "12/35/27";

  ngOnInit(): void {

  }

  goBack() {
    window.history.back();
  }

  sendMessage() {
    window.history.back();
  }

  addExercise() {
    window.history.back();
  }
}
