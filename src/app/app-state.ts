/**
 * Created by pawe on 2/22/17.
 */
export interface AppState {
  myOffer: MyOfferState;
}

export interface MyOfferState {
  list: any[],
  form: any,
  error: string,
  id: string,
  updateForm: any,
  eager: {}
}

