
import {HomeComponent} from "./home.component";
import {DelayedTransportListComponent} from "../delayed-transport/delayed-transport-list/delayed-transport-list.component";
export const routes = [
  { path: '', children: [
    { path: '', component: HomeComponent },
    { path: 'transport', component: DelayedTransportListComponent, pathMatch: 'prefix' }
  ]},
];
