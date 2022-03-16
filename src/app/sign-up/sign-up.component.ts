import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm = new FormGroup ({
    fName: new FormControl ('',Validators.required),
    LName: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    phoneNumber: new FormControl('',[Validators.required,Validators.pattern('(([(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})')]),
    password: new FormControl('',Validators.required),
    confirmPassword: new FormControl('',Validators.required)
  })

  get fName(){return this.signUpForm.get('fName')}
  get lName(){return this.signUpForm.get('lName')}
  get email(){return this.signUpForm.get('email')}
  get phoneNumber(){return this.signUpForm.get('phoneNumber')}
  get password(){return this.signUpForm.get('password')}
  get confirmPassword(){return this.signUpForm.get('confirmPassword')}

  constructor() { }

  ngOnInit(): void {
  }

}
