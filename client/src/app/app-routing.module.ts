import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component'



const routes: Routes = [

{
    'path':'',
    component: LoginComponent
},

{ path: '**', redirectTo: 'welcome' }
    
    
    
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
  
})
export class AppRoutingModule { }