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
      <div class="product-detail">
        <a routerLink="/" class="product-detail__back-link">
          &larr; Back to Products
        </a>
        <div class="product-detail__grid">
          <div class="product-detail__image">{{ product.image }}</div>
          <div class="product-detail__info">
            <span class="product-detail__category">{{ product.category }}</span>
            <h1 class="product-detail__name">{{ product.name }}</h1>
            <p class="product-detail__price">
              \${{ product.price.toFixed(2) }}
            </p>
            <p class="product-detail__description">{{ product.description }}</p>
            <button
              class="product-detail__add-btn"
              (click)="app.addToCart(product)"
            >Add to Cart</button>
          </div>
        </div>
      </div>
    } @else {
      <p>Product not found. <a routerLink="/">Go back</a></p>
    }
  `,
  styles: [`
    .product-detail__back-link {
      color: #4f46e5;
      text-decoration: none;
      font-weight: 500;
      display: inline-block;
      margin-bottom: 1.5rem;
    }

    .product-detail__grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      align-items: start;
    }

    .product-detail__image {
      font-size: 6rem;
      text-align: center;
      padding: 3rem;
      background: #f9fafb;
      border-radius: 12px;
    }

    .product-detail__category {
      font-size: 0.75rem;
      color: #4f46e5;
      font-weight: 600;
      text-transform: uppercase;
    }

    .product-detail__name {
      font-size: 1.75rem;
      color: #111827;
      margin: 0.5rem 0;
    }

    .product-detail__price {
      font-size: 1.5rem;
      font-weight: 700;
      color: #4f46e5;
      margin: 0.5rem 0;
    }

    .product-detail__description {
      color: #374151;
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    .product-detail__add-btn {
      padding: 0.75rem 2rem;
      background: #4f46e5;
      color: #fff;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      font-size: 1rem;
      cursor: pointer;
    }

    .product-detail__add-btn:hover {
      background: #4338ca;
    }

    @media (max-width: 768px) {
      .product-detail__grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }

      .product-detail__image {
        font-size: 4rem;
        padding: 2rem;
      }

      .product-detail__name {
        font-size: 1.35rem;
      }
    }
  `]
})
export class ProductDetailComponent {
  app = inject(AppComponent);

  product: Product | undefined = PRODUCTS.find(
    (p: Product) => p.id === +inject(ActivatedRoute).snapshot.params['id']
  );
}
