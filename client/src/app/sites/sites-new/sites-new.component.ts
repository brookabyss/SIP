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
  pocs_subscription: Subscription
  
  constructor(private _sitesService: SitesService, private atp: AmazingTimePickerService) { }

  ngOnInit() {
    this.site= new Site;
    this.address= new Address;
    this.pages={
      general_info: true,
      address: null,
      poc:null,
      confirm:null
    }
    
    
    /// POC linked list 
    this.pocs_subscription= this._sitesService.observed_new_site_pocs.subscribe(
      pocs => this.pocs = pocs,
      err => console.log(err),
      ()=>{}
      )
    this.GAR = new POC;
    this.GAR.poc_name="GAR";
    this.initial_order=0;
    console.dir(this.pocs)
    // this.pocs.insert(this.GAR);
    // this.pocs.insert(GAR2)
    // this.pocs.traverse()
    
    
   
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
    this.site.business_days[day].active= !this.site.business_days[day].active
    
  }
  
  open(day,period) {
    const amazingTimePicker = this.atp.open();
    amazingTimePicker.afterClose().subscribe(time => {
      console.log(time);
      this.site.business_days[day][period]=time;
      console.dir(this.site.business_days)
    });
  }
  
  checkBusinessHours(){
    console.log("Business hours checked")
  }
  
  
  addGAR(){
    console.log("add GAR")
    this.initial_order +=1;
    this.GAR.order = this.initial_order
    let GAR2 = new POC;
    GAR2.poc_name="Test";
    GAR2.order =2; 
    this.pocs.insert(this.GAR)
    this.pocs.insert(GAR2)
    this.pocs.delete_node(GAR2)
    this.pocs.last_changed= Date.now()
    this._sitesService.updateNewSitePOCS(this.pocs);
    this.GAR = new POC;
    this.GAR.poc_name= "GAR"
  }
  
   ngOnDestroy(){
        
    }
    
  
  

}
