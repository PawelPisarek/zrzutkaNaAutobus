/**
 * Created by pawe on 2/21/17.
 */
export interface IDelayedTransport {
  nameTrain: string
  alternative: string
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
              public alternative: string) {
  }
}
