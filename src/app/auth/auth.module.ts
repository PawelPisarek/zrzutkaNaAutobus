/**
 * Created by pawe on 3/20/17.
 */
import {Host, ModuleWithProviders, NgModule, Optional, Provider, SkipSelf} from '@angular/core';
import {Http, HttpModule, RequestOptions, XHRBackend} from '@angular/http';
import {AuthConfig, AuthHttp, AuthModule} from "angular2-jwt";
import {ApiHttpService} from "./api-http.service";





export const ApiHttpServiceProvider = {
  provide: ApiHttpService,
  useFactory: (backend : XHRBackend, requestOptions : RequestOptions) => {
    return new ApiHttpService(backend, requestOptions);
  },
  deps: [XHRBackend, RequestOptions]
};

@NgModule({
  imports: [
  ],
  providers: [ApiHttpServiceProvider],
  declarations: []
})
export class ApiHttpServiceModule {
}
