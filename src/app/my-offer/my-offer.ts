export class MyOffer {

  constructor(public price: number, public timeToLeft: number, public author: string) {
  }
}
export class MyOfferWithMe extends MyOffer {

  constructor(public price: number, public timeToLeft: number, public author: string, public  me: boolean) {
    super(price, timeToLeft, author);

  }
}
export class Eager {
  constructor(public quantity: number, public min: number, public max: number) {
  }
}
