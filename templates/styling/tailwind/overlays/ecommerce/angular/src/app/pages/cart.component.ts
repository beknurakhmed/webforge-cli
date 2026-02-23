import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div>
      <h1 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Shopping Cart</h1>
      @if (app.cart().length === 0) {
        <p class="text-gray-500">
          Your cart is empty. <a routerLink="/" class="text-indigo-600 hover:underline font-medium">Browse products</a>
        </p>
      } @else {
        <div class="flex flex-col gap-4">
          @for (item of app.cart(); track item.product.id) {
            <div class="flex flex-wrap items-center gap-4 p-4 bg-white border border-gray-200 rounded-lg">
              <span class="text-3xl">{{ item.product.image }}</span>
              <div class="flex-1 min-w-0">
                <h3 class="text-base font-semibold text-gray-900">{{ item.product.name }}</h3>
                <p class="text-sm text-gray-500">
                  Qty: {{ item.quantity }} &times; \${{ item.product.price.toFixed(2) }}
                </p>
              </div>
              <span class="font-bold text-gray-900 min-w-[80px] text-right md:text-right">
                \${{ (item.product.price * item.quantity).toFixed(2) }}
              </span>
              <button
                class="px-4 py-2 bg-red-100 hover:bg-red-200 text-red-600 border-none rounded-md cursor-pointer font-medium w-full md:w-auto text-center transition-colors"
                (click)="app.removeFromCart(item.product.id)"
              >Remove</button>
            </div>
          }
        </div>
        <div class="flex justify-between py-6 border-t-2 border-gray-200 mt-4 text-xl font-bold">
          <span>Total</span>
          <span class="text-indigo-600">
            \${{ app.getCartTotal().toFixed(2) }}
          </span>
        </div>
        <button class="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white border-none rounded-lg text-lg font-semibold cursor-pointer mt-4 transition-colors">Proceed to Checkout</button>
      }
    </div>
  `,
  styles: []
})
export class CartComponent {
  app = inject(AppComponent);
}
