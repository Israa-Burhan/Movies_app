import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _HttpClient: HttpClient, private _Router: Router) {
    if (localStorage.getItem('userToken')) {
      this.saveUserData();
    }
  }
  userData = new BehaviorSubject(null);
  saveUserData(): void {
    let encodedToken = JSON.stringify(localStorage.getItem('userToken'));
    let decodedToken: any = jwtDecode(encodedToken);
    this.userData.next(decodedToken);
    console.log(decodedToken);
  }
  signup(formData: object): Observable<any> {
    return this._HttpClient.post(
      'https://register-for-test.vercel.app/auth/signup',
      formData
    );
  }
  signin(formData: object): Observable<any> {
    return this._HttpClient.post(
      'https://register-for-test.vercel.app/auth/signin',
      formData
    );
  }

  signOut() {
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this._Router.navigate(['/login']);
  }
}
