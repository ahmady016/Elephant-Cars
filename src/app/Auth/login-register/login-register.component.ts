import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';

@Component({
  selector: 'login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})

export class LoginRegisterComponent implements OnInit {

  email: string;
  password: string;

  constructor(public authSrv: AuthService) { }

  register() {
    this.authSrv.register(this.email, this.password);
    this.email = this.password = '';
  }

  login() {
    this.authSrv.login(this.email, this.password);
    this.email = this.password = '';
  }

  logout() {
    this.authSrv.logout();
  }

  ngOnInit() {
  }

}
