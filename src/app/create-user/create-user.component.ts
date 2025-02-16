import { Component, inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormComponent } from '../ui/form/form.component';
import { FormInputComponent } from '../ui/form-input/form-input.component';
import { FormButtonComponent } from '../ui/form-button/form-button.component';
import { NgIf } from '@angular/common';
import { NavBarComponent } from '../ui/nav-bar/nav-bar.component';
import { ApiService } from '../services/api.service';

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
  readonly defaultError: string = 'formulaire mal rempli';
  loginForm: FormGroup;
  @Input() isError = false;

  api = inject(ApiService);
  error: string = 'formulaire mal rempli';

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

    if(!this.isError) {
      this.api.createUser(this.loginForm.value)
      .then(res => res)
      .then(res => {
        switch(res.status) {
          case 200:
          case 201:
          case 202:
            window.location.href = "/admin";
            break;
          
          case 403:
            window.location.href = "/login";
            break;

          case 401:
            this.isError = true;
            this.error = "Nom d'utilisateur déjà utilisé";
            break;

          default:
            console.log(res.status);
            break;
        }
      })
      .catch(err => {
        switch(err.status) {
          case 403:
            window.location.href = "/login";
            break;

          case 401:
            this.isError = true;
            this.error = "Nom d'utilisateur déjà utilisé";
            break;

          default:
            console.log(err.status);
            break;
        }
      });
    } else {
      this.error = this.defaultError;
    }
  }

  ngOnInit() {
    console.log("test");
  }

  goBack() {
    window.history.back();
  }
}
