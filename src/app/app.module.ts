import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatComponentsModule } from './mat-components.module';

import { AuthService } from './auth/auth.service';
import { CarsService } from './cars/cars.service';

import { env } from '../environments/environment';

import { AppComponent } from './root/app.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { LoginRegisterComponent } from './auth/login-register/login-register.component';
import { CarsListComponent } from './cars/cars-list/cars-list.component';
import { CarDetailsComponent } from './cars/car-details/car-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginRegisterComponent,
    CarsListComponent,
    ToolbarComponent,
    CarDetailsComponent
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
  providers: [AuthService, CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
