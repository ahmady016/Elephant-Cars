import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatComponentsModule } from './mat-components.module';

import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { CarsService } from './cars/cars.service';

import { env } from '../environments/environment';

import { AppComponent } from './root/app.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { LoginRegisterComponent } from './auth/login-register/login-register.component';
import { CarsListComponent } from './cars/cars-list/cars-list.component';
import { CarDetailsComponent } from './cars/car-details/car-details.component';
import { SaveCarComponent } from './cars/save-car/save-car.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginRegisterComponent },
  { path: 'home', component: CarsListComponent, canActivate: [AuthGuard] },
  { path: 'car/add', component: SaveCarComponent, canActivate: [AuthGuard] },
  { path: 'car/:id', component: CarDetailsComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    LoginRegisterComponent,
    CarsListComponent,
    CarDetailsComponent,
    SaveCarComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(env.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    MatComponentsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService, AuthGuard, CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
