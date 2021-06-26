import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { FormsModule } from '@angular/forms';
import { DoctorComponent } from './doctor.component';
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';
import { DoctorUpdateComponent } from './doctor-update/doctor-update.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [
    DoctorComponent,
    DoctorLoginComponent,
    DoctorDashboardComponent,
    DoctorUpdateComponent,
    AppointmentListComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    FormsModule,
    MatTabsModule
  ]
})
export class DoctorModule { }
