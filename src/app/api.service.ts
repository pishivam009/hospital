import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin';
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

  userList():Observable<User[]>{
    return this.http.get<User[]>(this.url+"/allPatients");
  }

  doctorList():Observable<Doctor[]>{
    return this.http.get<Doctor[]>(this.url+"/allDoctors");
  }

  deleteUser(id:number):Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.delete<any>(this.url+"/deletePatient/"+id,{ headers, responseType: 'text' as 'json'  });
  }

  deleteDoctor(id:number):Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.delete<any>(this.url+"/deleteDoctor/"+id,{ headers, responseType: 'text' as 'json'  });
  }
    
}
