import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../user-data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  UserDetails: any;
  columns: string[];
  constructor(private atservice: UserService, public router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
   
    this.columns = this.atservice.getFullColumns(); 
    this.UserDetails = this.atservice.getUsersList().filter(book => book.id.toString() == this.route.snapshot.paramMap.get('id'));

  }

}
