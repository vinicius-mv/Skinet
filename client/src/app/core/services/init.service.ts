import { inject, Injectable } from '@angular/core';
import { CartService } from './cart.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InitService {
  private cartService = inject(CartService);

  init() {
    // get the cart from database on app initialization
    const cartId = localStorage.getItem('cart_id');

    // app initializer works does not work with signals or subscription, so we need observables for this function
    const cart$ = cartId ? this.cartService.getCart(cartId) : of(null);

    return cart$;
  }
}
