import { Component, OnDestroy } from '@angular/core';
import { User } from '../user';
import { LoginService } from './login-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {
  
  user: User;
  
  constructor(private _loginservice: LoginService) { }

  ngOnInit() {
    this.user= new User;
  }
  
 /* onLogin(){
    console.log(this.user);
    this._loginservice.login(this.user)
    .then(data=>console.log(data))
    .catch(err=>console.log(err));
  }

*/
getOutlook(){
  this._loginservice.login()
  .then(data=>{
    console.log(data);
    data=JSON.parse(data);
    window.location.href= data.sign_in_url;
    
  }
  )
  .catch(err=>console.log(err));
}

  ngOnDestroy(){
    
  }

}
