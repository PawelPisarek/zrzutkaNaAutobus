import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TransportOfferEpics} from "./transport-offer.epics";
import {TransportOfferActions} from "./transport-offer.action";
import {TransportOfferService} from "./transport-offer.service";
import {CommentComponent} from "../comment/comment.component";
import {CommentModule} from "../comment/comment.module";

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    TransportOfferEpics, TransportOfferActions, TransportOfferService
  ],
  declarations: [],
  exports:[]
})
export class TransportOfferModule {
}
