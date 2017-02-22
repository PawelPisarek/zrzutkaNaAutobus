import {IPayloadAction} from "../utils/payload-action";
import {MyOfferActions} from "./my-offer.actions";
import {MyOfferState} from "../app-state";

export function myOfferReducer(state:MyOfferState = {list: [], form: {}, error: "", id: ""}, action: IPayloadAction) {
  switch (action.type) {
    case MyOfferActions.LOAD_SUCCEEDED: {
      return Object.assign({}, state, {
        list: action.payload
      });
    }
    case MyOfferActions.SET_ID: {
      return Object.assign({}, state, {
        id: action.payload
      });
    }
    case MyOfferActions.FORM_DATA: {
      return Object.assign({}, state, {
        form: action.payload
      });
    }
    case MyOfferActions.LOAD_FAILED:
      return Object.assign({}, state, {
        error: action.payload
      });
  }

  return state;
}
