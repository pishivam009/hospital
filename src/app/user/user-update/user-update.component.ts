import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  constructor(private http: HttpClient, private apiService: ApiService) { }

  ngOnInit(): void {
  }

  bgs = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  bGroup!: string;
  setBloodGroup(bloodGroup: string) {
    this.bGroup = bloodGroup;
  }

  id: string | null = sessionStorage.getItem("userId");
  name: string | null = sessionStorage.getItem("userName");
  email: string | null = sessionStorage.getItem("userEmail");
  contact: string | null = sessionStorage.getItem("userContact");
  address: string | null = sessionStorage.getItem("userAddress");
  govtId: string | null = sessionStorage.getItem("userGovtId");
  bloodGroup: string | null = sessionStorage.getItem("userBloodGroup");



  message: any = "";

  doUpdateUser(signupDetails: User) {

    if (confirm("Are you sure you want to update the details?")) {
      this.apiService.updateUser(signupDetails).subscribe(
        (data) => {
          this.message = data;
        }
      );
    }
  }
}
