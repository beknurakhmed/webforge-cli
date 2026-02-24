import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppComponent } from '../app.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink, MatCardModule, MatButtonModule, MatIconModule, MatDividerModule, MatListModule],
  template: `
    <div class="cart-page">
      <h1>Shopping Cart</h1>
      @if (app.cart().length === 0) {
        <mat-card appearance="outlined" class="empty-cart">
          <mat-card-content>
            <mat-icon class="empty-icon">remove_shopping_cart</mat-icon>
            <p>Your cart is empty.</p>
            <a mat-raised-button routerLink="/" color="primary">
              <mat-icon>store</mat-icon> Browse Products
            </a>
          </mat-card-content>
        </mat-card>
      } @else {
        <mat-card appearance="outlined">
          <mat-list>
            @for (item of app.cart(); track item.product.id) {
              <mat-list-item class="cart-item">
                <span class="item-image">{{ item.product.image }}</span>
                <div class="item-info">
                  <h3>{{ item.product.name }}</h3>
                  <p>Qty: {{ item.quantity }} &times; \${{ item.product.price.toFixed(2) }}</p>
                </div>
                <span class="item-total">\${{ (item.product.price * item.quantity).toFixed(2) }}</span>
                <button mat-icon-button color="warn" (click)="app.removeFromCart(item.product.id)">
                  <mat-icon>delete</mat-icon>
                </button>
              </mat-list-item>
              <mat-divider></mat-divider>
            }
          </mat-list>
          <div class="cart-total">
            <span>Total</span>
            <span class="total-price">\${{ app.getCartTotal().toFixed(2) }}</span>
          </div>
          <mat-card-actions>
            <button mat-raised-button color="primary" class="checkout-btn">
              <mat-icon>payment</mat-icon>
              Proceed to Checkout
            </button>
          </mat-card-actions>
        </mat-card>
      }
    </div>
  `,
  styles: [`
    .cart-page h1 { font-size: 1.75rem; margin-bottom: 24px; }
    .empty-cart { text-align: center; padding: 48px 24px; }
    .empty-icon { font-size: 48px; width: 48px; height: 48px; color: #bbb; margin-bottom: 16px; }
    .cart-item { height: auto !important; padding: 16px 0; display: flex; align-items: center; gap: 16px; }
    .item-image { font-size: 2rem; }
    .item-info { flex: 1; }
    .item-info h3 { font-size: 1rem; margin: 0; }
    .item-info p { font-size: 0.875rem; color: #666; margin: 4px 0 0; }
    .item-total { font-weight: 700; min-width: 80px; text-align: right; }
    .cart-total { display: flex; justify-content: space-between; padding: 16px; font-size: 1.25rem; font-weight: 700; }
    .total-price { color: #3f51b5; }
    .checkout-btn { width: 100%; }
    mat-card-actions { padding: 0 16px 16px; }
  `]
})
export class CartComponent {
  app = inject(AppComponent);
}
