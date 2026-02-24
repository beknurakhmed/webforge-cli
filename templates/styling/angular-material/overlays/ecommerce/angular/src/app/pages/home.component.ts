import { Component, inject, signal } from '@angular/core';
import { ProductCardComponent } from '../components/product-card.component';
import { Product, PRODUCTS } from '../data/products';
import { AppComponent } from '../app.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCardComponent, MatFormFieldModule, MatInputModule, MatIconModule],
  template: `
    <div class="home-page">
      <div class="home-hero">
        <h1>Discover Amazing Products</h1>
        <mat-form-field appearance="outline" class="search-field">
          <mat-label>Search products</mat-label>
          <input matInput [value]="search()" (input)="search.set($any($event.target).value)" />
          <mat-icon matPrefix>search</mat-icon>
        </mat-form-field>
      </div>
      <div class="product-grid">
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
    .home-hero { text-align: center; margin-bottom: 32px; }
    .home-hero h1 { font-size: 2rem; color: #212121; margin-bottom: 16px; }
    .search-field { width: 100%; max-width: 400px; }
    .product-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      gap: 24px;
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
