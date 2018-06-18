import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Site } from './site'
import { SLL } from './linked_list/sll'



@Injectable()
export class SitesService {
  
  observedSites = new BehaviorSubject([]);
  observedSite = new BehaviorSubject(new Site);
  observedPages = new BehaviorSubject({
      general_info: true,
      address: null,
      poc:null,
      confirm:null
    });
  

  constructor(private _http: Http) { }
  
  updateSite(site){
      this.observedSite.next(site);
  }
  
  updatePages(pages){
      this.observedPages.next(pages);
  }
  
  updateSites(sites){
      this.observedSites.next(sites);
  }
  
  
  
  addSite(site){
    return this._http.post('/sites/new',{'site':site}).map(data=>data.json()).toPromise();
  }
  
  
  
  
  
}