import { Injectable } from '@angular/core';
import { Action } from 'redux';

@Injectable()
export class DelayedTransportActions {
  static readonly LOAD_SUCCEEDED = 'LOAD_SUCCEEDED(DelayedTransport)';
  static readonly LOAD_SUCCEEDED_DETAIL = 'LOAD_SUCCEEDED_DETAIL(DelayedTransport)';
  static readonly LOAD_FAILED = 'LOAD_FAILED(DelayedTransport)';
  static readonly FORM_DATA = 'FORM_DATA(DelayedTransport)';
  static readonly LOAD_DATA_DELAYED_TRANSPORT_DETAIL = 'LOAD_DATA_DELAYED_TRANSPORT_DETAIL';

  loadSucceeded(payload) {
    return {
      type: DelayedTransportActions.LOAD_SUCCEEDED,
      payload,
    };
  }

  loadDelayedTransportDetailSucceeded(payload) {
    return {
      type: DelayedTransportActions.LOAD_SUCCEEDED_DETAIL,
      payload,
    };
  }


  loadDelayedTransportDetail() {
    return {
      type: DelayedTransportActions.LOAD_DATA_DELAYED_TRANSPORT_DETAIL
    }
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
