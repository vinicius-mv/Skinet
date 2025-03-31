import { Component, input } from '@angular/core';
import { CartItem } from '../../../shared/models/cart';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-item',
  imports: [
    RouterModule,
    MatButtonModule,
    MatIconModule,
    CommonModule
  ],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent {
  item = input.required<CartItem>();
}
