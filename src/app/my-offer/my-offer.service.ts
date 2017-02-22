import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {MyOffer} from "./my-offer";
import {DelayedTransport} from "../delayed-transport/delayed-transport.interface";

// A fake API on the internets.
const ELEPHANTS_URL = 'http://localhost:3000';

@Injectable()
export class MyOfferService {
  constructor(private http: Http) {
  }

  private JSON_HEADER = {headers: new Headers({'Content-Type': 'application/json'})};


  postData(form, id) { //TODO przerobić żeby z czasu w minutach przerabiać na data w formacie timeStamp zakończenia
    const body = JSON.stringify(form);
    return this.http.post(`${ELEPHANTS_URL}/delayed-transport/${id}/my-offer`, body, this.JSON_HEADER)
      .map(resp => resp.json())
      .map(records => {
        return [];
      });
  }

  showMyOffer(id,authorizedUser) {
    return this.http.get(`${ELEPHANTS_URL}/delayed-transport/${id}/my-offer`)
      .map(resp => resp.json())
      .map(records => records.map(
        (record: MyOffer) => new MyOffer(record.price, record.timeToLeft, record.author))).map(listMyOffer=>{
          return {
            authorized:authorizedUser,
            list:listMyOffer
          }
      });

  }


}
