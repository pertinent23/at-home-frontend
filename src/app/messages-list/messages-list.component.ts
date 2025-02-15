import { Component } from '@angular/core';
import { NavBarComponent } from '../ui/nav-bar/nav-bar.component';

@Component({
  selector: 'app-messages-list',
  imports: [NavBarComponent],
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.scss'
})
export class MessagesListComponent {
  goBack() {
    window.history.back();
  }
}
