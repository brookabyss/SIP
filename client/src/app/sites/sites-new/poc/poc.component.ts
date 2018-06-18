import { Component, OnInit,OnDestroy } from '@angular/core';
import { POC } from '../../poc'
import { SitesService } from '../../sites-service'
import { Subscription } from 'rxjs/Subscription';
import { SLL } from '../../linked_list/sll'
import { Site } from '../../site'
import { Router } from '@angular/router';



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
  initial_order: number;
  site_subscription: Subscription;
  pages_subscription: Subscription;
  pages:any;
  


  constructor(private _sitesService: SitesService,private _router: Router) { }

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
   
      
    console.log(this.site);
    this.GAR = new POC;
    this.GAR.poc_name="GAR";
    this.initial_order=0;
    
  }
  
  addGAR(){
    console.log("add GAR")
    this.initial_order +=1;
    this.GAR.order = this.initial_order;
    this.site.pocs.insert(this.GAR);
    console.log(this.site.pocs.size)
    this.site.pocs.last_changed= Date.now()
    this._sitesService.updateSite(this.site);
    this.GAR = new POC;
    this.GAR.poc_name= "GAR"
  }
  
  exchangeGAROrder(gar1,gar2){
    this.site.pocs.exchange_orders(gar1,gar2)
    this.site.pocs.last_changed= Date.now()
    this._sitesService.updateSite(this.site);
  }
  
  removeGAR(gar){
    console.log("remove",gar)
    this.site.pocs.delete_node(gar);
    this.site.pocs.last_changed= Date.now()
    this._sitesService.updateSite(this.site);
  }
  
  dragStart(event){
    console.log(event);
    
  }
  
  dragEnd(event){
    console.log(event);
    
  }
  
  toConfirm(){
    this.site.form_status=true;
    for (let key in this.pages){
      this.pages[key]=null
    }
    this.pages['confirm']=true;
    this._sitesService.updatePages(this.pages)
    // this._router.navigate(["sites/new"])
    console.log(this.pages)
  }
  
  
  
   ngOnDestroy(){
        
  }

}
