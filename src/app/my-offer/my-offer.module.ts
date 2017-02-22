import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyOfferResolve} from "./my-offer.resolve";
import {MyOfferService} from "./my-offer.service";
import {MyOfferComponent} from "./my-offer.component";

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [MyOfferResolve, MyOfferService],
  declarations: [MyOfferComponent]
})
export class MyOfferModule {
}
