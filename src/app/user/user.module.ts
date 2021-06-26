import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserComponent } from './user.component';
import { FormsModule } from '@angular/forms';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import {MatSelectModule} from '@angular/material/select';
import { UserUpdateComponent } from './user-update/user-update.component';
import { RequestAppointmentComponent } from './request-appointment/request-appointment.component';
import { MatTabsModule } from '@angular/material/tabs';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';


@NgModule({
  declarations: [
    UserComponent,
    UserLoginComponent,
    UserSignupComponent,
    UserDashboardComponent,
    UserUpdateComponent,
    RequestAppointmentComponent,
    AppointmentListComponent 
    
  ],
  imports: [
    UserRoutingModule,
    CommonModule,
    FormsModule,
    MatSelectModule,
    MatTabsModule,
    MatDatepickerModule
  ]
})
export class UserModule { }
