import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Appointment } from 'src/app/appointment';
import { Doctor } from 'src/app/doctor';

@Component({
  selector: 'app-request-appointment',
  templateUrl: './request-appointment.component.html',
  styleUrls: ['./request-appointment.component.css']
})
export class RequestAppointmentComponent implements OnInit {

  constructor(private apiService: ApiService) { }
  counter(i: number) {
    return new Array(i);
  }
  ds: Doctor[] = [];



  ngOnInit(): void {
    this.getDoctorList();
  }
  doctorId!: number;
  slotNo!: number;
  maxSlots!: number;
  date!: string;
  problem!: string;
  availability!: string;

  a: any;

  setDoctorId(id: number) {
    this.doctorId = id;
    this.getMaxSlots(id);
    //console.log(this.doctorId);
  }

  getDoctorList() {
    this.apiService.doctorList().subscribe((data) => { this.ds = data; });
  }

  getMaxSlots(doctorId: number) {
    this.apiService.maxSlot(doctorId).subscribe((data) => { this.maxSlots = data; });
  }

  setSlotNo(i: number) {
    this.slotNo = i;
  }

  doCheckAvailability() {
    console.log(this.date);
    this.apiService.checkAvailability(this.date, this.doctorId, this.slotNo).subscribe((data) => this.availability = data);
  }

  doMakeAppointment(val: any) {
    this.a = {
      date: val.date,
      patientId: Number(sessionStorage.getItem('userId')),
      doctorId: val.doctorId,
      slotNo: this.slotNo,
      status: 0,
      prescription: '',
      problem: this.problem
    };
    console.log(this.a);
    this.apiService.makeAppointment(this.a).subscribe((data) => alert(data));
  }

}
