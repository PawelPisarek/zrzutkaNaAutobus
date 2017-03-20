import {Component, OnInit} from '@angular/core';
import {LoginService} from "./login.service";
import {LoginInterface} from "./login.interface";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) {
  }

  ngOnInit() {
  }

  submitForm(formValues: LoginInterface) {
    this.loginService.getToken(formValues)
      .subscribe((data) => {
        console.log(data);
      });
  }

}
