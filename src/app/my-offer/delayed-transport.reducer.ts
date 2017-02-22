import {IPayloadAction} from "../utils/payload-action";
import {DelayedTransportActions} from "./delayed-transport.actions";
export function myFormReducer(state = [], action: IPayloadAction) {
  switch (action.type) {
    case DelayedTransportActions.LOAD_SUCCEEDED:
      return action.payload;
    case DelayedTransportActions.FORM_DATA:
      return action.payload;
    case DelayedTransportActions.LOAD_FAILED:
      return action.error;
  }

  return state;
}
