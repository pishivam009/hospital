import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Doctor } from 'src/app/doctor';
import { LoginDetails } from 'src/app/login-details';
import { User } from 'src/app/user';

@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css']
})
export class DoctorLoginComponent implements OnInit {

  constructor(private apiService: ApiService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }
  data: Doctor = new Doctor();
 
  doDoctorLogin(formValue: LoginDetails) {
    this.apiService.doctorLogin(formValue).subscribe(
      (val: Doctor) => {
        this.data = val;
        console.log(val);

        if (val.id > 0) {

          sessionStorage.setItem("doctorId", val.id.toString());
          sessionStorage.setItem("doctorName", val.name);
          sessionStorage.setItem("doctorEmail", val.email);
          sessionStorage.setItem("doctorContact", val.contact);
          sessionStorage.setItem("doctorGovtId", val.govtId);
          sessionStorage.setItem("doctorAddress", val.address);
          sessionStorage.setItem("doctorDept", val.dept);
          sessionStorage.setItem("doctorIsLoggedIn", 'true');
        
          alert("Login successful");
    
        } else {
          alert("Invalid Credentials");
        }
    
      }
    );
    

  }


}
