import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

  constructor(private apiService: ApiService, private router: Router, private http: HttpClient) { }
  bgs=["A+","A-","B+","B-","AB+","AB-","O+","O-"];

  bloodGroup!:string;
  setBloodGroup(bloodGroup:string){
    this.bloodGroup = bloodGroup;
  }

  doUserSignup(userData: User){
  this.apiService.userSignup(userData).subscribe(
    data => {
      alert(data);
    }
  );
  }

  
  ngOnInit(): void {
  }


 

}
