import { Injectable } from '@angular/core';
import { Action } from 'redux';

@Injectable()
export class DelayedTransportActions {
  static readonly LOAD_SUCCEEDED = 'LOAD_SUCCEEDED(DelayedTransport)';
  static readonly LOAD_FAILED = 'LOAD_FAILED(DelayedTransport)';
  static readonly FORM_DATA = 'FORM_DATA(DelayedTransport)';

  loadSucceeded(payload) {
    return {
      type: DelayedTransportActions.LOAD_SUCCEEDED,
      payload,
    };
  }

  formData(payload) {
    return {
      type: DelayedTransportActions.FORM_DATA,
      payload,
    };
  }

  loadFailed(error) {
    return {
      type: DelayedTransportActions.LOAD_FAILED,
      error,
    };
  }
}
