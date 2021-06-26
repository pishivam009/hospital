import { AdminLoginComponent } from './admin-login/admin-login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { DoctorSignupComponent } from './doctor-signup/doctor-signup.component';
import { AdminGuard } from '../admin.guard';

const routes: Routes = [
  {path:'admin', component: AdminComponent, canActivateChild: [AdminGuard], children:[
    
    {path:'dashboard', component:AdminDashboardComponent, children:[
      {path:'addDoctor', component:DoctorSignupComponent}
    ]}
    
  ]},
  {path:'admin/login', component:AdminLoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
