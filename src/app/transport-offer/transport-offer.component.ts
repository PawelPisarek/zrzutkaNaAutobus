import { Component, OnInit } from '@angular/core';
import {AppState} from "../app-state";
import {NgRedux} from "@angular-redux/store";
import {PROPERTY_BINDING} from "../shared/data.service";

@Component({
  selector: 'app-transport-offer',
  templateUrl: './transport-offer.component.html',
  styleUrls: ['./transport-offer.component.css']
})
export class TransportOfferComponent implements OnInit {

  public myOfferProperty$;

  constructor(private ngRedux: NgRedux<AppState>) {
    this.myOfferProperty$ = (property, secondProperty, thirdProperty) => {
      return PROPERTY_BINDING(ngRedux, property, secondProperty, thirdProperty)
    };
  }

  getItemName(index, item) {
    return item.price;
  }

  ngOnInit(): void {
  }


}
