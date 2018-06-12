import { Component, OnInit, NgZone } from '@angular/core';
import { Address } from '../../address'
import { MouseEvent, MapsAPILoader  } from '@agm/core';
import {} from 'googlemaps'


@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  
  address: Address;
  api_key: string;
  
  zoom: number = 8;
  
  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;
  searchControl: string;
  input: HTMLInputElement;
  searched_place: any;

  constructor(private mapsAPILoader: MapsAPILoader, private ngZone : NgZone) { }

  ngOnInit() {
      this.address= new Address;
      this.api_key="AIzaSyC8mUARmEjgn9lDp199rjvV8QpRr5o_W6s";
      this.searchControl= "Seattle";
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
          this.zoom = 12;
          this.clearAddressfields();
          this.address.longitude=this.lat;
          this.address.latitude=this.lat;
          
          console.log(place)
          for(let i in place.address_components){
            if(place.address_components[i].types[0]==="street_number"){
              this.address.line_1=place.address_components[i].long_name;
            }
            if(place.address_components[i].types[0]==="route"){
              if(!this.address.line_1){
                 this.address.line_1=place.address_components[i].long_name;
              }
              else{
                 this.address.line_1=this.address.line_1  + " " +  place.address_components[i].short_name;
              }
             
            }
            else if(place.address_components[i].types[0]==="postal_code"){
              //casting to number
              this.address.zipcode=+place.address_components[i].long_name;
            }
            else if(place.address_components[i].types[0]==="country"){
              this.address.country=place.address_components[i].long_name;
            }
            else if(place.address_components[i].types[0]==="administrative_area_level_1"){
              this.address.region_state=place.address_components[i].short_name;
            }
            else if(place.address_components[i].types[0]==="locality"){
              this.address.city=place.address_components[i].long_name;
            }
            
            
          }
          
        });
      });
        
      });

  }
  
  clearAddressfields(){
    this.address=new Address;
  }
  
  
  
  addAddress(){
    this.address.form_status= true;
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
  
  
  markers: marker[] = [
	  {
		  lat: 51.673858,
		  lng: 7.815982,
		  label: 'A',
		  draggable: true
	  },
	  {
		  lat: 51.373858,
		  lng: 7.215982,
		  label: 'B',
		  draggable: false
	  },
	  {
		  lat: 51.723858,
		  lng: 7.895982,
		  label: 'C',
		  draggable: true
	  }
  ];
  
  
  
}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}

