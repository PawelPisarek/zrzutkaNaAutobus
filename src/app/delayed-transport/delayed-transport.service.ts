import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {DelayedTransportModule} from "./delayed-transport.module";
import {DelayedTransport, DelayedTransportDetail} from "./delayed-transport.interface";
import {OLD_URL, APP_URL, USER_EMAIL} from "../shared/data.service";
import {ApiHttpService} from "../auth/api-http.service";
import {MyOffer, MyOfferView, MyOfferViewApi} from "../my-offer/my-offer";
import {TransportOfferView} from "../transport-offer/transport-offer";
// A fake API on the internets.


@Injectable()
export class DelayedTransportService {
  constructor(private http: Http, private apiHttpService: ApiHttpService) {
  }

  private JSON_HEADER = {headers: new Headers({'Content-Type': 'application/json'})};

  getAll() {
    return this.apiHttpService.get(`${APP_URL}/api/delayed-transport`)
      .map(resp => resp.json())
      .map(records => {
        return records.map(
          (record: DelayedTransport) => ({
            id: record.id,
            nameTrain: record.nameTrain,
            alternative: record.alternative,
            lat: record.lat,
            lng: record.lng
          }))
      });
  }

  getDetail(id, loggedInUser) {
    return this.apiHttpService.get(`${APP_URL}/api/delayed-transport/${id}`)
      .map(resp => resp.json())
      .map((record: DelayedTransportDetail) => {
        const myOffers = record.myOffers.map((data: MyOfferViewApi) => {
          let author = data.author;
          author.isMe = data.author.username == loggedInUser;
          return new MyOfferView(data.id, data.price, data.timeToLeft, author);
        });
        const transportOffers = record.transportOffers.map((data: TransportOfferView) => {
          return new TransportOfferView(data.id, data.uuid, data.price, data.transportName, data.seats, data.joined)
        });
        return new DelayedTransportDetail(
          record.id,
          record.nameTrain,
          record.alternative,
          record.lat,
          record.lng,
          transportOffers,
          myOffers,
          record.comments);
      })
  }

  postData(form) {
    const body = JSON.stringify(form);
    return this.http.post(`${OLD_URL}/delayed-transport`, body, this.JSON_HEADER)
      .map(resp => resp.json())
      .map(records => {
        return [];
      });
  }


}
