import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormComponent } from '../ui/form/form.component';
import { FormInputComponent } from '../ui/form-input/form-input.component';
import { FormButtonComponent } from '../ui/form-button/form-button.component';
import { NgIf } from '@angular/common';
import { NavBarComponent } from '../ui/nav-bar/nav-bar.component';

@Component({
  selector: 'app-create-user',
  imports: [
    ReactiveFormsModule, FormComponent, FormInputComponent, FormButtonComponent, NgIf,
    NavBarComponent
  ],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss'
})
export class CreateUserComponent implements OnInit {
  loginForm: FormGroup;
  @Input() isError = false;

  constructor() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(3)]),
      firstname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      age: new FormControl(0, [Validators.required, Validators.min(5)]),
    });
  }

  submit() {
    this.isError = !this.loginForm.valid;
    window.location.href = "/admin";
  }

  ngOnInit() {
    console.log("test");
  }

  goBack() {
    window.history.back();
  }
}
