import { AdminLoginComponent } from './admin-login/admin-login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { DoctorSignupComponent } from './doctor-signup/doctor-signup.component';

const routes: Routes = [
  {path:'admin', component: AdminComponent, children:[
    {path:'login', component:AdminLoginComponent},
    {path:'dashboard', component:AdminDashboardComponent, children:[
      {path:'addDoctor', component:DoctorSignupComponent}
    ]}
    
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
