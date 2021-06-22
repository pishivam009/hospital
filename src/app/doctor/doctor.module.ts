import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { FormsModule } from '@angular/forms';
import { DoctorComponent } from './doctor.component';
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';


@NgModule({
  declarations: [
    DoctorComponent,
    DoctorLoginComponent,
    DoctorDashboardComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    FormsModule
  ]
})
export class DoctorModule { }
