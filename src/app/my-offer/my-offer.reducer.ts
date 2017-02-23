import {IPayloadAction} from "../utils/payload-action";
import {MyOfferActions} from "./my-offer.actions";
import {MyOfferState} from "../app-state";
import {MyOffer, MyOfferWithMe, Eager} from "./my-offer";
import {EMPTY_ARRAY} from "../shared/data.service";
const minMax = (action, maxMin) => {
  if ((<MyOffer[]>action.payload.list).length > 0) {
    return (<MyOffer[]>action.payload.list).reduce((prev, current) => {
      if ("max" == maxMin) {
        return (prev.price > current.price) ? prev : current
      }
      if ("min" == maxMin) {
        return (prev.price < current.price) ? prev : current
      }
    });
  }
  else {
    return new MyOffer(9999999, 9999999, EMPTY_ARRAY)
  }
};
export function myOfferReducer(state: MyOfferState = {
  list: [],
  form: {},
  error: "",
  id: "",
  eager: {},
  updateForm: {}
}, action: IPayloadAction) {
  switch (action.type) {
    case MyOfferActions.LOAD_SUCCEEDED: {
      let updateForm: MyOffer = (<MyOffer[]>action.payload.list).filter((myOffer) => {
        return myOffer.author == action.payload.authorized;
      })[0];
      if (!updateForm) {
        updateForm = minMax(action, "max");
      }
      let eager = new Eager(action.payload.list.length, minMax(action, "min").price, minMax(action, "max").price);
      let updateFormWithMe: MyOfferWithMe = new MyOfferWithMe(updateForm.price,
        updateForm.timeToLeft, updateForm.author,
        (updateForm.author == action.payload.authorized));
      return Object.assign({}, state, {
        list: action.payload.list,
        eager: eager,
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
