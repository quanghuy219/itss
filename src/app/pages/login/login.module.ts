import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UtilModule } from '../../core/util/util.module'

import { LoginComponent } from './login.component';
// import { RegisterComponent } from './register/register.component';
// import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LoginRoutes } from './login.routes';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LoginRoutes),
    FormsModule,
    UtilModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent
    // ForgetPasswordComponent
  ]
})
export class LoginModule { }
