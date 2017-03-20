import {HomeComponent} from "./home/home.component";
import {DelayedTransportAddComponent} from "./delayed-transport-add/delayed-transport-add.component";
import {MyOfferComponent} from "./my-offer/my-offer.component";
import {MyOfferResolve} from "./my-offer/my-offer.resolve";
import {LoginComponent} from "./login/login.component";

export const appRoutes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: ':id/my-offer', component: MyOfferComponent, resolve: { MyOffer : MyOfferResolve } },
  { path: 'add', component: DelayedTransportAddComponent },
];
