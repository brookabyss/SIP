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
  constructor(private _sitesService: SitesService, private atp: AmazingTimePickerService) { }

  ngOnInit() {
    this.site_subscription= this._sitesService.observedSite.subscribe(
      site => this.site = site,
      err => console.log(err),
      ()=>{}
    );
    this.address= new Address;
    this.pages={
      general_info: true,
      address: null,
      poc:null,
      confirm:null
    }
    this.all_business=false;
    //for styling
    this.all_days_selected= false;
    
    
    /// POC linked list 
    this.pocs_subscription= this._sitesService.observed_new_site_pocs.subscribe(
      pocs => this.pocs = pocs,
      err => console.log(err),
      ()=>{}
      )
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
    console.dir(this.address);
    console.dir(this.site);
    this._sitesService.addSite(this.site,this.address)
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
    let mon, tue, wed, thur, fri, sat, sun;
    console.log("Business hours checked")
    this.all_business=! this.all_business
    this.all_days_selected = !this.all_days_selected
    console.log(this.all_business)
    console.log(document);
    
    mon= (<HTMLInputElement>document.getElementById("weekday-mon"));
    mon.checked= !mon.checked
    
    tue= (<HTMLInputElement>document.getElementById("weekday-tue"));
    tue.checked= !tue.checked
    
    wed= (<HTMLInputElement>document.getElementById("weekday-wed"));
    wed.checked= !wed.checked;
    
    thur= (<HTMLInputElement>document.getElementById("weekday-thu"));
    thur.checked = !thur.checked;
    
    fri=(<HTMLInputElement>document.getElementById("weekday-fri"));
    fri.checked = !fri.checked;
    
    sat=(<HTMLInputElement>document.getElementById("weekday-sat"));
    sat.checked = !sat.checked;
    
    sun=(<HTMLInputElement>document.getElementById("weekday-sun"));
    sun.checked = !sun.checked;
    for(let key in this.site.business_days){
          console.log(this.site.business_days[key])
          this.site.business_days[key].active= !this.site.business_days[key].active
      }
    console.log(this.all_days_selected);

  }
  
  
  addGAR(){
    console.log("add GAR")
    this.initial_order +=1;
    this.GAR.order = this.initial_order
    let GAR2 = new POC;
    GAR2.poc_name="Test";
    GAR2.order =2; 
    let GAR3 = new POC;
    GAR3.poc_name="Switch";
    GAR3.order =3; 
    this.pocs.insert(this.GAR)
    this.pocs.insert(GAR2)
    this.pocs.insert(GAR3)
    this.pocs.exchange_orders(this.GAR,GAR3)
    this.pocs.last_changed= Date.now()
    this._sitesService.updateNewSitePOCS(this.pocs);
    this.GAR = new POC;
    this.GAR.poc_name= "GAR"
  }
  
  removePOC(contact){
    console.log("remove",contact)
    this.pocs.delete_node(contact);
    this.pocs.last_changed= Date.now()
    this._sitesService.updateNewSitePOCS(this.pocs);
  }
  
   ngOnDestroy(){
        
    }
    
  
  

}
