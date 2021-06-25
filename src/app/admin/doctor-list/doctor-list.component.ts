import { Doctor } from './../../doctor';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  doctorSignup=false;
  activateDoctorSignup(){
    this.doctorSignup=true;
  }

  list: Doctor[] = [];
  active: boolean = false;
  refreshedOn: string = "";
  getDoctorList() {
    this.active = true;
    this.doctorSignup=false;
    this.refreshedOn = Date.now().toString();
    this.list=[];
    this.apiService.doctorList().subscribe(
      (data) => { this.list = data; }

    );
  }


  doDeleteDoctor(id: number): void {
    if (confirm("Are you sure you want to delete this")) {
      this.apiService.deleteDoctor(id).subscribe((data) => {
        this.getDoctorList();
      });
      


    }
  }

}
