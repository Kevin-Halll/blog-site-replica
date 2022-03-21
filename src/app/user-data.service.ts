import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private registerUrl = "http://10.44.16.51:8000/sanctum";

  constructor(private http : HttpClient) { }

  registerUser(data: any){
    return this.http.post<any>(this.registerUrl, data)
  }

}
