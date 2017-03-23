import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {NgReduxModule} from "@angular-redux/store";

import {AppComponent} from "./app.component";
import {NgReduxRouterModule} from "@angular-redux/router";
import {AppActions} from "./app.actions";
import {PreloadAllModules, RouterModule} from "@angular/router";
import {appRoutes} from "./app.routes";
import {HomeModule} from "./home/home.module";
import {LoginModule} from "./login/login.module";
import {ApiHttpServiceProvider} from "./auth/auth.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: true, preloadingStrategy: PreloadAllModules}),
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule,
    NgReduxRouterModule,
    ReactiveFormsModule,


    HomeModule,
    LoginModule
  ],
  providers: [AppActions, ApiHttpServiceProvider],
  bootstrap: [AppComponent]
})
export class AppModule {
}
