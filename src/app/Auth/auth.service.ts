import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;

  constructor(private fireAuth: AngularFireAuth,
              private snackBar: MatSnackBar) {
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
        console.log('Nice, it worked!'))
      .catch(err => {
        this.snackBar.open(err.message, 'Something went wrong:', {
          duration: 5000
        });
        console.log('Something went wrong:',err.message);
      });
  }

}
