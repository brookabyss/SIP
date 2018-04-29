import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AlarmsService {
  
  observedAlarms = new BehaviorSubject([]);
  
  constructor(private _http: Http) { }
  
  
  updateaAlarms(alarms){
      this.observedAlarms.next(alarms);
  }
  
   dispatch(alarm){
      console.log('alarm service');
      return this._http.post('sites/alarm/dispatch',alarm).map(data=>data.json()).toPromise();
  }
  
 
  
}