import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem } from './cart.mode';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  total: number = 0; 
  @Input() cartTotal: number; 
  @Input() cartItems: CartItem[];
  @Output() cartItemDeleted = new EventEmitter<{ productId: number }>(); 
  @Output() cartItemChanged = new EventEmitter<{ productId: number }>();

  onCartItemDeleted(productData:{productId: number}) 
  {    
    this.cartItemDeleted.emit
    ({        
      productId: productData.productId      
    });      
  }
  onCartItemChanged(productData:{productId: number}) {
        this.cartItemChanged.emit({        
          productId: productData.productId      });      
    }
  constructor() { }

  ngOnInit(): void {
  }

}
