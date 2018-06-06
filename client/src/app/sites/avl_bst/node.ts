import {Site} from '../site'
export class Node{
    value:Site;
    left:Node;
    right:Node;
    previous: Node;
    balance_factor:number;
    
    constructor(value:Site){
        this.value = value;
        this.left=null;
        this.right=null;
        this.previous=null;
        this.balance_factor=null;
    }
}