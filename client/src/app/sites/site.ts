import { POC } from './poc'
import { Address } from './address'
import { SLL } from './linked_list/sll'

export class Site{
    _id: string;
    site_name: string;
    site_code: string;
    monitored_zone: Boolean;
    address:Address;
    created_at: Date;
    updated_at: Date;
    form_status:Boolean;
    business_days:Array<any>;
    //general alarm responders
    pocs:SLL;
    ASM: string;
    RSM: string;
    
    constructor(){
        this.business_days= [
        {active:false, start:null, end: null},
        {active:false, start:null, end: null},
        {active:false, start:null, end: null},
        {active:false, start:null, end: null},
        {active:false, start:null, end: null},
        {active:false, start:null, end: null},
        {active:false, start:null, end: null},
        ];
        this.pocs= new SLL;
        this.address= new Address;
        this.form_status= false;
    }
}