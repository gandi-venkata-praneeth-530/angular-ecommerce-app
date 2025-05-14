import { Component, inject, input } from '@angular/core';
import { Product } from '../../../models/product-model';
import { ButtonComponent } from "../../../components/button/button.component";
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  imports: [ButtonComponent],
  template: `
  <div class="shpcr">
    <img [src]="item().image" class="crimg"/>
  <div class="cr1">
    <span class="cr2">{{item().title}}</span>
    <span class="cr3">{{ '$' +item().price}}</span>
</div>
<div class="remove">
  <app-button label="Remove" (btnClicked)="cartService.removeFromCart(item().id)"/>
</div>
  </div>
  `,
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent {
  cartService=inject(CartService);
  item=input.required<Product>();
}
