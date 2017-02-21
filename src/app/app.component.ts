import {Component} from '@angular/core';
import {NgRedux, DevToolsExtension} from '@angular-redux/store';
import {NgReduxRouter, routerReducer} from '@angular-redux/router';
import {provideReduxForms, composeReducers, defaultFormReducer} from '@angular-redux/form';
import {Action, combineReducers} from 'redux';
import {createEpicMiddleware, combineEpics} from 'redux-observable';
import * as createLogger from 'redux-logger';

import {AppActions} from './app.actions';
// import { ElephantsEpics } from './elephants/elephants.epics';
// import { elephantsReducer } from './elephants/elephants.reducer';

// import { LionsEpics } from './lions/lions.epics';
// import { lionsReducer } from './lions/lions.reducer';

import {delayedTransportReducer} from "./delayed-transport/delayed-transport.reducer";
import {DelayedTransportEpics} from "./delayed-transport/delayed-transport.epics";
import {FormBuilder, Validators} from "@angular/forms";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';



  constructor(public fb: FormBuilder,
              private ngRedux: NgRedux<any>,
              private actions: AppActions,
              devTools: DevToolsExtension,
              ngReduxRouter: NgReduxRouter,
              delayedTransport: DelayedTransportEpics) {
    const rootReducer = composeReducers(
      defaultFormReducer(),
      combineReducers({
        delayedTransport: delayedTransportReducer,
        router: routerReducer,
      }));

    ngRedux.configureStore(
      rootReducer,
      {},
      [
        createLogger(),
        createEpicMiddleware(combineEpics(...delayedTransport.epics)),
      ],
      devTools.isEnabled() ? [devTools.enhancer()] : []);
    ngReduxRouter.initialize();
    provideReduxForms(ngRedux);
  }

  ngOnInit() {
    this.ngRedux.dispatch(this.actions.loadData());
  }
}
