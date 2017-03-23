import {IPayloadAction} from "../utils/payload-action";
import {DelayedTransportActions} from "./delayed-transport.actions";
import {Eager, MyOffer, MyOfferWithMe} from "../my-offer/my-offer";
import {minMax} from "../my-offer/my-offer.reducer";
import {DelayedTransportState} from "../app-state";
export function delayedTransportReducer(state: DelayedTransportState = {
                                          all: [],
                                          detail: {},
                                          eager: {},
                                          updateForm: {}
                                        }, action: IPayloadAction) {
  switch (action.type) {
    case DelayedTransportActions.LOAD_SUCCEEDED:
      return Object.assign({}, state, {all: action.payload});
    case DelayedTransportActions.LOAD_SUCCEEDED_DETAIL: {
      let updateForm: MyOffer = (<MyOffer[]>action.payload.myOffers).filter((myOffer) => {
        return myOffer.author.isMe;
      })[0];
      if (!updateForm) {
        updateForm = minMax(action, "max");
      }
      let eager = new Eager(action.payload.myOffers.length, minMax(action, "min").price, minMax(action, "max").price);
      let updateFormWithMe: MyOfferWithMe = new MyOfferWithMe(updateForm.price,
        updateForm.timeToLeft, updateForm.author, updateForm.author.isMe);
      return Object.assign({}, state, {detail: action.payload, eager: eager, updateForm: updateFormWithMe});
    }
    case DelayedTransportActions.FORM_DATA:
      return Object.assign({}, state, {all: action.payload});
    case DelayedTransportActions.LOAD_FAILED:
      return Object.assign({}, state, {all: action.payload});
  }

  return state;
}
