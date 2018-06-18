import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import {HttpModule,XSRFStrategy,CookieXSRFStrategy } from '@angular/http'
import { AppRoutingModule } from './app-routing.module';
import { AmazingTimePickerModule } from 'amazing-time-picker'; // this line you need
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { WhileDirective } from './linkedlist-directive'
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SitesComponent } from './sites/sites.component';
import { SitesAllComponent } from './sites/sites-all/sites-all.component';
import { SitesNewComponent } from './sites/sites-new/sites-new.component';
import { SitesEditComponent } from './sites/sites-edit/sites-edit.component';
import { SitesSingleDetailComponent } from './sites/sites-single-detail/sites-single-detail.component';
import { AlarmsComponent } from './alarms/alarms.component';
import { AlarmsPendingComponent } from './alarms/alarms-pending/alarms-pending.component';
import { AlarmsDispatchComponent } from './alarms/alarms-dispatch/alarms-dispatch.component';


import {LoginService } from './login/login-service';
import {SitesService } from './sites/sites-service';
import {AlarmsService } from './alarms/alarms-service';
import { AddressComponent } from './sites/sites-new/address/address.component';
import { PocComponent } from './sites/sites-new/poc/poc.component';
import { ConfirmComponent } from './sites/sites-new/confirm/confirm.component';



export function cookieStrategy() {
  console.log("******************************************************")
  var c=new CookieXSRFStrategy('csrftoken', 'X-CSRFToken')
  console.log(c)
  
  return c;
}


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SitesComponent,
    SitesAllComponent,
    SitesNewComponent,
    SitesEditComponent,
    SitesSingleDetailComponent,
    AlarmsComponent,
    AlarmsPendingComponent,
    AlarmsDispatchComponent,
    WhileDirective,
    AddressComponent,
    PocComponent,
    ConfirmComponent,
  ],
  imports: [
    AppRoutingModule,
    AmazingTimePickerModule,
    AngularFontAwesomeModule,
    AgmCoreModule.forRoot({
      apiKey:"AIzaSyC8mUARmEjgn9lDp199rjvV8QpRr5o_W6s",
      libraries: ["places"]
    }),
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [AlarmsService, LoginService, SitesService, {
        provide: XSRFStrategy,
        useFactory: cookieStrategy,
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
