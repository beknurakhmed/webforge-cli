import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../data/products';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="product-card">
      <a [routerLink]="['/product', product.id]" class="product-card__link">
        <div class="product-card__image">{{ product.image }}</div>
        <div class="product-card__info">
          <span class="product-card__category">{{ product.category }}</span>
          <h3 class="product-card__name">{{ product.name }}</h3>
          <p class="product-card__price">
            \${{ product.price.toFixed(2) }}
          </p>
        </div>
      </a>
      <button
        class="product-card__add-btn"
        (click)="addToCart.emit(product)"
      >Add to Cart</button>
    </div>
  `,
  styles: [`
    .product-card {
      background: #fff;
      border-radius: 12px;
      border: 1px solid #e5e7eb;
      overflow: hidden;
      transition: box-shadow 0.2s;
    }

    .product-card:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    .product-card__link {
      text-decoration: none;
      color: inherit;
    }

    .product-card__image {
      font-size: 3rem;
      text-align: center;
      padding: 1.5rem;
      background: #f9fafb;
    }

    .product-card__info {
      padding: 1rem;
    }

    .product-card__category {
      font-size: 0.75rem;
      color: #4f46e5;
      font-weight: 600;
      text-transform: uppercase;
    }

    .product-card__name {
      font-size: 1rem;
      color: #111827;
      margin: 0.25rem 0;
    }

    .product-card__price {
      font-size: 1.125rem;
      font-weight: 700;
      color: #4f46e5;
    }

    .product-card__add-btn {
      width: 100%;
      padding: 0.75rem;
      background: #4f46e5;
      color: #fff;
      border: none;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.2s;
    }

    .product-card__add-btn:hover {
      background: #4338ca;
    }
  `]
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;
  @Output() addToCart = new EventEmitter<Product>();
}
