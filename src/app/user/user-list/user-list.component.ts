import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../user-data.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  
  userList: User[];
  columns: string[];
  
  constructor(private atService: UserService) { }
  
  ngOnInit() {
    this.columns = this.atService.getColumns(); 
  
    this.userList = this.atService.getUsersList();
  }

}
