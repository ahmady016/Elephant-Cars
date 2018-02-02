import { NgModule } from '@angular/core';
import {
  MatProgressSpinnerModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule,
  MatListModule,
  MatCardModule,
  MatIconModule
} from '@angular/material';

@NgModule({
  exports: [
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatIconModule
  ],
})
export class MatComponentsModule { }
