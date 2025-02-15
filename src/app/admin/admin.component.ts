import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../ui/nav-bar/nav-bar.component';

@Component({
  selector: 'app-admin',
  imports: [NavBarComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log('Admin Component');
  }
}
