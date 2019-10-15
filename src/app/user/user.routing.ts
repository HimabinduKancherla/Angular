import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ViewComponent } from './view/view.component';

const userRoutes: Routes = [
   { children: [ 
        {
            path: "", pathMatch: "full", redirectTo: "List",
        },
        {
            component: UserListComponent,
            path: "List",
           
        },
        {
            component: EditUserComponent,
            path: "Open/:id",           
        },
        {
            component: ViewComponent,
            path: "View/:id",           
        },
        {
            component: AddUserComponent,
            path: "New",           
        },
    ],
    path: "",
}
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)
  ],
  exports: [RouterModule]
})

export class UserRoutingModule { }
