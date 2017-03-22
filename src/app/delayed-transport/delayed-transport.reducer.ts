import {IPayloadAction} from "../utils/payload-action";
import {DelayedTransportActions} from "./delayed-transport.actions";
export function delayedTransportReducer(state = {}, action: IPayloadAction) {
  switch (action.type) {
    case DelayedTransportActions.LOAD_SUCCEEDED:
      return Object.assign({}, state, {all: action.payload});
    case DelayedTransportActions.LOAD_SUCCEEDED_DETAIL:
      return Object.assign({},state,{detail:action.payload});
    case DelayedTransportActions.FORM_DATA:
      return Object.assign({}, state, {all: action.payload});
    case DelayedTransportActions.LOAD_FAILED:
      return Object.assign({}, state, {all: action.payload});
  }

  return state;
}
