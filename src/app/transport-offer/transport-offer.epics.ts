import {Injectable} from '@angular/core';
import {Epic} from 'redux-observable';
import {Action} from 'redux';
import {AppActions} from '../app.actions';
import {of} from 'rxjs/observable/of';
import {NgRedux, DevToolsExtension} from '@angular-redux/store';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';


import {AppState} from "../app-state"
import {TransportOfferActions} from "./transport-offer.action";
import {TransportOfferService} from "./transport-offer.service";
import {CommentService} from "../comment/comment.service";
@Injectable()
export class TransportOfferEpics {
  epics: Epic<Action>[];

  constructor(private service: TransportOfferService, private serviceComment: CommentService, private ngRedux: NgRedux<AppState>, private appActions: AppActions,
              private actions: TransportOfferActions) {
    this.epics = [this.loadTransportOffer, this.loadComments, this.postComment, this.acceptOffer];
  }

  loadComment = () => this.serviceComment.showComments(this.ngRedux.getState().myOffer.id)
    .map(data => this.actions.loadSucceededComment(data))
    .catch(err => of(this.actions.loadFailed(err)));

  loadTransportOffer = action$ => action$
    .ofType(AppActions.LOAD_DATA_MY_OFFER)
    .switchMap(a => this.service.showMyOffer(this.ngRedux.getState().myOffer.id)
      .map(data => this.actions.loadSucceeded(data))
      .catch(err => of(this.actions.loadFailed(err))));

  postComment = action$ => action$
    .ofType(TransportOfferActions.FORM_DATA)
    .switchMap(a => {
      return this.serviceComment.postData(this.ngRedux.getState().transportOffer.formComment, this.ngRedux.getState().myOffer.id);
    })
    .flatMap(data4 => {
      return this.loadComment();
    });

  acceptOffer = action$ => action$
    .ofType(TransportOfferActions.ACCEPT_OFFER)
    .switchMap(a => {
      return this.serviceComment.postData(this.ngRedux.getState().transportOffer.acceptedOffer.id, this.ngRedux.getState().myOffer.id);
    })
    .flatMap(data4 => {
      return this.loadComment();
    });

  loadComments = action$ => action$
    .ofType(AppActions.LOAD_DATA_MY_OFFER)
    .switchMap(a => this.loadComment());

}
