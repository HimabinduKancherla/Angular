import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidatorFn, FormArray, ValidationErrors } from '@angular/forms';
import {requireCheckboxesToBeCheckedValidator} from '../atleastonefield';
import { requireToBeValidator } from '../atleastone';
import { User, UserService } from '../user-data.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

UserModelList: User[];
UserModel : User;
  constructor(private atservice: UserService, public router: Router) { 
    this.UserModelList = this.atservice.getUsersList();
  }
  userForm = new FormGroup({
    name: new FormControl('',[ Validators.required,    
               Validators.pattern('[a-zA-Z][a-zA-Z ]+')]),
    gender: new FormControl('male'),
    email: new FormControl('', [Validators.required,Validators.email]),
    myHobbiesGroup: new FormGroup({
      myCheckbox1: new FormControl(false),
      myCheckbox2: new FormControl(false),      
    }, requireCheckboxesToBeCheckedValidator()),
    myMobileGroup: new FormGroup({
      mobile: new FormControl(''),
      phone: new FormControl(''),
    }, atLeastOne(Validators.required, ['mobile','phone']) ),
    myAddressGroup: new FormGroup({
      address1: new FormControl(''),
      address2: new FormControl(''),
    }, atLeastOne(Validators.required, ['address1','address2']) ),
});
  ngOnInit() {
  }
  createHobbies(hobbiesInputs) {
    const arr = hobbiesInputs.map(hobby => {
      return new FormControl(hobby.selected || false);
    });
    return new FormArray(arr);
  }
 
  public save() {
  
    if (this.userForm.valid) {
      this.UserModel = new User();
        this.UserModel.id= this.UserModelList.length + 1;
        this.UserModel.name= this.userForm.controls['name'].value;
        this.UserModel.email= this.userForm.controls['email'].value;
        this.UserModel.gender =this.userForm.controls['gender'].value;
         this.UserModel.mobile = this.userForm.controls['myMobileGroup'].value.mobile?this.userForm.controls['myMobileGroup'].value.mobile:this.userForm.controls['myMobileGroup'].value.phone ;
         this.UserModel.address =   this.userForm.controls['myAddressGroup'].value.address1? this.userForm.controls['myAddressGroup'].value.address1: this.userForm.controls['myAddressGroup'].value.address2;
        this.UserModel.hobbies = this.userForm.controls['myHobbiesGroup'].value.myCheckbox1? 'Sports': 'Music' ;       
        
      this.UserModelList.push(this.UserModel);
      this.router.navigate(["/User/List"]);
    }

  }
 
}

export function emailValidator(errorMessage: any): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    if (control.value.match(/[a-z0-9!#$%&"*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&"*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
      return null;
    } else {
      return { errorMessage };
    }
  };
}
export const atLeastOne = (validator: ValidatorFn, controls:string[] = null) => (
  group: FormGroup,
): ValidationErrors | null => {
  if(!controls){
    controls = Object.keys(group.controls)
  }

  const hasAtLeastOne = group && group.controls && controls
    .some(k => !validator(group.controls[k]));

  return hasAtLeastOne ? null : {
    atLeastOne: true,
  };
};