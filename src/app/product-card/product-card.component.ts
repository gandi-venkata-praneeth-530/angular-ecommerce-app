import { Component, inject, input } from '@angular/core';
import { Product } from '../models/product-model';
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [PrimaryButtonComponent],
  template: `
    <div class="card">
      <img [src]="product().image" class="product-image"/>
      <div class="product-info">
        <span class="span">{{product().title}}</span>
        <span class="span1">{{'$' + product().price}}</span>
        <app-primary-button label="Add to Cart" class="cart" (btnClicked)="cartService.addToCart(product())"/>
      </div>
      <span class="status" [class]="product().stock ? 'text-green-500': 'text-red-500'"
      >
        @if (product().stock) {
          {{product().stock}} left
        }@else {
          Out of stock
        }
      </span>
    </div>
  `,
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  cartService=inject(CartService);
  product = input.required<Product>()
}
