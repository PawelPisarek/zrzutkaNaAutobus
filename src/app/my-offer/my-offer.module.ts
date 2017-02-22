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

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FormModule,
  ],
  providers: [MyOfferResolve, MyOfferService, MyOfferActions, MyOfferEpics],
  declarations: [MyOfferComponent,FormComponent]
})
export class MyOfferModule {
}
