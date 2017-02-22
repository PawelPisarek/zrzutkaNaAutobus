import {HomeComponent} from "./home/home.component";
import {DelayedTransportAddComponent} from "./delayed-transport-add/delayed-transport-add.component";
import {MyOfferComponent} from "./my-offer/my-offer.component";
import {MyOfferResolve} from "./my-offer/my-offer.resolve";

export const appRoutes = [
  { path: '', component: HomeComponent },
  { path: ':id/my-offer', component: MyOfferComponent, resolve: { MyOffer : MyOfferResolve } },
  { path: 'add', component: DelayedTransportAddComponent },
];
