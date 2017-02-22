import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {Injectable} from "@angular/core";
import {MyOfferService} from "./my-offer.service";

@Injectable()
export class MyOfferResolve implements Resolve<any> {
  constructor(private usersService: MyOfferService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.usersService.showMyOffer(route.params['id']);
  }
}
