import { inject, Injectable } from '@angular/core';
import { CartService } from './cart.service';
import { forkJoin, of } from 'rxjs';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class InitService {
  private cartService = inject(CartService);
  private accountService = inject(AccountService);

  init() {
    // get the cart from database on app initialization
    const cartId = localStorage.getItem('cart_id');

    // app initializer works does not work with signals or subscription, so we need observables for this function
    const cart$ = cartId ? this.cartService.getCart(cartId) : of(null);
    const user$ = this.accountService.getUserInfo();

    // forJoin allow us to wait for multiple observables to complete and emit the result array
    return forkJoin({
      cart: cart$,
      user: user$
    });
  }
}
