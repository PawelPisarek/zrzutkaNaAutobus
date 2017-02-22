import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DelayedTransportModel} from "../delayed-transport/delayed-transport.interface";
import {NgRedux, DevToolsExtension} from '@angular-redux/store';
import {DelayedTransportActions} from "../delayed-transport/delayed-transport.actions";
import {AppActions} from "../app.actions";

@Component({
  selector: 'app-delayed-transport-add',
  templateUrl: './delayed-transport-add.component.html',
  styleUrls: ['./delayed-transport-add.component.css']
})
export class DelayedTransportAddComponent implements OnInit {
  ngOnInit(): void {
  }

  public loginForm = this.fb.group({
    nameTrain: [""],
    from: [""],
    alternative: ["", Validators.required],
    lat: ["", Validators.required],
    lng: ["", Validators.required]
  });

  constructor(public fb: FormBuilder, private actions: AppActions, private ac: DelayedTransportActions, private ngRedux: NgRedux<any>) {
  }

  createTransport(event: DelayedTransportModel) {
    const transport = new DelayedTransportModel(
      this.loginForm.value.nameTrain,
      this.loginForm.value.alternative,
      this.loginForm.value.from,
      this.loginForm.value.lat,
      this.loginForm.value.lng);

    this.ngRedux.dispatch(this.ac.formData([transport]));
    this.ngRedux.dispatch(this.actions.postData());
  }
}
