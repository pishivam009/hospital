import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [
    AdminComponent,
    AdminLoginComponent,
    AdminDashboardComponent

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    MatTabsModule
  ]
})
export class AdminModule { }
