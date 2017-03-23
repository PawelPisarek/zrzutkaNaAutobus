import {Injectable} from "@angular/core";
import {Headers, Http} from "@angular/http";
import {LoginInterface} from "./login.interface";
import {OLD_URL, APP_URL, USER_EMAIL} from "../shared/data.service";
import {ApiHttpService} from "../auth/api-http.service";

@Injectable()
export class LoginService {


  constructor(private http: Http, private authHttp: ApiHttpService) {
  }

  private HEADER = {
    headers: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic Y2xpZW50YXBwOjEyMzQ1Ng=='
    })
  };


  getToken(login: LoginInterface) {
    let params: string = [`username=${login.username}`, `password=${login.password}`, `grant_type=password`].join('&');
    return this.http.post(`${APP_URL}/oauth/token`, params, this.HEADER)
      .map(resp => resp.json())
      .map(resp => {
        sessionStorage.setItem('token', resp.access_token)
        sessionStorage.setItem(USER_EMAIL, login.username);
        return resp;
      })
  }
}
