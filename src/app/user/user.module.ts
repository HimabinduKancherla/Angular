import { NgModule } from '@angular/core';

import { AddUserComponent } from './add-user/add-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserRoutingModule } from './user.routing';
import { MatInputModule, MatFormFieldModule} from "@angular/material";
import { ReactiveFormsModule,  FormsModule } from '@angular/forms';
import {  UserService } from './user-data.service';
import {CommonModule} from '@angular/common';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [AddUserComponent, UserListComponent, EditUserComponent, ViewComponent],
  imports: [
    
    UserRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
    
  ],
  providers:[ UserService ]
})
export class UserModule { }
