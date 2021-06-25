import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';
import { DoctorUpdateComponent } from './doctor-update/doctor-update.component';
import { DoctorComponent } from './doctor.component';

const routes: Routes = [
  {path:'doctor', component:DoctorComponent, children: [
    {path:'login', component:DoctorLoginComponent},
    {path:'dashboard', component:DoctorDashboardComponent},
    {path:'update', component:DoctorUpdateComponent}
  ]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
