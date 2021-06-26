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
    this.getAppointmentList();
  }

  doctorId=Number(sessionStorage.getItem('doctorId'));
  prescription="";

  list: Appointment[] = [];
  active: boolean = false;
  refreshedOn: string = "";
  getAppointmentList() {
    this.active = true;
    this.refreshedOn = Date.now().toString();
    this.list=[];
    this.apiService.appointmentListByDoctorId(this.doctorId).subscribe(
      (data) => { this.list = data; }

    );
  }

  doRejectAppointment(id:number){
    this.apiService.rejectAppointment(id).subscribe(
      data => { this.getAppointmentList();}
    );
    
  }


  doConfirmAppointment(id:number){
    this.apiService.confirmAppointment(id).subscribe(
      data => { this.getAppointmentList();}
    );
    this.getAppointmentList();
  }

  doAddPrescription(id:number,val:string){
    console.log(id+ " "+val);
    this.apiService.addPrescription(id, this.prescription).subscribe( data => {this.getAppointmentList();})
    
  }
}
