import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserComponent } from './user.component';
import { FormsModule } from '@angular/forms';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';


@NgModule({
  declarations: [
    UserComponent,
    UserLoginComponent,
    UserSignupComponent,
    UserDashboardComponent 
    
  ],
  imports: [
    UserRoutingModule,
    CommonModule,
    FormsModule
  ]
})
export class UserModule { }
