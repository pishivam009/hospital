import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hospital';

  constructor(private router: Router){}

  rtr=this.router;

  doLogout(){
    sessionStorage.clear();
    alert('Logged out');
    this.router.navigate(['/']);
  }
}
