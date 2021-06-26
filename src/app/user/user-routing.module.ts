import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuard } from '../user.guard';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: 'user', component: UserComponent, canActivateChild: [UserGuard],
    children: 
    [
    { path: 'dashboard', component: UserDashboardComponent },
    { path: 'update', component: UserUpdateComponent }
  ]
  },
  { path: 'user/login', component: UserLoginComponent },
    { path: 'user/signup', component: UserSignupComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
