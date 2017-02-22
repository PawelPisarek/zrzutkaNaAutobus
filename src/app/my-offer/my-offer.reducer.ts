import {IPayloadAction} from "../utils/payload-action";
import {MyOfferActions} from "./my-offer.actions";
import {MyOfferState} from "../app-state";
import {MyOffer, MyOfferWithMe} from "./my-offer";

export function myOfferReducer(state: MyOfferState = {
  list: [],
  form: {},
  error: "",
  id: "",
  updateForm: {}
}, action: IPayloadAction) {
  switch (action.type) {
    case MyOfferActions.LOAD_SUCCEEDED: {
      let updateForm: MyOffer = (<MyOffer[]>action.payload.list).filter((myOffer) => {
        return myOffer.author == action.payload.authorized;
      })[0];

      if (!updateForm && (<MyOffer[]>action.payload.list).length > 0) {
        updateForm = (<MyOffer[]>action.payload.list).reduce((prev, current) => {
          return (prev.price > current.price) ? prev : current
        });

      }
      const updateFormWithMe: MyOfferWithMe = new MyOfferWithMe(updateForm.price,
        updateForm.timeToLeft, updateForm.author,
        (updateForm.author == action.payload.authorized));
      return Object.assign({}, state, {
        list: action.payload.list,
        updateForm: updateFormWithMe
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
    case MyOfferActions.UPDATE_FORM: {
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
