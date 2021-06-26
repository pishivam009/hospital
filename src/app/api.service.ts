import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin';
import { Appointment } from './appointment';
import { Doctor } from './doctor';
import { LoginDetails } from './login-details';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string ="http://localhost:8080";

  constructor(private http: HttpClient) { }

  userLogin(logindetails: LoginDetails ):Observable<User>{
    return this.http.post<User>(this.url+"/userLogin", logindetails);
  }

  adminLogin(logindetails: LoginDetails ):Observable<Admin>{
    return this.http.post<Admin>(this.url+"/adminLogin", logindetails);
  }

  doctorLogin(logindetails: LoginDetails ):Observable<Doctor>{
    return this.http.post<Doctor>(this.url+"/doctorLogin", logindetails);
  }

  userSignup(signupdetails:User):Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<any>(this.url+"/addUser", signupdetails, { headers, responseType: 'text' as 'json'  });
  }

  doctorSignup(signupdetails:Doctor):Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<any>(this.url+"/addDoctor", signupdetails, { headers, responseType: 'text' as 'json'  });
  }

  updateUser(signupdetails:User){
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.put<any>(this.url+"/updateUser", signupdetails, { headers, responseType: 'text' as 'json'  });
  }

  updateDoctor(signupdetails:Doctor){
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.put<any>(this.url+"/updateDoctor", signupdetails, { headers, responseType: 'text' as 'json'  });
  }

  userList():Observable<User[]>{
    return this.http.get<User[]>(this.url+"/allPatients");
  }

  doctorList():Observable<Doctor[]>{
    return this.http.get<Doctor[]>(this.url+"/allDoctors");
  }

  appointmentList():Observable<Appointment[]>{
    return this.http.get<Appointment[]>(this.url+"/allAppointments");
  }

  appointmentListByPatientId(id:number):Observable<Appointment[]>{
    return this.http.get<Appointment[]>(this.url+"/appointmentsByPID/"+id);
  }

  appointmentListByDoctorId(id:number):Observable<Appointment[]>{
    return this.http.get<Appointment[]>(this.url+"/appointmentsByDID/"+id);
  }

  deleteUser(id:number):Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.delete<any>(this.url+"/deletePatient/"+id,{ headers, responseType: 'text' as 'json'  });
  }

  deleteDoctor(id:number):Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.delete<any>(this.url+"/deleteDoctor/"+id,{ headers, responseType: 'text' as 'json'  });
  }

  maxSlot(id:number):Observable<number>{
    return this.http.get<number>(this.url+"/maxSlot/"+id);
  }

  checkAvailability(date: string, doctorId: number, slotNo: number):Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get<any>(this.url+"/checkAvailability/"+date+"/"+doctorId.toString()+"/"+slotNo.toString(),{ headers, responseType: 'text' as 'json'  });
  }

  makeAppointment(app:Appointment):Observable<any>{
    
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<any>(this.url+"/addAppointment", app,{ headers, responseType: 'text' as 'json'  })
  }

  confirmAppointment(id:number):Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<any>(this.url+"/confirmAppointment/"+id,{ headers, responseType: 'text' as 'json'  })
  }

  rejectAppointment(id:number):Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<any>(this.url+"/rejectAppointment/"+id,{ headers, responseType: 'text' as 'json'  })
  }

  addPrescription(id:number, val:string):Observable<any>{
     return this.http.get<any>(this.url+"/addPrescription/"+id+"/"+val);
  }

    
}
