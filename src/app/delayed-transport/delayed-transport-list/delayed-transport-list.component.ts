import { Component, OnInit } from '@angular/core';
import {DelayedTransport} from "../delayed-transport.interface";
import {select} from "@angular-redux/store";

@Component({
  selector: 'app-delayed-transport-list',
  templateUrl: 'delayed-transport-list.component.html',
  styleUrls: ['delayed-transport-list.component.css']
})
export class DelayedTransportListComponent implements OnInit {


  // Shorthand for
  // constructor(ngRedux: NgRedux { this.elephants$ = ngRedux.select('elephants'); })
  @select() readonly delayedTransport$

  // Since we're observing an array of items, we need to set up a 'trackBy'
  // parameter so Angular doesn't tear down and rebuild the list's DOM every
  // time there's an update.
  getItemName(index, item) {
    return item.nameTrain;
  }
  constructor() { }

  ngOnInit() {
  }

}
