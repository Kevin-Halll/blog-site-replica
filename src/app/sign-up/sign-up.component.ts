import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserInfoInterceptor } from '../user-info.interceptor';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  // http: any;

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
  // results;
  constructor(http: HttpClient) {
    const path = "http://10.44.16.165:8000/api/company";
    // this.results = http.get(path);

    http.post(path, {name: "Sherdan Motors", email: "mail@madw.wdw", description: "Descriotionsds", phone: "211232"}, { headers: {"Authorization": "Bearer 2|iJfj2qtDu8UHCd0H8bzd6CE5uhyO4WGOS2DOvEVu", "Accept": "application/json"}}).subscribe((resp: any) => {
      http.get(`http://10.44.16.165:8000/api/company/${resp.id}`).subscribe((resp: any) => {
        console.log(resp);
      });
    });


  }

  ngOnInit(): void {
  }

}
