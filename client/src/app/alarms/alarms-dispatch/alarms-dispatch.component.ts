import { Component, OnInit } from '@angular/core';
import { AlarmsService } from '../alarms-service';
import { Alarm } from '../alarms'
import { Router } from '@angular/router';


@Component({
  selector: 'app-alarms-dispatch',
  templateUrl: './alarms-dispatch.component.html',
  styleUrls: ['./alarms-dispatch.component.css']
})
export class AlarmsDispatchComponent implements OnInit {
  alarm: Alarm;
  sign_in_url;
  constructor(private _alarmsService: AlarmsService, private _router: Router) { }

  ngOnInit() {
    this.alarm = new Alarm;
    this.sign_in_url="https://login.microsoftonline.com/common/oauth2/v2.0/authorize?scope=openid+User.Read+Mail.Read&redirect_uri=http%3A%2F%2Fsip-brookabyss.c9users.io%2Fsites%2Fgettoken&response_type=code&client_id=4b13fb9d-4fe5-4e48-82c5-21f3eee4e0f3";
  }
  
  onDispatch(){
    console.log(this.alarm);
    this._alarmsService.dispatch(this.alarm)
    .then(data=>{
      data=JSON.parse(data);
      window.location.href= data.status;
    })
    .catch(err=>{console.log(err)});
    
  }
  
  
  

}
