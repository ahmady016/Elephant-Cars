import { NgModule } from '@angular/core';
import {
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
