import {IPayloadAction} from "../utils/payload-action";
import {TransportOfferActions} from "./transport-offer.action";

/**
 * Created by pawe on 2/23/17.
 */
export function trasportOfferReducer(state = {}, action: IPayloadAction) {
  switch (action.type) {
    case TransportOfferActions.LOAD_SUCCEEDED: {

      return Object.assign({}, state, {
        list: action.payload
      })
    }
    case TransportOfferActions.LOAD_SUCCEEDED_COMMENT: {

      return Object.assign({}, state, {
        comment: action.payload
      })
    }
    case TransportOfferActions.LOAD_FAILED:
      return Object.assign({}, state, {
        error: action.payload
      });
  }
  return state;
}
