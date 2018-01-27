import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from './../auth.service';

@Component({
  selector: 'login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})

export class LoginRegisterComponent implements OnInit {

  authForm: FormGroup;
  email: FormControl;
  password: FormControl;

  constructor(public authSrv: AuthService) { }

  register(value) {
    if (this.authForm.valid) {
      this.authSrv.register(value.email,value.password);
      this.authForm.reset();
    }
  }

  login(value) {
    if (this.authForm.valid) {
      this.authSrv.login(value.email,value.password);
      this.authForm.reset();
    }
  }

  createForm() {
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
    ]);

    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);

    this.authForm = new FormGroup({
      email: this.email,
      password: this.password
    });
  }

  ngOnInit() {
    this.createForm();
  }

}
