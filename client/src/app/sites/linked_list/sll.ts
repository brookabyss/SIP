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
            // console.log("Current",this.head)
            while(current.next!=null && current.poc.order < new_poc.order){
                current= current.next
            }
            current.next = new Node( new_poc);
            // console.log("after",current)

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
        console.log("deleteing")
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
    
    // find takes a poc and returns pointers to current and previous nodes
    
    find(poc){
        
        if(poc.order){
            if(!this.head){
                console.log("empty list")
                return {"previous":null,"current":null}
            }
            else if(this.head.poc.order === poc.order){
               return {"previous":null,"current":this.head}
            }
            else{
                let current = this.head, previous=this.head
                while(current){
                    if(current.poc.order === poc.order){
                       
                        return {"previous":previous,"current":current}
                    }
                    previous= current, current = current.next
                }
                console.log("value doesn't exit went through the list")
                return {"previous":null,"current":null}
            }
        }
        else{
            console.log("please provide a node to remove")
             return {"previous":null,"current":null}
        }
        
    }
    
    exchange_orders(poc1, poc2){
        console.log(poc1.order)
        console.log(poc2.order)
       let search_poc_1 = this.find(poc1),
       search_poc_2 = this.find(poc2),temp
       if(poc1.order!=this.head.poc)
       
       if(!this.head){
           console.log("empty sll")
           return false;

       }
       else if(!(search_poc_1.current&&search_poc_2.current)){
           console.log("the POCs don't exist")
           return false;
       }
       else if (poc1.order===this.head.poc.order){
           temp=poc1.order
           search_poc_1.current.poc.order= poc2.order
           search_poc_2.current.poc.order= temp
           temp = search_poc_2.current.next 
           search_poc_2.current.next= search_poc_1.current.next
           this.head = search_poc_2.current
           search_poc_1.current.next =temp 
           search_poc_2.previous.next= search_poc_1.current
           
           console.log(search_poc_1.current)
           console.log(this.head)
       }
       else if (poc2.order===this.head.poc.order){
           temp=poc1.order
           search_poc_1.current.poc.order= poc2.order
           search_poc_2.current.poc.order= temp
           temp = search_poc_1.current.next 
           search_poc_1.current.next= search_poc_2.current.next
           this.head = search_poc_1.current
           search_poc_2.current.next =temp 
           search_poc_1.previous.next= search_poc_2.current
           
           console.log(search_poc_1.current)
           console.log(this.head)
           
       }
       else if(search_poc_1.previous && search_poc_1.current && search_poc_2.previous && search_poc_2.current){
           
           if(poc1.order<poc2.order){
               temp= search_poc_1.current 
               search_poc_1.previous.next = search_poc_2.current
               if(search_poc_2.previous.poc.order===poc1.order){
                   temp= search_poc_2.current.next
                   search_poc_2.current.next = search_poc_1.current
                   search_poc_1.current.next=temp
                   temp=poc1.order
                   search_poc_1.current.poc.order= poc2.order
                   search_poc_2.current.poc.order= temp
                   console.log(search_poc_1.current)
                   console.log(this.head)
               }
               else{
                   temp=poc1.order
                   search_poc_1.current.poc.order= poc2.order
                   search_poc_2.current.poc.order= temp
                   temp = search_poc_1.current.next 
                   search_poc_1.current.next= search_poc_2.current.next
                   search_poc_2.current.next= temp
                   search_poc_1.previous.next= search_poc_2.current 
                   search_poc_2.previous.next= search_poc_1.current
                   console.log(search_poc_1.current)
                   console.log(this.head)
                   
               }
           }
           else{
               temp= search_poc_2.current 
               search_poc_2.previous.next = search_poc_1.current
               if(search_poc_1.previous.poc.order===poc2.order){
                   temp= search_poc_1.current.next
                   search_poc_1.current.next = search_poc_2.current
                   search_poc_2.current.next=temp
                   temp=poc2.order
                   search_poc_2.current.poc.order= poc1.order
                   search_poc_1.current.poc.order= temp
                   console.log(search_poc_2.current)
                   console.log(this.head)
               }
               else{
                   temp=poc1.order
                   search_poc_1.current.poc.order= poc2.order
                   search_poc_2.current.poc.order= temp
                   temp = search_poc_1.current.next 
                   search_poc_1.current.next= search_poc_2.current.next
                   search_poc_2.current.next= temp
                   search_poc_1.previous.next= search_poc_2.current 
                   search_poc_2.previous.next= search_poc_1.current
                   console.log(search_poc_1.current)
                   console.log(this.head)
                   
               }
               
           }
          
       }
    }
    
    
}