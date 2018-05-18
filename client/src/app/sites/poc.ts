export class POC{
    _id: String;
    poc_type: String;
    poc_name:String;
    poc_value: String;
    available:any;
    order: number;
    site_id:any;
    created_at:Date;
    updated_at:Date;
    
    constructor(){
        // business hours and after hours
        this.available = {
            bh: false,
            ah:false
        }
    }
}
    