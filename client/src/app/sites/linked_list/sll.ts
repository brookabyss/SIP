import { Node } from './node'
import { POC } from '../poc'

 
 
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
    
  


    
    delete_node(poc:POC){
        console.log("dleteing")
        let temp;
        if(poc.order){
            if(!this.head){
                console.log("empty list")
                return false;
            }
            else if(this.head.poc.order === poc.order){
                temp = this.head;
                this.head = this.head.next;
                console.log("temp",temp)
                return temp
            }
            else{
                let current = this.head, previous=this.head
                while(current){
                    if(current.poc.order === poc.order){
                        previous.next = current.next
                        return current;
                    }
                    previous= current, current = current.next
                }
                console.log("value doesn't exit went through the list")
                return false;
            }
        }
        else{
            console.log("please provide a node to remove")
            return false;
        }
        
        
    }
}