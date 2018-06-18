import { Directive, Input, TemplateRef, ViewContainerRef, OnChanges,SimpleChanges, DoCheck, OnDestroy,OnInit,KeyValueDiffers,KeyValueDiffer  } from '@angular/core';
import { SLL } from './sites/linked_list/sll'
import { SitesService } from './sites/sites-service'
import { Subscription } from 'rxjs/Subscription'


@Directive({ selector: '[appWhile]'})

export class WhileDirective implements  DoCheck, OnDestroy, OnInit {
    private _directivepocs: any;
    private _observedpocs: any;
    private last_changed:number;
    differ: any;
    subscription: Subscription
    constructor(private templateRef: TemplateRef<any>,private viewContainer: ViewContainerRef, private _sitesService: SitesService, private differs: KeyValueDiffers) { 
        // console.log("directive initialized")
        this.subscription= this._sitesService.observedSite.subscribe(
            site=>this._observedpocs=site.pocs,
            err=>console.log(err),
            ()=>{}
            )
            
        
    }
    
    ngOnInit(){
        
    }
    

    @Input() set appWhile(sll: SLL) {
        // this.differ= this.differs.find(sll).create()
        console.log(sll)
        
        // when it first POC comes in the last changed is the same , so it neglects showing the first POC, by offsetting the time we can see the poc now
        if(sll.size===1){
            this.last_changed= sll.last_changed + 1
        }
        else{
            this.last_changed= sll.last_changed
        }
        
        
    }
    
    // ngOnChanges(changes: SimpleChanges): void{
       
    // }
    
    
    ngDoCheck():void{
        if(this._observedpocs.last_changed!=this.last_changed) {
			console.log('changes detected');
            let current= this._observedpocs.head
            this.viewContainer.clear()
            while(current){
                if(current.poc){
                    // console.log("current.poc",current.poc)
                    this.viewContainer.createEmbeddedView(this.templateRef, {$implicit:current.poc});
                }
            current = current.next
            } 
            this.last_changed= this._observedpocs.last_changed
			
		} else {
			console.log('nothing changed');
		}
        
        
        
    }
    
    ngOnDestroy(){
        
    }
    
   

}