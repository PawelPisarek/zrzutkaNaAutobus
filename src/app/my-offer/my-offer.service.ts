import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {MyOffer, MyOfferFromTimeStamp} from "./my-offer";
import {DelayedTransport} from "../delayed-transport/delayed-transport.interface";
import {URL} from "../shared/data.service";
import * as moment  from "moment";


// A fake API on the internets.


@Injectable()
export class MyOfferService {
  constructor(private http: Http) {
  }

  private JSON_HEADER = {headers: new Headers({'Content-Type': 'application/json'})};


  postData(form: MyOffer, id) { /* TODO przerobić żeby z czasu w minutach przerabiać na data w formacie timeStamp zakończenia
   nie może tak być bo to musi być niezależne od strefy czasowej
   więc użytkownik klikający w Londynie będzie miał oferte ważną dłużej niż ten co w Polsce
   jednak musi być timestamp bo timestamp to jest czas od jakiejś daty i to jest wszędzie ta sama data
   */

    form = MyOfferFromTimeStamp.transform(form);
    const body = JSON.stringify(form);
    return this.http.post(`${URL}/delayed-transport/${id}/my-offer`, body, this.JSON_HEADER)
      .map(resp => resp.json())
      .map(records => {
        return [];
      });
  }

  showMyOffer(id, authorizedUser) {
    return this.http.get(`${URL}/delayed-transport/${id}/my-offer`)
      .map(resp => resp.json())
      .map(records => records.map(
        (record: MyOffer) => new MyOffer(record.price, record.timeToLeft, record.author))).map(listMyOffer => {
        return {
          authorized: authorizedUser,
          list: listMyOffer
        }
      });

  }


}
