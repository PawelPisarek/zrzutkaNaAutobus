export class MyOffer {

  constructor(public price: number, public timeToLeft: number, public author: string) {
  }
}
export class MyOfferView {

  constructor(public id:string,public price: number, public timeToLeft: number, public author: boolean) {
  }
}
import * as moment  from "moment";
export class MyOfferFromTimeStamp {
  static transform(myOffer) {
    return new MyOffer(myOffer.price, moment().add(myOffer.timeToLeft, 'minutes').unix(), myOffer.author);
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
