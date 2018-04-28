import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SitesService {
  
  observedSites = new BehaviorSubject([]);
  
  constructor(private _http: Http) { }
  
  
  updateSites(sites){
      this.observedSites.next(sites);
  }
  
  
  
  
}