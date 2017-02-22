import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {MyOffer} from "../my-offer";
import {AppState} from "../../app-state";
import {NgRedux} from "@angular-redux/store";
import {AppActions} from "../../app.actions";
import {MyOfferActions} from "../my-offer.actions";


@Component({
  selector: 'app-form',
  templateUrl: 'form.component.html',
  styleUrls: ['form.component.css']
})
export class FormComponent implements OnInit {
  public loginForm = this.fb.group({
    price: ["", Validators.required],
    timeToLeft: ["", Validators.required]
  });

  constructor(public fb: FormBuilder, private actions: AppActions, private ac: MyOfferActions, private ngRedux: NgRedux<any>) {
  }

  ngOnInit(): void {
  }

  doLogin(event: MyOffer) {

    const myOffer = new MyOffer(this.loginForm.value.price, this.loginForm.value.timeToLeft);
    this.ngRedux.dispatch(this.ac.formData(myOffer));
    this.ngRedux.dispatch(this.actions.postDataMyOffer());
  }







}
