import {Component, OnInit} from "@angular/core";
import {NgRedux} from "@angular-redux/store";
import {MyOfferState, AppState} from "../app-state";
import {Observable} from "rxjs";
import {PROPERTY_BINDING, EMPTY_ARRAY} from "../shared/data.service";
// import * as moment form 'moment';
import * as moment from 'moment';
import {MyOfferWithMe} from "./my-offer";
import {select} from "@angular-redux/store";
@Component({
  selector: 'app-my-offer',
  templateUrl: './my-offer.component.html',
  styleUrls: ['./my-offer.component.css']
})
export class MyOfferComponent implements OnInit {

  public myOffer$;
  public myOfferProperty$;
  @select() readonly delayedTransport$
  public data = moment().add(30, 'minutes').unix();


  constructor(private ngRedux: NgRedux<AppState>) {
    this.myOffer$ = ngRedux.select('myOffer')
      .flatMap((data: MyOfferState) => {
        return new Observable(observer => {
          observer.next(data && data.list);
        });
      });
    this.myOfferProperty$ = (property, secondProperty, thirdProperty) => {
      return PROPERTY_BINDING(ngRedux, property, secondProperty, thirdProperty)
    };
  }

  getItemName(index, item) {

    return item.price;
  }

  isEmpty() {
    return this.myOfferProperty$('myOffer', 'updateForm', 'author').flatMap((data: string) => {
      return new Observable(observer => {
        observer.next(data !== EMPTY_ARRAY);
      });
    });
  }

  ngOnInit(): void {
  }
}
