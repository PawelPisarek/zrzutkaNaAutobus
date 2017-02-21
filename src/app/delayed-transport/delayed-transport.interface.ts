/**
 * Created by pawe on 2/21/17.
 */
export interface DelayedTransport {
  nameTrain: string
  alternative: string
}
export class DelayedTransportModel implements DelayedTransport{
  constructor(public nameTrain: string,
              public from: string,
              public alternative: string,
              public lat: string,
              public lng: string) {
  }
}
