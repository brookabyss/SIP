import { Component, OnInit,OnDestroy } from '@angular/core';
import { POC } from '../../poc'
import { SitesService } from '../../sites-service'
import { Subscription } from 'rxjs/Subscription';
import { SLL } from '../../linked_list/sll'
import { Site } from '../../site'

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit, OnDestroy {
  
  ASM: POC;
  //Regional Security Manager(RSM)
  RSM: POC;
  // General Alarm Responder (GAR)
  GAR: POC;
  site: Site;
  initial_order: number;
  site_subscription: Subscription;
  pages_subscription: Subscription;
  pages: any;

  constructor(private _sitesService: SitesService) { }

   ngOnInit() {
    
      
    this.site_subscription= this._sitesService.observedSite.subscribe(
      site => this.site = site,
      err => console.log(err),
      ()=>{}
      )
      
      this.pages_subscription= this._sitesService.observedPages.subscribe(
      pages => this.pages = pages,
      err => console.log(err),
      ()=>{}
      )
   
      
      
    }
    
    addSite(){
      this._sitesService.addSite(this.site)
      .then(data=>{
        console.log(data)
      })
      .catch(err=>{
        console.log(err);
      })
      
    }
    
    ngOnDestroy(){
      
    }
   
   
   

}
