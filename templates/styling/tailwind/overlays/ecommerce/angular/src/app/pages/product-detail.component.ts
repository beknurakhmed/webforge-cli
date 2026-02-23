import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Product, PRODUCTS } from '../data/products';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [RouterLink],
  template: `
    @if (product) {
      <div>
        <a routerLink="/" class="text-indigo-600 hover:text-indigo-700 font-medium inline-block mb-6">
          &larr; Back to Products
        </a>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div class="text-7xl md:text-8xl text-center py-12 md:py-16 bg-gray-50 rounded-xl">{{ product.image }}</div>
          <div>
            <span class="text-xs text-indigo-600 font-semibold uppercase">{{ product.category }}</span>
            <h1 class="text-2xl md:text-3xl font-bold text-gray-900 mt-2 mb-2">{{ product.name }}</h1>
            <p class="text-xl md:text-2xl font-bold text-indigo-600 mb-2">
              \${{ product.price.toFixed(2) }}
            </p>
            <p class="text-gray-700 leading-relaxed mb-6">{{ product.description }}</p>
            <button
              class="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg border-none text-base cursor-pointer transition-colors"
              (click)="app.addToCart(product)"
            >Add to Cart</button>
          </div>
        </div>
      </div>
    } @else {
      <p class="text-gray-500">Product not found. <a routerLink="/" class="text-indigo-600 hover:underline">Go back</a></p>
    }
  `,
  styles: []
})
export class ProductDetailComponent {
  app = inject(AppComponent);

  product: Product | undefined = PRODUCTS.find(
    (p: Product) => p.id === +inject(ActivatedRoute).snapshot.params['id']
  );
}
