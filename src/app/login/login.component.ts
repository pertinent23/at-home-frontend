import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormComponent } from '../ui/form/form.component';
import { FormInputComponent } from '../ui/form-input/form-input.component';
import { FormButtonComponent } from '../ui/form-button/form-button.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule, FormComponent, FormInputComponent, FormButtonComponent, NgIf
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;
  @Input() isError = false;

  constructor() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)])
    });
  }

  submit() {
    this.isError = !this.loginForm.valid;
    window.location.href = "/home";
  }
}
