import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TransportOfferEpics} from "./transport-offer.epics";
import {TransportOfferActions} from "./transport-offer.action";
import {TransportOfferService} from "./transport-offer.service";

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    TransportOfferEpics, TransportOfferActions, TransportOfferService
  ],
  declarations: []
})
export class TransportOfferModule {
}
