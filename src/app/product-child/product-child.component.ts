import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Iproduct,CartItem } from '../modols/product';
import { ProductserviceService } from "../service/productservice.service";
@Component({
  selector: 'app-product-child',
  templateUrl: './product-child.component.html',
  styleUrls: ['./product-child.component.css']
})
export class ProductChildComponent implements OnInit,OnChanges {
number!: number;
opendetails() {
throw new Error('Method not implemented.');
}
  prolist:Iproduct[]=[]
  @Input() sendValue:number=0
 
  constructor(private proservice:ProductserviceService ) { }
ngOnChanges():void {
 
}
  ngOnInit(): void {
    this.prolist=this.proservice.getProduct()
    
  }
 

}
