import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {DelayedTransportModule} from "./delayed-transport.module";
import {DelayedTransport} from "./delayed-transport.interface";

// A fake API on the internets.
const ELEPHANTS_URL = 'http://localhost:3000/delayed-transport';

@Injectable()
export class DelayedTransportService {
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

  postData(form) {
    const body = JSON.stringify(form);
    return this.http.post(ELEPHANTS_URL, body, this.JSON_HEADER)
      .map(resp => resp.json())
      .map(records => {
        return [];
      });
  }


}
