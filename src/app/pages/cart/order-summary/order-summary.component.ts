import { Component, computed, inject } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { PrimaryButtonComponent } from "../../../primary-button/primary-button.component";

@Component({
  selector: 'app-order-summary',
  imports: [PrimaryButtonComponent],
  template: `
    <div class="ordr">
    <h2 class="summ">Order Summary</h2>
      <div class="st1">
        <div class="st2">
          <span class="st3">Total</span>
          <span class="Price">{{'$' + total()}}</span>
        </div>
        <app-primary-button label="Proceed to checkout"/>
      </div>
    </div>

  `,
  styleUrl: './order-summary.component.scss'
})
export class OrderSummaryComponent {
 cartService=inject(CartService);
 total=computed(() => {
  let total=0;
  for(const item of this.cartService.cart()) {
    total+=item.price;
  }
  return total;
 })
}
