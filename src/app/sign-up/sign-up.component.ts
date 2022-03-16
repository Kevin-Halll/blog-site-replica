import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

 passwordValidator(control: AbstractControl):{[Key:string]:boolean} | null {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  if(password?.pristine || confirmPassword?.pristine){
      return null
  }

   return password && confirmPassword && password.value != confirmPassword.value ?
   {'misMatch': true}:
   null;
}

  signUpForm = new FormGroup ({
    fName: new FormControl ('',Validators.required),
    lName: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    phoneNumber: new FormControl('',[ Validators.required]),
    password: new FormControl('',Validators.required),
    confirmPassword: new FormControl('',Validators.required)
  },{validators :this.passwordValidator})

  get fName(){return this.signUpForm.get('fName')}
  get lName(){return this.signUpForm.get('lName')}
  get email(){return this.signUpForm.get('email')}
  get phoneNumber(){return this.signUpForm.get('phoneNumber')}
  get password(){return this.signUpForm.get('password')}
  get confirmPassword(){return this.signUpForm.get('confirmPassword')}


  Submit(){
      alert("Account Created")
  }
  constructor() { }

  ngOnInit(): void {
  }

}
