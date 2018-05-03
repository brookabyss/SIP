import { Component, OnInit } from '@angular/core';
import { Site } from '../site'
import { Address } from '../address'
import { SitesService } from '../sites-service'
@Component({
  selector: 'app-sites-new',
  templateUrl: './sites-new.component.html',
  styleUrls: ['./sites-new.component.css']
})
export class SitesNewComponent implements OnInit {
  site: Site;
  address: Address
  pages: any;
  constructor(private _sitesService: SitesService) { }

  ngOnInit() {
    this.site= new Site;
    this.address= new Address;
    this.pages={
      general_info: true,
      address: null,
      poc:null,
      confirm:null
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

}
