import { Component, inject, signal } from '@angular/core';
import { ProductCardComponent } from '../components/product-card.component';
import { Product, PRODUCTS } from '../data/products';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCardComponent],
  template: `
    <div>
      <div class="text-center mb-8">
        <h1 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Discover Amazing Products</h1>
        <input
          type="text"
          placeholder="Search products..."
          [value]="search()"
          (input)="search.set($any($event.target).value)"
          class="px-5 py-3 w-full max-w-md md:max-w-lg border-2 border-gray-200 rounded-lg text-base outline-none focus:border-indigo-600 transition-colors"
        />
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        @for (product of filtered(); track product.id) {
          <app-product-card
            [product]="product"
            (addToCart)="onAddToCart($event)"
          />
        }
      </div>
    </div>
  `,
  styles: []
})
export class HomeComponent {
  private app = inject(AppComponent);
  search = signal<string>('');

  filtered = (): Product[] => {
    const query = this.search().toLowerCase();
    return PRODUCTS.filter(
      (product: Product) =>
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
    );
  };

  onAddToCart(product: Product): void {
    this.app.addToCart(product);
  }
}
