import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import {Validators, FormBuilder} from "@angular/forms";
import {AppActions} from "../../app.actions";
import {TransportOfferActions} from "../../transport-offer/transport-offer.action";
import {AppState} from "../../app-state";
import {NgRedux}from "@angular-redux/store"
import {CommentFormModel} from "../comment";

@Component({
  selector: 'app-comment-form',
  templateUrl: 'comment-form.component.html',
  styleUrls: ['comment-form.component.css']
})
export class CommentFormComponent implements OnInit {

  ngOnInit(): void {
  }

  @Input() root = "";
  @Output() formData: EventEmitter<any> = new EventEmitter();

  public loginForm = this.fb.group({
    text: [""]
  });

  constructor(public fb: FormBuilder, private actions: AppActions, private ac: TransportOfferActions, private ngRedux: NgRedux<AppState>) {
  }

  createTransport(event: CommentFormModel) {
    const comment = new CommentFormModel(this.loginForm.value.text, this.root);
    this.formData.emit(comment);
  }

}
