import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/admin';
import { ApiService } from 'src/app/api.service';
import { LoginDetails } from 'src/app/login-details';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient, private apiService: ApiService) { }

  ngOnInit(): void {
  }

  data: Admin = new Admin();
  doAdminLogin(formValue: LoginDetails) {
    this.apiService.doctorLogin(formValue).subscribe(
      (val: Admin) => {
        this.data = val;
        console.log(val);

        if (val.id > 0) {

          sessionStorage.setItem("adminId", val.id.toString());
          sessionStorage.setItem("adminName", val.name);
          sessionStorage.setItem("adminEmail", val.email);
          sessionStorage.setItem("adminContact", val.contact);
          sessionStorage.setItem("adminIsLoggedIn", 'true');
        
          alert("Login successful");
          this.router.navigate(['../admin/dashboard']);
    
        } else {
          alert("Invalid Credentials");
          this.router.navigate(['../admin']);
        }
    
      }
    );
    

  }

}
