import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class LoginService {
  
  observedUsers = new BehaviorSubject([]);
  
  constructor(private _http: Http) { }
  
  
  updateUsers(users){
      this.observedUsers.next(users);
  }
  
  login(){
      console.log('login service');
      return this._http.get('employee/login').map(data=>data.json()).toPromise();
  }
  
  
}