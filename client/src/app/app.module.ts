import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import {HttpModule,XSRFStrategy,CookieXSRFStrategy } from '@angular/http'
import { AppRoutingModule } from './app-routing.module';


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
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
   
  ],
  providers: [AlarmsService, LoginService, SitesService, {
        provide: XSRFStrategy,
        useFactory: cookieStrategy,
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
