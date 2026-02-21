import { Component, signal, computed } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { Product } from './data/products';

export interface CartItem {
  product: Product;
  quantity: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <header class="store-header">
      <div class="store-header__logo">{{ projectName }}</div>
      <nav class="store-header__nav">
        <a
          routerLink="/"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{ exact: true }"
        >Home</a>
        <a
          routerLink="/cart"
          routerLinkActive="active"
        >Cart ({{ cartCount() }})</a>
      </nav>
    </header>
    <main class="store-main">
      <router-outlet />
    </main>
    <footer class="store-footer">
      <p>&copy; 2024 {{ projectName }}</p>
    </footer>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      font-family: system-ui, sans-serif;
      color: #374151;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    .store-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      background: #111827;
      color: #fff;
    }

    .store-header__logo {
      font-size: 1.5rem;
      font-weight: 700;
    }

    .store-header__nav {
      display: flex;
      gap: 1.5rem;
    }

    .store-header__nav a {
      color: #d1d5db;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.2s;
    }

    .store-header__nav a:hover,
    .store-header__nav a.active {
      color: #fff;
    }

    .store-main {
      flex: 1;
      padding: 2rem;
      max-width: 1200px;
      width: 100%;
      margin: 0 auto;
    }

    .store-footer {
      text-align: center;
      padding: 1.5rem;
      background: #111827;
      color: #9ca3af;
      font-size: 0.875rem;
    }

    @media (max-width: 768px) {
      .store-header {
        flex-direction: column;
        gap: 0.75rem;
        padding: 1rem;
      }

      .store-main {
        padding: 1rem;
      }
    }
  `]
})
export class AppComponent {
  projectName = '{{projectName}}';
  cart = signal<CartItem[]>([]);

  cartCount = computed(() =>
    this.cart().reduce((sum: number, item: CartItem) => sum + item.quantity, 0)
  );

  addToCart(product: Product): void {
    this.cart.update((items: CartItem[]) => {
      const existing = items.find(
        (i: CartItem) => i.product.id === product.id
      );
      if (existing) {
        return items.map((i: CartItem) =>
          i.product.id === product.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...items, { product, quantity: 1 }];
    });
  }

  removeFromCart(productId: number): void {
    this.cart.update((items: CartItem[]) =>
      items.filter((i: CartItem) => i.product.id !== productId)
    );
  }

  getCartTotal(): number {
    return this.cart().reduce(
      (sum: number, item: CartItem) => sum + item.product.price * item.quantity,
      0
    );
  }
}
