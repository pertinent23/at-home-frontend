import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-button',
  imports: [],
  templateUrl: './form-button.component.html',
  styleUrl: './form-button.component.scss'
})
export class FormButtonComponent {
  @Input() type = 'submit';
  @Input() value = '';

  @Output() clicked = new EventEmitter<void>();
  
  handleClick() {
    this.clicked.emit();
  }
}
