import {Injectable} from '@angular/core';
import {Headers, Http} from "@angular/http";
import {OLD_URL} from "../shared/data.service";
import {TransportOffer} from "./transport-offer";
import {CommentModel} from "../comment/comment";

@Injectable()
export class TransportOfferService {

  constructor(private http: Http) {
  }

  private JSON_HEADER = {headers: new Headers({'Content-Type': 'application/json'})};


  showMyOffer(id) {
    return this.http.get(`${OLD_URL}/delayed-transport/${id}/transport-offer`)
      .map(resp => resp.json())
      .map(records => records.map(
        (record: TransportOffer) => new TransportOffer(record.id,
          record.price,
          record.transportName,
          record.seats,
          record.isJoined)))
  }
}
