import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { LoginDetails } from 'src/app/login-details';
import { User } from 'src/app/user';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private apiService: ApiService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  data: User = new User();
 
  doUserLogin(formValue: LoginDetails) {
    this.apiService.userLogin(formValue).subscribe(
      (val: User) => {
        this.data = val;
        console.log(val);

        if (val.id > 0) {

          sessionStorage.setItem("userId", val.id.toString());
          sessionStorage.setItem("userName", val.name);
          sessionStorage.setItem("userEmail", val.email);
          sessionStorage.setItem("userContact", val.contact);
          sessionStorage.setItem("userGovtId", val.govtId);
          sessionStorage.setItem("userAddress", val.address);
          sessionStorage.setItem("userBloodGroup", val.bloodGroup);
          sessionStorage.setItem("userIsLoggedIn", 'true');
        
          alert("Login successful");
    
        } else {
          alert("Invalid Credentials");
        }
    
      }
    );
    

  }

}
