import {Injectable} from '@angular/core';
import {Epic} from 'redux-observable';
import {Action} from 'redux';
import {AppActions} from '../app.actions';
import {of} from 'rxjs/observable/of';
import {NgRedux, DevToolsExtension} from '@angular-redux/store';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


import {DelayedTransportActions} from "./delayed-transport.actions";
import {DelayedTransportService} from "./delayed-transport.service";

@Injectable()
export class DelayedTransportEpics {
  epics: Epic<Action>[];

  constructor(private service: DelayedTransportService, private ngRedux: NgRedux<any>, private a: AppActions,
              private actions: DelayedTransportActions) {
    this.epics = [this.loadDelayedTransport, this.postDelayedTransport];
  }

  loadDelayedTransport = action$ => action$
    .ofType(AppActions.LOAD_DATA)
    .switchMap(a => this.service.getAll()
      .map(data => this.actions.loadSucceeded(data))
      .catch(err => of(this.actions.loadFailed(err))));

  postDelayedTransport = action$ => action$
    .ofType(AppActions.POST_DATA)
    .switchMap(a => this.service.postData(this.ngRedux.getState().delayedTransport[0]))
    .map(data => this.actions.loadSucceeded(data))
    .switchMap(data => {
      this.ngRedux.dispatch(this.a.loadData());
      return [];
    })
    .catch(err => of(this.actions.loadFailed(err)))

}