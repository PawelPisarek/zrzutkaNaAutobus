/**
 * Created by pawe on 3/20/17.
 */
import {RequestOptions, XHRBackend} from "@angular/http";
import {ApiHttpService} from "./api-http.service";


export function httpFactory(backend: XHRBackend, requestOptions: RequestOptions) {
  return new ApiHttpService(backend, requestOptions);
}

export const ApiHttpServiceProvider = {
  provide: ApiHttpService,
  useFactory: httpFactory,
  deps: [XHRBackend, RequestOptions]
};

