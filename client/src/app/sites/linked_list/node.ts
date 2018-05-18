export class Node{
    poc: any;
    next: Node;
    
    constructor(poc){
        this.poc = poc;
        this.next= null;
    }
}