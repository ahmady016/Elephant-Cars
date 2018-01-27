import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatComponentsModule } from './mat-components.module';

import { AuthService } from './auth/auth.service';
import { AppComponent } from './root/app.component';
import { env } from '../environments/environment';
import { LoginRegisterComponent } from './auth/login-register/login-register.component';
import { CarsListComponent } from './cars/cars-list/cars-list.component';
import { ToolbarComponent } from './Layout/toolbar/toolbar.component';
  @NgModule({
  declarations: [
    AppComponent,
    LoginRegisterComponent,
    CarsListComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(env.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    MatComponentsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
