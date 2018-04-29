import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component'
import { SitesAllComponent } from './sites/sites-all/sites-all.component'
import { SitesNewComponent } from './sites/sites-new/sites-new.component'
import { SitesEditComponent } from './sites/sites-edit/sites-edit.component'
import { SitesSingleDetailComponent } from './sites/sites-single-detail/sites-single-detail.component'
import { Routes, RouterModule } from '@angular/router';
import { AlarmsDispatchComponent } from './alarms/alarms-dispatch/alarms-dispatch.component'
import { AlarmsPendingComponent } from './alarms/alarms-pending/alarms-pending.component'




const routes: Routes = [
  

{
    'path':'',
    component: LoginComponent
},

{
    'path':'sites',
    children:[
      
      {'path':'', component:SitesAllComponent },
      {'path':'new', component:SitesNewComponent },
      {'path':'edit/:id', component:SitesEditComponent },
      {'path':'detail/:id', component:SitesEditComponent },
      {'path':'*', component:SitesAllComponent }
      
      
      
      ]
    
},

{
    'path':'alarms',
    children:[
      
      {'path':'pending', component:AlarmsPendingComponent },
      {'path':'dispatch', component:AlarmsDispatchComponent },
      {'path':'*', component:SitesAllComponent }
      
      
      
      ]
    
},

{ path: '**', redirectTo: '' }
    
    
    
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
 

  
})
export class AppRoutingModule { }