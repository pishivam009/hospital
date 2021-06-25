import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Doctor } from 'src/app/doctor';

@Component({
  selector: 'app-doctor-signup',
  templateUrl: './doctor-signup.component.html',
  styleUrls: ['./doctor-signup.component.css']
})
export class DoctorSignupComponent implements OnInit {

  constructor(private apiService: ApiService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

 

  doDoctorSignup(userData: Doctor){
    this.apiService.doctorSignup(userData).subscribe(
      data => {
        alert(data);
      }
    );
    }

}
