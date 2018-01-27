import { Component } from '@angular/core';
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Elephant Cars';
  constructor(public authSrv: AuthService) {
    this.authSrv.login('intern@theelephant.tech', 'thisIsSecure');
    setTimeout(() => this.authSrv.login('ahmady09@gmail.com', '335592ah'), 10000);
  }
}
