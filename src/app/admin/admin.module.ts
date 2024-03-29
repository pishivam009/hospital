import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import {MatTabsModule} from '@angular/material/tabs';
import { DoctorSignupComponent } from './doctor-signup/doctor-signup.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    DoctorSignupComponent,
    DoctorListComponent,
    UserListComponent,
    AppointmentListComponent

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    MatTabsModule
  ]
})
export class AdminModule { }
