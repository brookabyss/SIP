import { Component, OnInit } from '@angular/core';
import { Site } from "../site"
// import { BST } from "../avl_bst/bst"

import AVLTree from 'avl';

@Component({
  selector: 'app-sites-all',
  templateUrl: './sites-all.component.html',
  styleUrls: ['./sites-all.component.css']
})
export class SitesAllComponent implements OnInit {
  tree: any; 
  site1: Site;
  site2:Site;
  site3: Site;
  site4:Site;
  site5: Site;
  constructor() { }

  ngOnInit() {
    this.tree = new AVLTree(null,true);
    this.site1= new Site;
    this.site1.site_code="SEA1"
    this.site1.site_name="Septo"
    this.site2= new Site;
    this.site2.site_code="DEP2"
    this.site2.site_name="Depto"
    this.site3= new Site;
    this.site3.site_code="SEA28"
    this.site3.site_name="Kepto"
    this.site4= new Site;
    this.site4.site_code="ZZZ24"
    this.site4.site_name="Zepto"
    this.site5= new Site;
    this.site5.site_code="ZZZ25"
    this.site5.site_name="Zepto2"
    
    this.tree.insert(this.site1.site_code, this.site1)
    this.tree.insert(this.site1.site_code, this.site1)

    console.dir(this.tree)
    
  }

}
