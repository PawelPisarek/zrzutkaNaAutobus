import {Injectable} from '@angular/core';
import {Action} from 'redux';

@Injectable()
export class AppActions {
  static LOAD_DATA = 'LOAD_DATA';
  static LOAD_DATA_MY_OFFER = 'LOAD_DATA_MY_OFFER';
  static POST_DATA_DELAYED_TRANSPORT = 'POST_DATA';
  static POST_DATA_MY_OFFER = 'POST_DATA_MY_OFFER';

  loadData() {
    return {
      type: AppActions.LOAD_DATA
    }
  }

  loadMyOffer() {
    return {
      type: AppActions.LOAD_DATA_MY_OFFER
    }
  }

  postData() {
    return {
      type: AppActions.POST_DATA_DELAYED_TRANSPORT
    }
  }

  postDataMyOffer() {
    return {
      type: AppActions.POST_DATA_MY_OFFER
    }
  }
}
