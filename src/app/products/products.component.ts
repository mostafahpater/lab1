import { Component, OnInit } from '@angular/core';
import { Iproduct } from "../modols/product";
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  {
list:Iproduct[]=[]
  constructor() {
    this.list=[
      {ID:1,Name:"product1",Quantity:5,Price:20799,Img:"https://www.reliancedigital.in/medias/Motorola-E32-Mobile-Phone-492849904-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNDU4OHxpbWFnZS9qcGVnfGltYWdlcy9oODAvaDI1Lzk4MzQxMDkyMDY1NTguanBnfGU1NGNkMTA3ODhiYTJhZGEyNDFhMGEzZDZhNjg5NzhmZWYzM2JkNDY4NjY3MzhiZTA3MzRmM2U4OGUzMmU4Y2Q"},
      {ID:2,Name:"product2",Quantity:5,Price:4399,Img:"https://m.media-amazon.com/images/I/71geVdy6-OS._SX466_.jpg"},
      {ID:3,Name:"product3",Quantity:5,Price:4888,Img:"https://cdn1.smartprix.com/rx-ioKTQfBn2-w1200-h1200/oKTQfBn2.jpg"},
      {ID:4,Name:"product4",Quantity:5,Price:4999,Img:"https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/f21_pro/navigation/v2/Navigation-SunsetOrange-427_600-pc.png.thumb.webp"},
    ]
  }
  
  ngOnInit(): void {
  }
}

