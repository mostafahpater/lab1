import { Injectable } from '@angular/core';
import { CartItem, Iproduct } from '../modols/product';
import { ProductsComponent } from '../products/products.component';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  list:Iproduct[]=[]
  nums!: string;
  constructor() {
    this.list=[
      {ID:1,Name:"product1",num:10,brand:"apple",Quantity:5,Price:20799,Img:"https://www.reliancedigital.in/medias/Motorola-E32-Mobile-Phone-492849904-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNDU4OHxpbWFnZS9qcGVnfGltYWdlcy9oODAvaDI1Lzk4MzQxMDkyMDY1NTguanBnfGU1NGNkMTA3ODhiYTJhZGEyNDFhMGEzZDZhNjg5NzhmZWYzM2JkNDY4NjY3MzhiZTA3MzRmM2U4OGUzMmU4Y2Q"},
      {ID:2,Name:"product2",num:14,brand:"apple",Quantity:5,Price:4399,Img:"https://m.media-amazon.com/images/I/71geVdy6-OS._SX466_.jpg"},
      {ID:3,Name:"product3",num:15,brand:"oppo",Quantity:5,Price:4888,Img:"https://cdn1.smartprix.com/rx-ioKTQfBn2-w1200-h1200/oKTQfBn2.jpg"},
      {ID:4,Name:"product4",num:20,brand:"oppo",Quantity:5,Price:4999,Img:"https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/f21_pro/navigation/v2/Navigation-SunsetOrange-427_600-pc.png.thumb.webp"},
    ]
    
  }
  getProduct():Iproduct[]{
   return this.list;
  }
  addProductby(cartitem:CartItem){
this.list.forEach((e) => {
  if(e.ID==cartitem.ID)
  e.num-=cartitem.num
})
  }
}
