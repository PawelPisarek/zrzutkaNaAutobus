import {Injectable} from '@angular/core';
import {Epic} from 'redux-observable';
import {Action} from 'redux';
import {AppActions} from '../app.actions';
import {of} from 'rxjs/observable/of';
import {NgRedux, DevToolsExtension} from '@angular-redux/store';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';


import {MyOfferService} from "./my-offer.service";
import {MyOfferActions} from "./my-offer.actions";


import {AppState} from "../app-state"
@Injectable()
export class MyOfferEpics {
  epics: Epic<Action>[];

  constructor(private service: MyOfferService, private ngRedux: NgRedux<AppState>, private appActions: AppActions,
              private actions: MyOfferActions) {
    this.epics = [this.loadMyOffer, this.postMyOffer];
  }

  loadMyOffer = action$ => action$
    .ofType(AppActions.LOAD_DATA_MY_OFFER)
    .switchMap(a => this.service.showMyOffer(this.ngRedux.getState().myOffer.id, "ja0.9095906582098909")
      .map(data => this.actions.loadSucceeded(data))
      .catch(err => of(this.actions.loadFailed(err))));

  postMyOffer = action$ => action$
    .ofType(AppActions.POST_DATA_MY_OFFER)
    .switchMap(a => this.service.postData(this.ngRedux.getState().myOffer.form, this.ngRedux.getState().myOffer.id))
    .map(data => this.actions.loadSucceeded(data))
    .switchMap(data => {
      this.ngRedux.dispatch(this.appActions.loadMyOffer());
      return [];
    })
    .catch(err => of(this.actions.loadFailed(err)))


}
