import {Node} from './node'
import {Site} from '../site'

export class BST {
    length: number;
    root: Node;
    
    constructor(){
        this.length=0;
        this.root=null;
    }
    
    height(node){
        if(!node) {
            return -1;
        }
        let leftHeight = this.height(node.left);
        let rightHeight = this.height(node.right);

        return Math.max(leftHeight, rightHeight) + 1;
        
    }
    
    calculate_balance_factor(node){
        let leftHeight=this.height(node.left);
        let rightHeight=this.height(node.right);
        node.balance_factor=rightHeight - leftHeight
        return rightHeight - leftHeight
        
    }
    
    
    isBalanced(node){
       // Base condition
        if(!node) {
            return true;
        } 
        // for left and right subtree height
        let lh = this.height(node.left)
        let rh = this.height(node.right)
        
        node.balance_factor = lh -rh
 
        // allowed values for (lh - rh) are 1, -1, 0
        if ((Math.abs(lh - rh) <= 1) && (this.isBalanced(node.left)== true) && (this.isBalanced(node.right)== true)){
            return true
        }
       
 
        // if we reach here means tree is not 
        // height-balanced tree
        return false;
        }
    
  // Search for nodes
  
   search(term:string){
       if(this.root===null){
           console.log("empty bst")
           return false;
       }
       else{
          return this.search_nodes(this.root,term, [])
       }
       
       
   }
   
   search_nodes(current, term:string, search_terms){
       if(!current){
           return search_terms
       }
       else{
          console.log(current.value.site_code.split("").splice(0,term.length).join("")===term)
          if(current.value.site_code.split("").splice(0,term.length).join("")===term || current.value.site_name.split("").splice(0,term.length).join("")==term ){
              
              search_terms.push(current)
          }
          if(current.right){
                  return this.search_nodes(current.right, term, search_terms)
          }
          if(current.left){
                  return this.search_nodes(current.left, term, search_terms)
          }
           
       }
       
       
   }
    
    // Inorder Traversal
   inorder(node,callback){
        if(node){
            this.inorder(node.left,callback);
            callback(node.value);
            this.inorder(node.right,callback);
            
        }
    }
    
   
   descending_order(node,callback){
        if(node){
            this.inorder(node.right,callback);
            callback(node.value);
            this.inorder(node.left,callback);
        }
    }
    
   
    
    push(value:Site){
        let current,prev;
        if(this.root===null){
            this.root= new Node(value)
            this.length+=1
            console.log(this.isBalanced(this.root));
            return this.root
        }
        else if(this.root.value.site_code.localeCompare(value.site_code)===-1 ){
            if(this.root.right===null){
                this.root.right= new Node(value);
                this.root.right.previous = this.root;
                this.length+=1
                this.isBalanced(this.root);
                console.log(this.isBalanced(this.root));
                return this.root.right
            }
            else{
                current = this.root.right
                prev= this.root;
                this.push_current(prev,current, value)
            }
            
        }
        else if(this.root.value.site_code.localeCompare(value.site_code)===1 ){
            if(this.root.left===null){
                this.root.left= new Node(value);
                this.root.left.previous = this.root;
                this.length+=1
                this.isBalanced(this.root);
                console.log(this.isBalanced(this.root));
                return this.root.left
            }
            else{
                current = this.root.left
                prev= this.root;
                this.push_current(prev,current, value)
            }
            
        }
        
    } 
        
        
        
        
        
    push_current(prev,current, value){ 
        if(current===null) {
            current=new Node(value)
            current.previous = prev;
            this.length++
            this.isBalanced(this.root);
            console.log(this.isBalanced(this.root));

        }
        else if(current.value.site_code.localeCompare(value.site_code)===-1){
            if(!current.right){
                current.right = new Node(value)
                current.right.previous = prev;
                this.length+=1
                this.isBalanced(this.root);
                console.log(this.isBalanced(this.root));
                return current
            }
            else{
                return this.push_current(current, current.right,value)
            }
                
        }
        else if(current.value.site_code.localeCompare(value.site_code)===1){
            if(!current.left){
                current.left = new Node(value)
                current.left.previous = prev;
                this.length+=1
                this.isBalanced(this.root);
                console.log(this.isBalanced(this.root));
                return current
            }
            else{
                return this.push_current(current, current.left,value)
            }
        }
        else{
            console.log("Site already exists")
            return false;
        }
        
    }
    
    // Right Rotate 
    // To balance we need the parent(previous)  of the node or the root to be balanced
    rightRotate(prev){
        let temp;
        if(prev!=null){
            temp= prev.left;
            prev.left = prev.left.left;
            temp.leftt= prev.left.left.right;
            prev.left.right= temp;
            console.log(this.root);
        }
        else{
            temp =this.root;
            let temp2= this.root.left.right;
            this.root= this.root.left;
            temp.left = temp2;
            this.root.right = temp;
        }
        
    }
    
    // left Rotate 
    // To balance we need the parent(previous)  of the node to be balanced
    leftRotate(prev){
        let temp= prev.right;
        prev.right = prev.right.right;
        temp.right= prev.right.right.left;
        prev.right.left= temp;
        console.log(this.root);
        // let temp= current_pointer;
        // current_pointer = current_pointer.right;
        // temp.right = current_pointer.right.left;
        // current_pointer.left = temp;
        // console.log(this.root)
    }
    
    
    
    
   
        
    
}