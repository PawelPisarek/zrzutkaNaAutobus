import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyOfferResolve} from "./my-offer.resolve";
import {MyOfferService} from "./my-offer.service";
import {MyOfferComponent} from "./my-offer.component";
import {MyOfferActions} from "./my-offer.actions";
import {MyOfferEpics} from "./my-offer.epics";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormModule} from "./form/form.module";
import {FormComponent} from "./form/form.component";
import {TransportOfferComponent} from "../transport-offer/transport-offer.component";
import {TransportOfferModule} from "../transport-offer/transport-offer.module";
import {CommentComponent} from "../comment/comment.component";
import {CommentModule} from "../comment/comment.module";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FormModule,
    TransportOfferModule,
    CommentModule
  ],
  providers: [MyOfferResolve, MyOfferService, MyOfferActions, MyOfferEpics],
  declarations: [MyOfferComponent, FormComponent, TransportOfferComponent]
})
export class MyOfferModule {
}
