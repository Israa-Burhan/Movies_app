import { AuthService } from '../../services/auth.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(private _AuthService: AuthService, private _Router: Router) {}
  errorMessage: string = '';
  isLoading: boolean = false;
  registerForm: FormGroup = new FormGroup(
    {
      firstName: new FormControl(null, [
        Validators.minLength(3),
        Validators.maxLength(10),
        Validators.required,
      ]),
      lastName: new FormControl(null, [
        Validators.minLength(3),
        Validators.maxLength(10),
        Validators.required,
      ]),
      // age: new FormControl(null, [
      //   Validators.min(16),
      //   Validators.max(80),
      //   Validators.required,
      // ]),
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [
        Validators.pattern('^[A-Z][a-zA-Z0-9]{3,8}$'),
        Validators.required,
      ]),
      cPassword: new FormControl(null, [
        Validators.pattern('^[A-Z][a-zA-Z0-9]{3,8}$'),
        Validators.required,
      ]),
    },
    { validators: this.rePasswordMatch }
  );

  rePasswordMatch(registerForm: any) {
    let passwordControl = registerForm.get('password');
    let rePasswordControl = registerForm.get('cPassword');
    if (passwordControl.value === rePasswordControl.value) {
      return null;
    } else {
      rePasswordControl.setErrors({
        passwordmatch: 'password and repassword not match',
      });
      return { passwordmatch: 'password and repassword not match' };
    }
  }

  submitRegisterForm(registerForm: FormGroup) {
    this.isLoading = true;
    if (registerForm.valid) {
      this._AuthService.signup(registerForm.value).subscribe({
        next: (reponse) => {
          if (reponse.message === 'Done') {
            this.isLoading = false;
            //navigato  to login | home
            this._Router.navigate(['/login']);
          } else {
            //show error
            this.errorMessage = reponse.message;
            this.isLoading = false;
          }
        },
      });
    }
  }
}
