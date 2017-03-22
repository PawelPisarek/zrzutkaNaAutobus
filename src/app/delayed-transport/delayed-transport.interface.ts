import {MyOfferView} from "../my-offer/my-offer";
import {TransportOfferView} from "../transport-offer/transport-offer";
/**
 * Created by pawe on 2/21/17.
 */
export interface IDelayedTransport {
  nameTrain: string
  alternative: string
  lat: string
  lng: string
}
export class DelayedTransportModel implements IDelayedTransport {
  constructor(public nameTrain: string,
              public from: string,
              public alternative: string,
              public lat: string,
              public lng: string) {
  }
}
export class DelayedTransport implements IDelayedTransport {
  constructor(public id: string,
              public nameTrain: string,
              public alternative: string,
              public lat: string,
              public lng: string) {
  }
}
export class DelayedTransportDetail extends DelayedTransport {
  constructor(public id: string,
              public nameTrain: string,
              public alternative: string,
              public lat: string,
              public lng: string,
              public transportOffers: TransportOfferView[],
              public myOffers: MyOfferView[],
              public comments: [any]) {
    super(id, nameTrain, alternative, lat, lng)
  }
}
