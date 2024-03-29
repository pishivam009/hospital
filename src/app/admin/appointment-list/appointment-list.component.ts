import { Appointment } from './../../appointment';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  list: Appointment[] = [];
  active: boolean = false;
  refreshedOn: string = "";
  getAppointmentList() {
    this.active = true;
    this.refreshedOn = Date.now().toString();
    this.list=[];
    this.apiService.appointmentList().subscribe(
      (data) => { this.list = data; }

    );
  }

}
