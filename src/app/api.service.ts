import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string ="http://localhost:8080";

  constructor(private http: HttpClient) { }

  userSignup(signupdetails:User):Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<any>(this.url+"/addUser", signupdetails, { headers, responseType: 'text' as 'json'  });
  }
    
}
