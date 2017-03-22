import {Injectable} from "@angular/core";
import {Headers, Http, RequestOptions, Response, XHRBackend} from "@angular/http";
import {Observable} from "rxjs";
@Injectable()
export class ApiHttpService extends Http {
  private apiUrl: string;

  constructor(private backend: XHRBackend, private requestOptions: RequestOptions) {
    super(backend, requestOptions);

  }

  get(url: string, headers?: AdditionalHeader[]): Observable<Response> {
    this.setDefaultHeaders();
    if (headers) {
      this.setAdditionalHeaders(headers);
    }

    return super.get(url);
  }

  private setDefaultHeaders(): void {
    const defaultHeaders = new Headers();
    defaultHeaders.set('Authorization', `Bearer ${sessionStorage.getItem('token')}`);
    defaultHeaders.set('Content-Type', 'application/json');
    this.requestOptions.headers = defaultHeaders;
  }

  private setAdditionalHeaders(headers: AdditionalHeader[]): void {
    for (let header of headers) {
      this.requestOptions.headers.set(header.name, header.value);
    }
  }
}

export interface AdditionalHeader {
  name: string;
  value: string;
}
