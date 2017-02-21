import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from "./home.component";
import {routes} from "./home.routers";
import {RouterModule} from "@angular/router";
import {DelayedTransportModule} from "../delayed-transport/delayed-transport.module";
import {DelayedTransportAddComponent} from "../delayed-transport-add/delayed-transport-add.component";
import {DelayedTransportListComponent} from "../delayed-transport/delayed-transport-list/delayed-transport-list.component";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    DelayedTransportModule
  ],
  declarations: [HomeComponent, DelayedTransportListComponent]
})
export class HomeModule {
  public static routes = routes;
}
