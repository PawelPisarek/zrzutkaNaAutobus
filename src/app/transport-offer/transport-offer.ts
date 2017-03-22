export class TransportOffer {
  constructor(public id: string, public price: number, public transportName: string, public seats: number, public isJoined: boolean) {
  }
}
export class TransportOfferView {
  constructor(public id: string,public uuid:string,public price: number, public transportName: string, public seats: number, public joined: boolean) {
  }
}
