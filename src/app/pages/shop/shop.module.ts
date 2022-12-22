import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedsComponent } from './feeds/feeds.component';
import { ShopRoutingModule } from './shop-routing.module';
import { ProductsComponent } from './products/products.component';


@NgModule({
  declarations: [FeedsComponent,ProductsComponent],
  imports: [
    CommonModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
