import { Component, inject } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { CartService } from '../services/cart.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [PrimaryButtonComponent,RouterLink],
  template: `
    <div class="head">
      <button  class="home" routerLink="/">My store</button>
      <app-primary-button [label]="'Cart(' + cartService.cart().length 
      +')'"
      routerLink="/cart"
       />
    </div>
  `,
  styleUrls: ['header.component.scss']
})
export class HeaderComponent { 
  cartService=inject(CartService);
}
