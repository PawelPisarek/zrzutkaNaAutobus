import { Injectable } from '@angular/core';
import { Action } from 'redux';

@Injectable()
export class DelayedTransportActions {
  static readonly LOAD_SUCCEEDED = 'LOAD_SUCCEEDED(DelayedTransport)';
  static readonly LOAD_FAILED = 'LOAD_FAILED(DelayedTransport)';

  loadSucceeded(payload) {
    return {
      type: DelayedTransportActions.LOAD_SUCCEEDED,
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
