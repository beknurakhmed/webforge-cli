import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../data/products';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200">
      <a [routerLink]="['/product', product.id]" class="no-underline text-inherit">
        <div class="text-5xl text-center py-6 bg-gray-50">{{ product.image }}</div>
        <div class="p-4">
          <span class="text-xs text-indigo-600 font-semibold uppercase">{{ product.category }}</span>
          <h3 class="text-base text-gray-900 mt-1 mb-1 font-semibold">{{ product.name }}</h3>
          <p class="text-lg font-bold text-indigo-600">
            \${{ product.price.toFixed(2) }}
          </p>
        </div>
      </a>
      <button
        class="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold border-none cursor-pointer transition-colors"
        (click)="addToCart.emit(product)"
      >Add to Cart</button>
    </div>
  `,
  styles: []
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;
  @Output() addToCart = new EventEmitter<Product>();
}
