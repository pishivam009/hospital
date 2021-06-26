import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorGuard implements CanActivateChild {
  constructor(private router: Router){}
  canActivateChild():boolean {
    if(sessionStorage.getItem("doctorIsLoggedIn")=='true'){
      return true;
    }else{
      alert("Not Logged In");
      this.router.navigate(['']);
      return false;
    }
    
  }
  
}
