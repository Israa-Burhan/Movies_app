import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private _AuthService: AuthService) {}
  isLogin: boolean = false;
  userInfo: any = {};

  logout() {
    this._AuthService.signOut();
  }
  ngOnInit(): void {
    this._AuthService.userData.subscribe({
      next: () => {
        if (this._AuthService.userData.getValue() != null) {
          this.isLogin = true;
          this.userInfo = this._AuthService.userData;
          console.log(this.userInfo.getValue().firstName);
        } else {
          this.isLogin = false;
        }
      },
    });
  }
}
