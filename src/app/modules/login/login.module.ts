import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MatSnackBarModule } from '@angular/material/snack-bar'; // Import MatSnackBarModule


const routes: Routes = [
  {
    path:"",
    component: LoginComponent,
  }
];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule, // Include ReactiveFormsModule here
    RouterModule.forChild(routes),
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    LoginComponent
  ],
  schemas: []
})
export class LoginModule { }
