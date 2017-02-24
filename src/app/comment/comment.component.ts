import {Component, OnInit} from '@angular/core';
import {NgRedux} from "@angular-redux/store";
import {PROPERTY_BINDING} from "../shared/data.service";
import {AppState} from "../app-state";
import {TransportOfferActions} from "../transport-offer/transport-offer.action";
import {AppActions} from "../app.actions";
import {CommentFormModel} from "./comment";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  public myOfferProperty$;

  constructor(private ngRedux: NgRedux<AppState>, private actions: AppActions, private ac: TransportOfferActions) {
    this.myOfferProperty$ = (property, secondProperty, thirdProperty) => {
      return PROPERTY_BINDING(ngRedux, property, secondProperty, thirdProperty)
    };
  }

  getItemName(index, item) {
    return item.text;
  }

  setDataToStore(data: CommentFormModel) {
    this.ngRedux.dispatch(this.ac.formData(data));
  }


  ngOnInit(): void {
  }
}
