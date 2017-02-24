import {Injectable} from '@angular/core';

@Injectable()
export class TransportOfferActions {
  static readonly LOAD_SUCCEEDED = "LOAD_SUCCEEDED(TransportOffer)";
  static readonly LOAD_SUCCEEDED_COMMENT = "LOAD_SUCCEEDED(Comment)";
  static readonly LOAD_FAILED = 'LOAD_FAILED(TransportOffer)';
  static readonly FORM_DATA = 'FORM_DATA(Comment)';

  loadSucceeded(payload) {
    return {
      type: TransportOfferActions.LOAD_SUCCEEDED,
      payload,
    }
  }

  loadSucceededComment(payload) {
    return {
      type: TransportOfferActions.LOAD_SUCCEEDED_COMMENT,
      payload,
    }
  }

  loadFailed(error) {
    return {
      type: TransportOfferActions.LOAD_FAILED,
      error,
    };
  }

  formData(payload) {
    return {
      type: TransportOfferActions.FORM_DATA,
      payload,
    };
  }

}
