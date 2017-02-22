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

  getAll() {
    return this.http.get(ELEPHANTS_URL)
      .map(resp => resp.json())
      .map(records => records.map(
        (record: DelayedTransport) => ({
          nameTrain: record.nameTrain,
          alternative: record.alternative,
        })));
  }

  postData(form,id) {
    const body = JSON.stringify(form);
    return this.http.post(`${ELEPHANTS_URL}/delayed-transport/${id}/my-offer`, body, this.JSON_HEADER)
      .map(resp => resp.json())
      .map(records => {
        return [];
      });
  }

  showMyOffer(id){
    return this.http.get(`${ELEPHANTS_URL}/delayed-transport/${id}/my-offer`)
      .map(resp => resp.json())
      .map(records => records.map(
        (record: MyOffer) => ({
          price: record.price,
          timeToLeft: record.timeToLeft,
        })));

  }


}
