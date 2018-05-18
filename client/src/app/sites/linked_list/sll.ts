import { Node } from './node'

export class SLL{
    head: Node;
    last_changed: number;
    constructor(new_poc=null){
        if(new_poc){
            this.head = new Node(new_poc);
        }
        this.last_changed= Date.now()
        
    }
    insert(new_poc){
        if(!this.head){
            this.head = new Node(new_poc);
        }
        else if(this.head.poc.order > new_poc.order){
            let temp = this.head ;
            this.head= new Node (new_poc);
            this.head.next = temp;
        }
        else{
            let current= this.head 
            console.log("Current",this.head)
            while(current.next!=null && current.poc.order < new_poc.order){
                current= current.next
            }
            current.next = new Node( new_poc);
            console.log("after",current)

        }
        return this
    }
    
    traverse(){
        
        if(!this.head){
            console.log("SLL empty")
        }
        else{
           let current= this.head;
           while (current) {
              console.log(current.poc.order);
              current = current.next;
           }
        }
    }
}