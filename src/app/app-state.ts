import {TransportOffer} from "./transport-offer/transport-offer";
/**
 * Created by pawe on 2/22/17.
 */
export interface AppState {
  myOffer: MyOfferState;
  transportOffer: TransportOfferState;
}

export interface MyOfferState {
  list: any[],
  form: any,
  error: string,
  id: string,
  updateForm: any,
  eager: any
}
export interface DelayedTransportState {
  all: any[],
  detail: any,
  eager: any,
  updateForm: any
}

export interface TransportOfferState {
  formComment;
  acceptedOffer: TransportOffer;
}

