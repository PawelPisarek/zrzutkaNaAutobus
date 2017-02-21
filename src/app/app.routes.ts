import {HomeComponent} from "./home/home.component";
import {DelayedTransportAddComponent} from "./delayed-transport-add/delayed-transport-add.component";

export const appRoutes = [
  { path: '',   redirectTo: '/elephants', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'add', component: DelayedTransportAddComponent },
];
