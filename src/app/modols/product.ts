import { Directive,HostListener,HostBinding } from "@angular/core";



export interface Iproduct{
    ID: number
    Name: string
    Quantity: number
    Price: number
    Img: string
    brand:string
    num:number;
}
export interface Catagory {
    name1:string;
    name2:string;
  }
  export class CartItem {
    ID!: number ;
    Name!:string;
    price!: number;
    num!: number ;
}
export interface Register{
  name:string;
  Username:string;
  Password:string;
  Email:string;
}
