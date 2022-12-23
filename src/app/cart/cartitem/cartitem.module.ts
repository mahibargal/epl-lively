import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from '../cart.component';
import { CartItem } from '../cart.mode';



@NgModule({
  declarations: [
    CartComponent,
    CartItem
  ],
  imports: [
    CommonModule
  ]
})
export class CartitemModule { }
