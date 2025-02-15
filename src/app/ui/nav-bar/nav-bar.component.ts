import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  @Output() clicked = new EventEmitter<void>();
  @Input() title: string = 'Titre';

  onClick() {
    this.clicked.emit();
  }
}
