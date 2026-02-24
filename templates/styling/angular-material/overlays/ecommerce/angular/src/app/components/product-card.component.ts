import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { Product } from '../data/products';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink, MatCardModule, MatButtonModule, MatIconModule, MatChipsModule],
  template: `
    <mat-card appearance="outlined" class="product-card">
      <a [routerLink]="['/product', product.id]" class="product-link">
        <div class="product-image">{{ product.image }}</div>
        <mat-card-header>
          <mat-card-title>{{ product.name }}</mat-card-title>
          <mat-card-subtitle>
            <mat-chip-set>
              <mat-chip>{{ product.category }}</mat-chip>
            </mat-chip-set>
          </mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <p class="product-price">\${{ product.price.toFixed(2) }}</p>
        </mat-card-content>
      </a>
      <mat-card-actions>
        <button mat-raised-button color="primary" (click)="addToCart.emit(product)">
          <mat-icon>add_shopping_cart</mat-icon>
          Add to Cart
        </button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [`
    .product-card { height: 100%; display: flex; flex-direction: column; }
    .product-link { text-decoration: none; color: inherit; flex: 1; }
    .product-image { font-size: 3rem; text-align: center; padding: 24px; background: #f5f5f5; }
    .product-price { font-size: 1.25rem; font-weight: 700; color: #3f51b5; margin-top: 8px; }
    mat-card-actions { padding: 8px 16px 16px; }
    mat-card-actions button { width: 100%; }
  `]
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;
  @Output() addToCart = new EventEmitter<Product>();
}
