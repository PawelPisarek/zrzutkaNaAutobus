import {Injectable} from '@angular/core';

@Injectable()
export class TransportOfferActions {
  static readonly LOAD_SUCCEEDED = "LOAD_SUCCEEDED(TransportOffer)";
  static readonly LOAD_FAILED = 'LOAD_FAILED(TransportOffer)';

  loadSucceeded(payload) {
    return {
      type: TransportOfferActions.LOAD_SUCCEEDED,
      payload,
    }
  }

  loadFailed(error) {
    return {
      type: TransportOfferActions.LOAD_FAILED,
      error,
    };
  }

}
