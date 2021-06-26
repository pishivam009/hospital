import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Appointment } from 'src/app/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  patientId= Number(sessionStorage.getItem('userId'));

  list: Appointment[] = [];
  active: boolean = false;
  refreshedOn: string = "";
  getAppointmentList() {
    this.active = true;
    this.refreshedOn = Date.now().toString();
    this.list=[];
    console.log(this.patientId);
    this.apiService.appointmentListByPatientId(this.patientId).subscribe(
      (data) => { this.list = data; }

    );
  }

}
