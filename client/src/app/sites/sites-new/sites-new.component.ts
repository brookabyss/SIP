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
  monitored_yes:any;
  monitored_no:any;
  constructor(private _sitesService: SitesService) { }

  ngOnInit() {
    this.site= new Site;
    this.address= new Address;
  }
  
  addSite(){
    console.dir(this.address);
    console.dir(this.site);
    this._sitesService.addSite(this.site,this.address)
    .then(data=>{
      console.log(data);
      
    })
    .catch(err=>{
      console.log(err);
    })
  }

}
