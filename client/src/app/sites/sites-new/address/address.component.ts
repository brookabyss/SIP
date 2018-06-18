import { Component, OnInit, NgZone } from '@angular/core';
import { Site } from '../../site'
import { Address } from '../../address'
import { Subscription } from 'rxjs/Subscription'
import { MouseEvent, MapsAPILoader  } from '@agm/core';
import { SitesService } from '../../sites-service'
import {} from 'googlemaps'


@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  
  site: Site;
  api_key: string;
  zoom: number = 8;
  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;
  searchControl: string;
  input: HTMLInputElement;
  searched_place: any;
  site_subscription: Subscription;

  constructor(private mapsAPILoader: MapsAPILoader, private ngZone : NgZone,  private _sitesService: SitesService) { }

  ngOnInit() {
      this.site_subscription= this._sitesService.observedSite.subscribe(
        site => this.site = site,
        err => console.log(err),
        ()=>{}
      )
      
      this.api_key="AIzaSyC8mUARmEjgn9lDp199rjvV8QpRr5o_W6s";
      this.searchControl= "";
      this.input= (<HTMLInputElement> document.getElementById("search_address"));
      this.mapsAPILoader.load().then(()=>{
        let autocomplete = new google.maps.places.Autocomplete(this.input, {
            types: ["address"]
        });
        
        autocomplete.addListener("place_changed", () => {
        console.log("Place changed")
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          
          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          //set latitude, longitude and zoom
          this.lat = place.geometry.location.lat();
          this.lng = place.geometry.location.lng();
          this.markers=[
	          {
		        lat: this.lat,
		        lng: this.lng,
		        draggable: true
	          },
	 
          ];
          this.zoom = 12;
          this.clearAddressfields();
          this.site.address.longitude=this.lat;
          this.site.address.latitude=this.lat;
          
          console.log(place)
          for(let i in place.address_components){
            if(place.address_components[i].types[0]==="street_number"){
              this.site.address.line_1=place.address_components[i].long_name;
            }
            if(place.address_components[i].types[0]==="route"){
              if(!this.site.address.line_1){
                 this.site.address.line_1=place.address_components[i].long_name;
              }
              else{
                 this.site.address.line_1=this.site.address.line_1  + " " +  place.address_components[i].short_name;
              }
             
            }
            else if(place.address_components[i].types[0]==="postal_code"){
              //casting to number
              this.site.address.zipcode=+place.address_components[i].long_name;
            }
            else if(place.address_components[i].types[0]==="country"){
              this.site.address.country=place.address_components[i].long_name;
            }
            else if(place.address_components[i].types[0]==="administrative_area_level_1"){
              this.site.address.region_state=place.address_components[i].short_name;
            }
            else if(place.address_components[i].types[0]==="locality"){
              this.site.address.city=place.address_components[i].long_name;
            }
            
            
          }
          
        });
      });
        
      });

  }
  
  

  
  clearAddressfields(){
    this.site.address=new Address;
  }
  
  
  
  addAddress(){
    this.site.address.form_status= true;
  }
  
  
  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
    
  }
  
  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }
  
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
  
  //load Places Autocomplete
  
  
  markers: marker[] = [];
  
  
  
}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}

