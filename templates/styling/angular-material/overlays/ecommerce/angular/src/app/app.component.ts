import { Component, signal, computed } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { Product } from './data/products';

export interface CartItem {
  product: Product;
  quantity: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatToolbarModule, MatButtonModule, MatIconModule, MatBadgeModule],
  template: `
    <mat-toolbar color="primary">
      <span class="logo">{{ projectName }}</span>
      <span class="spacer"></span>
      <a mat-button routerLink="/" routerLinkActive="active-link" [routerLinkActiveOptions]="{ exact: true }">
        <mat-icon>store</mat-icon> Shop
      </a>
      <a mat-button routerLink="/cart" routerLinkActive="active-link">
        <mat-icon [matBadge]="cartCount()" matBadgeColor="warn" [matBadgeHidden]="cartCount() === 0">shopping_cart</mat-icon>
        Cart
      </a>
    </mat-toolbar>
    <main class="store-main">
      <router-outlet />
    </main>
    <mat-toolbar class="store-footer">
      <span class="footer-text">&copy; 2024 {{ projectName }}</span>
    </mat-toolbar>
  `,
  styles: [`
    :host { display: flex; flex-direction: column; min-height: 100vh; }
    .logo { font-size: 1.25rem; font-weight: 700; }
    .spacer { flex: 1 1 auto; }
    .active-link { opacity: 1; }
    .store-main { flex: 1; padding: 24px; max-width: 1200px; width: 100%; margin: 0 auto; box-sizing: border-box; }
    .store-footer { justify-content: center; background: #111827; }
    .footer-text { color: #9ca3af; font-size: 0.875rem; }
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
