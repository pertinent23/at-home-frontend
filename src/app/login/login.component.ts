import { Component, inject, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormComponent } from '../ui/form/form.component';
import { FormInputComponent } from '../ui/form-input/form-input.component';
import { FormButtonComponent } from '../ui/form-button/form-button.component';
import { NgIf } from '@angular/common';
import { ApiService } from '../services/api.service';
import { CookieService } from 'ngx-cookie-service';

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

  api = inject(ApiService);
  cookies = inject(CookieService);

  constructor() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)])
    });
  }

  submit() {
    this.isError = !this.loginForm.valid;

    if(!this.isError) {
      this.api.login(this.loginForm.value).then(async (response) => {
        const result = await response;

        switch (result.status) {
          case 200:
          case 202:
            console.log("iic")
            this.cookies.set('token', result.data.token, 1);
            if (result.data.isAdmin) {
              this.cookies.set('username', this.loginForm.value.username, 1);
              this.cookies.set('password', this.loginForm.value.password, 1);
            }
            console.log("iic")
            window.location.href = result.data.isAdmin ? '/admin' : '/home';
            break;
          
          case 403:
            this.isError = true;
            break;
          
          default:
            console.log(result.status);
            break;
        }
      })
      .catch((error) => {
        this.isError = true;
      });
    }
  }
}
