import { Component, OnInit,OnDestroy } from '@angular/core';
import { POC } from '../../poc'
import { SitesService } from '../../sites-service'
import { Subscription } from 'rxjs/Subscription';
import { SLL } from '../../linked_list/sll'
import { Site } from '../../site'



@Component({
  selector: 'app-poc',
  templateUrl: './poc.component.html',
  styleUrls: ['./poc.component.css']
})
export class PocComponent implements OnInit,OnDestroy {
  
  ASM: POC;
  //Regional Security Manager(RSM)
  RSM: POC;
  // General Alarm Responder (GAR)
  GAR: POC;
  site: Site;
  pocs: SLL;
  initial_order: number;
  site_subscription: Subscription;
  pocs_subscription: Subscription;


  constructor(private _sitesService: SitesService) { }

  ngOnInit() {
    this.pocs_subscription= this._sitesService.observed_new_site_pocs.subscribe(
      pocs => this.pocs = pocs,
      err => console.log(err),
      ()=>{}
      )
      
    this.site_subscription= this._sitesService.observedSite.subscribe(
      site => this.site = site,
      err => console.log(err),
      ()=>{}
      )
      
    this.GAR = new POC;
    this.GAR.poc_name="GAR";
    this.initial_order=0;
  }
  
  
  
   ngOnDestroy(){
        
  }

}
