import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from "./register/register.component";
import { ProductsComponent } from './products/products.component';
import { ProductChildComponent } from './product-child/product-child.component';

let routes: Routes = [
  { path: '', redirectTo:"home" ,pathMatch: 'full'  },
  { path: 'home' , component:ProductsComponent  },
  { path: 'register' , component:RegisterComponent  },
  { path: 'product', component:ProductsComponent  },
  { path: 'productlist', component:ProductChildComponent  },
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
