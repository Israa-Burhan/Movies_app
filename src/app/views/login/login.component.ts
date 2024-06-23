import { AuthService } from '../../services/auth.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private _AuthService: AuthService, private _Router: Router) {}
  errorMessage: string = '';
  isLoading: boolean = false;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [
      Validators.pattern('^[A-Z][a-zA-Z0-9]{3,8}$'),
      Validators.required,
    ]),
  });
  submitloginForm(loginForm: FormGroup) {
    this.isLoading = true;
    if (loginForm.valid) {
      this._AuthService.signin(loginForm.value).subscribe({
        next: (reponse) => {
          if (reponse.message === 'Done') {
            this.isLoading = false;
            //navigato  to login | home

            localStorage.setItem('userToken', reponse.token);
            this._AuthService.saveUserData();
            this._Router.navigate(['home']);
          } else {
            //show error
            this.isLoading = false;
            this.errorMessage = reponse.message;
          }
        },
      });
    }
  }
}
