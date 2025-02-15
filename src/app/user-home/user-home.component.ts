import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-home',
  imports: [RouterOutlet],
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.scss'
})
export class UserHomeComponent {
  goHome(): void {
    window.location.href = "/home";
  }

  goMessages(): void {
    window.location.href = "/message";
  }
}
