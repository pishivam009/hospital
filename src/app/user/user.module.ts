import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserComponent } from './user.component';


@NgModule({
  declarations: [
    UserComponent,
    UserLoginComponent,
    UserSignupComponent
    
  ],
  imports: [
    UserRoutingModule,
    CommonModule
  ]
})
export class UserModule { }
