import { Component, OnInit } from '@angular/core';
import {AppState} from "../app-state";
import {NgRedux} from "@angular-redux/store";
import {PROPERTY_BINDING} from "../shared/data.service";
import {TransportOffer} from "./transport-offer";
import {TransportOfferActions} from "./transport-offer.action";

@Component({
  selector: 'app-transport-offer',
  templateUrl: './transport-offer.component.html',
  styleUrls: ['./transport-offer.component.css']
})
export class TransportOfferComponent implements OnInit {

  public myOfferProperty$;

  constructor(private ngRedux: NgRedux<AppState>,private transportOffer:TransportOfferActions) {
    this.myOfferProperty$ = (property, secondProperty, thirdProperty) => {
      return PROPERTY_BINDING(ngRedux, property, secondProperty, thirdProperty)
    };
  }

  getItemName(index, item) {
    return item.price;
  }

  acceptOffer(transportOffer:TransportOffer){

    this.ngRedux.dispatch(this.transportOffer.acceptOffer(transportOffer))
  }
  ngOnInit(): void {
  }


}
