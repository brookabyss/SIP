import { POC } from './poc'

export class Site{
    _id: string;
    site_name: String;
    site_code: String;
    monitored_zone: Boolean;
    address_id: Number;
    created_at: Date;
    updated_at: Date;
    form_status:Boolean;
    business_days:Array<any>;
    pocs:Array<POC>;
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
        this.pocs= [];
    }
}