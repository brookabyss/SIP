import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import {HttpModule,XSRFStrategy,CookieXSRFStrategy } from '@angular/http'
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {LoginService } from './login/login-service';

export function cookieStrategy() {
  console.log("******************************************************")
  var c=new CookieXSRFStrategy('csrftoken', 'X-CSRFToken')
  console.log(c)
  
  return c;
}


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule 
  ],
  providers: [LoginService,{
        provide: XSRFStrategy,
        useFactory: cookieStrategy,
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
