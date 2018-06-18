import { Component, OnInit, OnDestroy } from '@angular/core';
import { Site } from '../site'
import { Address } from '../address'
import { SitesService } from '../sites-service'
import { POC } from '../poc'
import { SLL } from '../linked_list/sll'
import { Subscription } from 'rxjs/Subscription';


import { AmazingTimePickerService } from 'amazing-time-picker'; 




@Component({
  selector: 'app-sites-new',
  templateUrl: './sites-new.component.html',
  styleUrls: ['./sites-new.component.css']
})
export class SitesNewComponent implements OnInit, OnDestroy {
  
  site_creation_status: any;
  site: Site;
  address: Address;
  pages: any;
  // Area Secruity Manager (ASM)
  ASM: POC;
  //Regional Security Manager(RSM)
  RSM: POC;
  // General Alarm Responder (GAR)
  GAR: POC;
  pocs: SLL;
  initial_order: number;
  pocs_subscription: Subscription;
  // Time picker set for setting all business days
  all_business: boolean;
  all_days_selected: boolean;
  site_subscription: Subscription;
  pages_subscription: Subscription;
  constructor(private _sitesService: SitesService, private atp: AmazingTimePickerService) { }

  ngOnInit() {
    this.site_subscription= this._sitesService.observedSite.subscribe(
      site => this.site = site,
      err => console.log(err),
      ()=>{}
    );
    
    
    this.pages_subscription= this._sitesService.observedPages.subscribe(
      pages => this.pages = pages,
      err => console.log(err),
      ()=>{}
      )
      
    this.address= new Address;
    
    
    
    
    this.all_business=false;
    //for styling
    this.all_days_selected= false;
    
    
    
    this.GAR = new POC;
    this.GAR.poc_name="GAR";
    this.initial_order=0;
    
    // Site creation check for each section 
    
    this. site_creation_status={
      "general":false,
      "address": false,
      "poc":false,
    }

    
   
  }
  
  addSite(){
    console.dir(this.site);
    this._sitesService.addSite(this.site)
    .then(data=>{
      console.log(data);
      console.log(data[0].address_id.line_1)
      
    })
    .catch(err=>{
      console.log(err);
    })
  }
  
  swicthPages(page){
    for (let key in this.pages){
      this.pages[key]=null
    }
  
    this.pages[page]= true
    
    this._sitesService.updatePages(this.pages)
    
    
  }
  
  addAddress(){
    this.address.form_status= true;
  }
  
  dayClicked(day){
    console.log(day)
    if(day==="all"){
      console.log(day)
      for(let key in this.site.business_days){
          console.log(this.site.business_days[key])
          this.site.business_days[key].active= !this.site.business_days[key].active
      }
    }
    else{
      this.site.business_days[day].active= !this.site.business_days[day].active

    }
    
    
  }
  
  open(day,period) {
    const amazingTimePicker = this.atp.open();
    amazingTimePicker.afterClose().subscribe(time => {
      console.log(time);
      if(day==="all"){
        for(let key in this.site.business_days){
          console.log(this.site.business_days[key])
          this.site.business_days[key][period]=time;
        }
      }
      else{
        this.site.business_days[day][period]=time;
        console.dir(this.site.business_days)
      }
      
    });
  }
  
  checkBusinessHours(){
    let mon, tue, wed, thur, fri, sat, sun,all;
    console.log("Business hours checked")
    this.all_business=! this.all_business
    this.all_days_selected = !this.all_days_selected
    console.log(this.all_business)
    console.log(document);
    all = (<HTMLInputElement>document.getElementById("check_business_hours"));
    mon= (<HTMLInputElement>document.getElementById("weekday-mon"));
    mon.checked= all.checked
    
    tue= (<HTMLInputElement>document.getElementById("weekday-tue"));
    tue.checked= all.checked
    
    wed= (<HTMLInputElement>document.getElementById("weekday-wed"));
    wed.checked= all.checked
    
    thur= (<HTMLInputElement>document.getElementById("weekday-thu"));
    thur.checked = all.checked
    
    fri=(<HTMLInputElement>document.getElementById("weekday-fri"));
    fri.checked = all.checked
    
    sat=(<HTMLInputElement>document.getElementById("weekday-sat"));
    sat.checked = all.checked
    
    sun=(<HTMLInputElement>document.getElementById("weekday-sun"));
    sun.checked = all.checked
    for(let key in this.site.business_days){
          console.log(this.site.business_days[key])
          this.site.business_days[key].active= this.all_business
      }
    console.log(this.all_days_selected);

  }
  
  
  
  
  
   ngOnDestroy(){
        
    }
    
  
  

}
