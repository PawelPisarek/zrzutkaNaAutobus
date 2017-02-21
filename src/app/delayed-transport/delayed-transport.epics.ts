import { Injectable } from '@angular/core';
import { Epic } from 'redux-observable';
import { Action } from 'redux';
import { AppActions } from '../app.actions';
import { of } from 'rxjs/observable/of';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


import {DelayedTransportActions} from "./delayed-transport.actions";
import {DelayedTransportService} from "./delayed-transport.service";

@Injectable()
export class DelayedTransportEpics {
  epics: Epic<Action>[];

  constructor(
    private service: DelayedTransportService,
    private actions: DelayedTransportActions
  ) {
    this.epics = [ this.loadElephants ];
  }

  loadElephants = action$ => action$
    .ofType(AppActions.LOAD_DATA)
    .switchMap(a => this.service.getAll()
      .map(data => this.actions.loadSucceeded(data))
      .catch(err => of(this.actions.loadFailed(err))));
}
