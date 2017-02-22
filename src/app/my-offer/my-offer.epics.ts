import {Injectable} from '@angular/core';
import {Epic} from 'redux-observable';
import {Action} from 'redux';
import {AppActions} from '../app.actions';
import {of} from 'rxjs/observable/of';
import {NgRedux, DevToolsExtension} from '@angular-redux/store';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


import {MyOfferService} from "./my-offer.service";
import {MyOfferActions} from "./my-offer.actions";


import {AppState} from "../app-state"
@Injectable()
export class MyOfferEpics {
  epics: Epic<Action>[];

  constructor(private service: MyOfferService, private ngRedux: NgRedux<AppState>, private a: AppActions,
              private actions: MyOfferActions) {
    this.epics = [this.loadMyOffer];
  }

  loadMyOffer = action$ => action$
    .ofType(AppActions.LOAD_DATA_MY_OFFER)
    .switchMap(a => this.service.showMyOffer(this.ngRedux.getState().myOffer.id)
      .map(data => this.actions.loadSucceeded(data))
      .catch(err => of(this.actions.loadFailed(err))));

}
