import { Component, inject, signal } from '@angular/core';
import { ProductCardComponent } from '../components/product-card.component';
import { Product, PRODUCTS } from '../data/products';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCardComponent],
  template: `
    <div class="home-page">
      <div class="home-page__hero">
        <h1 class="home-page__title">Discover Amazing Products</h1>
        <input
          type="text"
          placeholder="Search products..."
          [value]="search()"
          (input)="search.set($any($event.target).value)"
          class="home-page__search-input"
        />
      </div>
      <div class="home-page__product-grid">
        @for (product of filtered(); track product.id) {
          <app-product-card
            [product]="product"
            (addToCart)="onAddToCart($event)"
          />
        }
      </div>
    </div>
  `,
  styles: [`
    .home-page__hero {
      text-align: center;
      margin-bottom: 2rem;
    }

    .home-page__title {
      font-size: 2rem;
      color: #111827;
      margin-bottom: 1rem;
    }

    .home-page__search-input {
      padding: 0.75rem 1.25rem;
      width: 100%;
      max-width: 400px;
      border: 2px solid #e5e7eb;
      border-radius: 8px;
      font-size: 1rem;
      outline: none;
    }

    .home-page__search-input:focus {
      border-color: #4f46e5;
    }

    .home-page__product-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
      gap: 1.5rem;
    }

    @media (max-width: 768px) {
      .home-page__product-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
      }

      .home-page__title {
        font-size: 1.5rem;
      }

      .home-page__search-input {
        max-width: 100%;
      }
    }
  `]
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
