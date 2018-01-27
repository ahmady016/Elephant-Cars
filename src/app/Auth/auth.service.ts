import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;

  constructor(private fireAuth: AngularFireAuth,
              private snackBar: MatSnackBar,
              private router: Router ) {
    this.user = fireAuth.authState;
  }

  register(email: string, password: string) {
    this.fireAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        this.snackBar.open('Success!', value, {
          duration: 5000
        });
        console.log('User Registered!', value);
        this.router.navigate(['home']);
      })
      .catch(err => {
        this.snackBar.open(err.message, 'Something went wrong:', {
          duration: 5000
        });
        console.log('Something went wrong:',err.message);
      });
  }

  login(email: string, password: string) {
    this.fireAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        this.snackBar.open('User Loged In!', value.email, {
          duration: 5000
        });
        console.log('Nice, it worked!', [value.email, value.uid]);
        this.router.navigate(['home']);
      })
      .catch(err => {
        this.snackBar.open(err.message, 'Something went wrong:', {
          duration: 5000
        });
        console.log('Something went wrong:',err.message);
      });
  }

  logout() {
    this.fireAuth
      .auth
      .signOut()
      .then(() => {
        this.snackBar.open('User Loged Out!', 'goodby' ,{
          duration: 5000
        });
        console.log('Nice, it worked!');
        this.router.navigate(['login']);
      })
      .catch(err => {
        this.snackBar.open(err.message, 'Something went wrong:', {
          duration: 5000
        });
        console.log('Something went wrong:',err.message);
      });
  }

}
