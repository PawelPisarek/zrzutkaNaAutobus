import { Injectable } from '@angular/core';
import { Action } from 'redux';

@Injectable()
export class MyOfferActions {
  static readonly LOAD_SUCCEEDED = 'LOAD_SUCCEEDED(MyOfferActions)';
  static readonly LOAD_FAILED = 'LOAD_FAILED(MyOfferActions)';
  static readonly FORM_DATA = 'FORM_DATA(MyOfferActions)';
  static readonly SET_ID = 'SET_ID(MyOfferActions)';

  loadSucceeded(payload) {
    return {
      type: MyOfferActions.LOAD_SUCCEEDED,
      payload,
    };
  }

  formData(payload) {
    return {
      type: MyOfferActions.FORM_DATA,
      payload,
    };
  }

  setId(payload) {
    return {
      type: MyOfferActions.SET_ID,
      payload,
    };
  }

  loadFailed(error) {
    return {
      type: MyOfferActions.LOAD_FAILED,
      error,
    };
  }
}
