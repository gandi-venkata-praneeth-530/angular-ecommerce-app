import { Component, inject } from '@angular/core';
import { CartItemComponent } from "./cart-item/cart-item.component";
import { CartService } from '../../services/cart.service';
import { OrderSummaryComponent } from "./order-summary/order-summary.component";

@Component({
  selector: 'app-cart',
  imports: [CartItemComponent, OrderSummaryComponent],
  template: `
    <div class="shop">
      <h2 class="heading">Shopping Cart</h2>
      @for (item of cartService.cart(); track item.id) {
        <app-cart-item [item]="item"/>
      }
      <app-order-summary/>
    </div>
  `,
  styleUrl: './cart.component.scss'
})
export class CartComponent {
cartService = inject(CartService);
}
