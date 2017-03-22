import { Component, OnInit } from '@angular/core';
import {DelayedTransport} from "../delayed-transport.interface";
import {select} from "@angular-redux/store";
import {AppState} from "../../app-state";
import {NgRedux} from "@angular-redux/store";
import {PROPERTY_BINDING} from "../../shared/data.service";
@Component({
  selector: 'app-delayed-transport-list',
  templateUrl: 'delayed-transport-list.component.html',
  styleUrls: ['delayed-transport-list.component.css']
})
export class DelayedTransportListComponent implements OnInit {



  getItemName(index, item) {
    return item.nameTrain;
  }

  public delayedTransport$;
  constructor(private ngRedux: NgRedux<AppState>) {
    this.delayedTransport$ = (property, secondProperty, thirdProperty) => {
      return PROPERTY_BINDING(ngRedux, property, secondProperty, thirdProperty)
    };

  }

  ngOnInit() {
  }

}
