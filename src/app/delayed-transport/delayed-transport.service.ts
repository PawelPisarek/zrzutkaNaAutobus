import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {DelayedTransportModule} from "./delayed-transport.module";
import {DelayedTransport} from "./delayed-transport.interface";

// A fake API on the internets.
const ELEPHANTS_URL = 'http://localhost:3000/delayed-transport';

@Injectable()
export class DelayedTransportService {
  constructor(private http: Http) {}

  getAll() {
    return this.http.get(ELEPHANTS_URL)
      .map(resp => resp.json())
      .map(records => records.map(
        (record:DelayedTransport) => ({
          nameTrain: record.nameTrain,
          alternative: record.alternative,
        })));
  }
}
