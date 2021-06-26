import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hospital';

  constructor(private router: Router) { }

  rtr = this.router;

  doLogout() {
    sessionStorage.clear();
    alert('Logged out');
    this.router.navigate(['/']);
  }

  dashboard() {
    if (sessionStorage.getItem('doctorIsLoggedIn') == 'true') {
      this.router.navigate(['doctor/dashboard']);
    } else if (sessionStorage.getItem('userIsLoggedIn') == 'true') {
      this.router.navigate(['user/dashboard']);
    } else if (sessionStorage.getItem('adminIsLoggedIn') == 'true') {
      this.router.navigate(['admin/dashboard']);
    }

    else {
      alert('Please Log In');
      this.router.navigate(['']);
    }
  }
}
