import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Doctor } from 'src/app/doctor';

@Component({
  selector: 'app-doctor-update',
  templateUrl: './doctor-update.component.html',
  styleUrls: ['./doctor-update.component.css']
})
export class DoctorUpdateComponent implements OnInit {

  constructor(private http: HttpClient, private apiService: ApiService ) { }

  ngOnInit(): void {
  }

  id: string | null = sessionStorage.getItem("doctorId");
  name: string | null = sessionStorage.getItem("doctorName");
  email: string | null = sessionStorage.getItem("doctorEmail");
  contact: string | null = sessionStorage.getItem("doctorContact");
  address: string | null = sessionStorage.getItem("userdoctorAddressAddress");
  govtId: string | null = sessionStorage.getItem("doctorGovtId");
  dept: string | null = sessionStorage.getItem("doctorDept");


  message: any = "";

  doUpdateDoctor(signupDetails: Doctor) {

    if (confirm("Are you sure you want to update the details?")) {
      this.apiService.updateDoctor(signupDetails).subscribe(
        (data) => {
          this.message = data;
        }
      );
    }
  }

}
