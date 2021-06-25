import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }
  list: User[] = [];
  active: boolean = false;
  refreshedOn: string = "";
  getUserList() {
    this.active = true;
    this.refreshedOn = Date.now().toString();
    this.list=[];
    this.apiService.userList().subscribe(
      (data) => { this.list = data; }

    );
  }

  doDeleteUser(id: number): void {
    if (confirm("Are you sure you want to delete this")) {
      this.apiService.deleteUser(id).subscribe((data) => {
        this.getUserList();
      });
      


    }
  }

}
