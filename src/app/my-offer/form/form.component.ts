import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import {MyOffer} from "../my-offer";
import {AppState, MyOfferState} from "../../app-state";
import {NgRedux} from "@angular-redux/store";
import {AppActions} from "../../app.actions";
import {MyOfferActions} from "../my-offer.actions";


@Component({
  selector: 'app-form',
  templateUrl: 'form.component.html',
  styleUrls: ['form.component.css']
})
export class FormComponent implements OnInit {

  loginForm: FormGroup;

  ngOnInit() {

    this.loginForm = this.fb.group({
      price: [0, Validators.required],
      timeToLeft: [0, Validators.required]
    });

    this.ngRedux.select('myOffer').subscribe((data: MyOfferState) => {  // TODO usunąć subskrybcje
      this.loginForm.patchValue({
        price: data.updateForm.price,
        timeToLeft: data.updateForm.timeToLeft
      });
    });


    this.loginForm.valueChanges.debounceTime(1000).subscribe((value) => {
      this.onControlValueChanged();
    });
    this.onControlValueChanged();
  }

  constructor(public fb: FormBuilder, private actions: AppActions, private ac: MyOfferActions, private ngRedux: NgRedux<AppState>) {
  }

  doLogin(event: MyOffer) {

    const myOffer = new MyOffer(this.loginForm.value.price, this.loginForm.value.timeToLeft, "ja" + Math.random());
    this.ngRedux.dispatch(this.ac.formData(myOffer));
    this.ngRedux.dispatch(this.actions.postDataMyOffer());
  }


  formErrors = {
    firstname: '',
    lastname: ''
  }

  private validationMessages = {
    firstname: {
      required: 'username is required'
    },
    lastname: {
      required: 'lastname is required',
      minlength: 'lastname must have at least 3 characters'
    }
  }


  onControlValueChanged(): void {
    const form = this.loginForm;

    for (let field in this.formErrors) {
      this.formErrors[field] = '';
      let control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const validationMessages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += validationMessages[key] + ' ';
        }
      }
    }
  }
}
