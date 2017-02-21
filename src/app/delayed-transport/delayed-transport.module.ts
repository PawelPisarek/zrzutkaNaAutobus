import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule} from "@angular/router";
import {DelayedTransportAddModule} from "../delayed-transport-add/delayed-transport-add.module";
import {DelayedTransportAddComponent} from "../delayed-transport-add/delayed-transport-add.component";
import {DelayedTransportEpics} from "./delayed-transport.epics";
import {DelayedTransportListComponent} from "./delayed-transport-list/delayed-transport-list.component";
import {DelayedTransportService} from "./delayed-transport.service";
import {DelayedTransportActions} from "./delayed-transport.actions";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    DelayedTransportAddModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers:
    [DelayedTransportService,
      DelayedTransportActions,
      DelayedTransportEpics],
  declarations: [DelayedTransportAddComponent]
})
export class DelayedTransportModule {
}
