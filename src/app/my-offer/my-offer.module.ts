import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyOfferResolve} from "./my-offer.resolve";
import {MyOfferService} from "./my-offer.service";
import {MyOfferComponent} from "./my-offer.component";
import {MyOfferActions} from "./my-offer.actions";
import {MyOfferEpics} from "./my-offer.epics";

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [MyOfferResolve, MyOfferService, MyOfferActions, MyOfferEpics],
  declarations: [MyOfferComponent]
})
export class MyOfferModule {
}
