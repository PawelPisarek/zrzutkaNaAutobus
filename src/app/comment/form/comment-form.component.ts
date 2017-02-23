import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Validators, FormBuilder} from "@angular/forms";
import {AppActions} from "../../app.actions";
import {TransportOfferActions} from "../../transport-offer/transport-offer.action";
import {AppState} from "../../app-state";
import {NgRedux}from "@angular-redux/store"

@Component({
  selector: 'app-comment-form',
  templateUrl: 'comment-form.component.html',
  styleUrls: ['comment-form.component.css']
})
export class CommentFormComponent implements OnInit {

  ngOnInit(): void {
  }

  @Output() formData: EventEmitter<any> = new EventEmitter();

  public loginForm = this.fb.group({
    text: [""]
  });

  constructor(public fb: FormBuilder, private actions: AppActions, private ac: TransportOfferActions, private ngRedux: NgRedux<AppState>) {
  }

  createTransport(event: any) {
    this.formData.emit(this.loginForm.value);
  }

}
