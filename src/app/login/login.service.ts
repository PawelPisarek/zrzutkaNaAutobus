import {Injectable} from '@angular/core';
import {Headers, Http} from "@angular/http";
import {LoginInterface} from "./login.interface";
import {URL} from "../shared/data.service";

@Injectable()
export class LoginService {


  constructor(private http: Http) {
  }

  private HEADER = {
    headers: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic Y2xpZW50YXBwOjEyMzQ1Ng=='
    })
  };


  getToken(login: LoginInterface) {

    console.log(login);
    let cos= {
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ba6f59c6-b1c7-4235-ac27-c3edd85250b0'
      })
    }

    this.http.get(`http://localhost:8080/api/delayed-transport/1`,cos).subscribe((asd)=>{
      console.log(asd);});



    let params: string = [`username=${login.username}`, `password=${login.password}`, `grant_type=password`].join('&');
    console.log(params);
    return this.http.post(`${URL}/oauth/token`, params, this.HEADER)
      .map(resp => resp.json())
  }
}
