import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


import { SLL } from './linked_list/sll'



@Injectable()
export class SitesService {
  
  observedSites = new BehaviorSubject([]);
  observed_new_site_pocs = new BehaviorSubject(new SLL);
  
  constructor(private _http: Http) { }
  
  
  updateSites(sites){
      this.observedSites.next(sites);
  }
  
  updateNewSitePOCS(pocs){
    console.log("pocs updated")
    this.observed_new_site_pocs.next(pocs)
  }
  
  
  addSite(site,address){
    return this._http.post('/sites/new',{'site':site,'address':address}).map(data=>data.json()).toPromise();
  }
  
  
  
}