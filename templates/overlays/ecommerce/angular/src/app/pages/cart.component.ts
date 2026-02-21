import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="cart-page">
      <h1 class="cart-page__title">Shopping Cart</h1>
      @if (app.cart().length === 0) {
        <p class="cart-page__empty-message">
          Your cart is empty. <a routerLink="/">Browse products</a>
        </p>
      } @else {
        <div class="cart-page__items">
          @for (item of app.cart(); track item.product.id) {
            <div class="cart-item">
              <span class="cart-item__image">{{ item.product.image }}</span>
              <div class="cart-item__info">
                <h3 class="cart-item__name">{{ item.product.name }}</h3>
                <p class="cart-item__quantity">
                  Qty: {{ item.quantity }} &times; \${{ item.product.price.toFixed(2) }}
                </p>
              </div>
              <span class="cart-item__total">
                \${{ (item.product.price * item.quantity).toFixed(2) }}
              </span>
              <button
                class="cart-item__remove-btn"
                (click)="app.removeFromCart(item.product.id)"
              >Remove</button>
            </div>
          }
        </div>
        <div class="cart-page__total-row">
          <span>Total</span>
          <span class="cart-page__total-price">
            \${{ app.getCartTotal().toFixed(2) }}
          </span>
        </div>
        <button class="cart-page__checkout-btn">Proceed to Checkout</button>
      }
    </div>
  `,
  styles: [`
    .cart-page__title {
      font-size: 1.75rem;
      color: #111827;
      margin-bottom: 1.5rem;
    }

    .cart-page__empty-message {
      color: #6b7280;
    }

    .cart-page__empty-message a {
      color: #4f46e5;
      text-decoration: none;
      font-weight: 500;
    }

    .cart-page__items {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .cart-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem;
      background: #fff;
      border: 1px solid #e5e7eb;
      border-radius: 8px;
    }

    .cart-item__image {
      font-size: 2rem;
    }

    .cart-item__info {
      flex: 1;
    }

    .cart-item__name {
      font-size: 1rem;
      color: #111827;
    }

    .cart-item__quantity {
      font-size: 0.875rem;
      color: #6b7280;
    }

    .cart-item__total {
      font-weight: 700;
      color: #111827;
      min-width: 80px;
      text-align: right;
    }

    .cart-item__remove-btn {
      padding: 0.5rem 1rem;
      background: #fee2e2;
      color: #dc2626;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-weight: 500;
    }

    .cart-item__remove-btn:hover {
      background: #fecaca;
    }

    .cart-page__total-row {
      display: flex;
      justify-content: space-between;
      padding: 1.5rem 0;
      border-top: 2px solid #e5e7eb;
      margin-top: 1rem;
      font-size: 1.25rem;
      font-weight: 700;
    }

    .cart-page__total-price {
      color: #4f46e5;
    }

    .cart-page__checkout-btn {
      width: 100%;
      padding: 1rem;
      background: #4f46e5;
      color: #fff;
      border: none;
      border-radius: 8px;
      font-size: 1.125rem;
      font-weight: 600;
      cursor: pointer;
      margin-top: 1rem;
    }

    .cart-page__checkout-btn:hover {
      background: #4338ca;
    }

    @media (max-width: 768px) {
      .cart-item {
        flex-wrap: wrap;
      }

      .cart-item__total {
        min-width: auto;
        text-align: left;
      }

      .cart-item__remove-btn {
        width: 100%;
        text-align: center;
      }
    }
  `]
})
export class CartComponent {
  app = inject(AppComponent);
}
