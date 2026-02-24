import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Product, PRODUCTS } from '../data/products';
import { AppComponent } from '../app.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [RouterLink, MatCardModule, MatButtonModule, MatIconModule, MatChipsModule],
  template: `
    @if (product) {
      <div class="product-detail">
        <a mat-button routerLink="/" color="primary">
          <mat-icon>arrow_back</mat-icon> Back to Products
        </a>
        <mat-card appearance="outlined" class="detail-card">
          <div class="detail-grid">
            <div class="detail-image">{{ product.image }}</div>
            <div class="detail-info">
              <mat-chip-set>
                <mat-chip color="primary" highlighted>{{ product.category }}</mat-chip>
              </mat-chip-set>
              <h1>{{ product.name }}</h1>
              <p class="detail-price">\${{ product.price.toFixed(2) }}</p>
              <p class="detail-description">{{ product.description }}</p>
              <button mat-raised-button color="primary" (click)="app.addToCart(product)">
                <mat-icon>add_shopping_cart</mat-icon>
                Add to Cart
              </button>
            </div>
          </div>
        </mat-card>
      </div>
    } @else {
      <p>Product not found. <a mat-button routerLink="/" color="primary">Go back</a></p>
    }
  `,
  styles: [`
    .product-detail { max-width: 900px; margin: 0 auto; }
    .detail-card { margin-top: 16px; }
    .detail-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; padding: 24px; }
    .detail-image { font-size: 6rem; text-align: center; padding: 48px; background: #f5f5f5; border-radius: 12px; }
    .detail-info h1 { font-size: 1.75rem; margin: 12px 0 8px; }
    .detail-price { font-size: 1.5rem; font-weight: 700; color: #3f51b5; margin: 8px 0 16px; }
    .detail-description { color: #555; line-height: 1.6; margin-bottom: 24px; }
    @media (max-width: 768px) {
      .detail-grid { grid-template-columns: 1fr; }
      .detail-image { font-size: 4rem; padding: 32px; }
    }
  `]
})
export class ProductDetailComponent {
  app = inject(AppComponent);

  product: Product | undefined = PRODUCTS.find(
    (p: Product) => p.id === +inject(ActivatedRoute).snapshot.params['id']
  );
}
