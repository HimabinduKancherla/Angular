import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {of} from 'rxjs';
import {delay } from 'rxjs/operators';

@Injectable()
export class UserService {
constructor() { }
getUsersList(): User[]{
  return Users;
}
getColumns(): string[]{
  return ["name", "email", "gender"]};

  getFullColumns(): string[]{
    return ["name", "email", "gender", "hobbies", "mobile", "address"]};
}




export const Users: User[] =
[
 
]
export class User {
    id: number;
    name: string;
    email: string;
    gender: boolean;
    hobbies: string;
    mobile: string;
    address: string;
  }