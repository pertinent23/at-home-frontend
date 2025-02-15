import { Component } from '@angular/core';
import { NavBarComponent } from '../ui/nav-bar/nav-bar.component';

@Component({
  selector: 'app-folder-list',
  imports: [NavBarComponent],
  templateUrl: './folder-list.component.html',
  styleUrl: './folder-list.component.scss'
})
export class FolderListComponent {
  goBack() {
    window.history.back();
  }
}
