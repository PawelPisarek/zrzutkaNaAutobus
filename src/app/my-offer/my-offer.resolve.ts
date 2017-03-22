import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {Injectable} from "@angular/core";
import {MyOfferService} from "./my-offer.service";
import {MyOfferActions} from "./my-offer.actions";
import {NgRedux, DevToolsExtension} from '@angular-redux/store';
import {AppActions} from "../app.actions";
import {DelayedTransportActions} from "../delayed-transport/delayed-transport.actions";

@Injectable()
export class MyOfferResolve implements Resolve<any> {
  constructor(private a: AppActions, private ngRedux: NgRedux<any>,
              private actions: MyOfferActions, private delayedTransportActions:DelayedTransportActions) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    setTimeout(() => {
      this.ngRedux.dispatch(this.actions.setId(route.params['id']));
      this.ngRedux.dispatch(this.a.loadMyOffer());
      this.ngRedux.dispatch(this.delayedTransportActions.loadDelayedTransportDetail())

    })
  }
}
