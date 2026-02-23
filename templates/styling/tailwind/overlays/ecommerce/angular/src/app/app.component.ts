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
    <div class="flex flex-col min-h-screen font-sans text-gray-700">
      <header class="flex flex-col md:flex-row justify-between items-center px-4 md:px-8 py-4 bg-gray-900 text-white gap-3 md:gap-0">
        <div class="text-2xl font-bold">{{ projectName }}</div>
        <nav class="flex gap-6">
          <a
            routerLink="/"
            routerLinkActive="text-white"
            [routerLinkActiveOptions]="{ exact: true }"
            class="text-gray-300 hover:text-white font-medium transition-colors"
          >Home</a>
          <a
            routerLink="/cart"
            routerLinkActive="text-white"
            class="text-gray-300 hover:text-white font-medium transition-colors"
          >Cart ({{ cartCount() }})</a>
        </nav>
      </header>
      <main class="flex-1 px-4 md:px-8 py-8 max-w-7xl w-full mx-auto">
        <router-outlet />
      </main>
      <footer class="text-center py-6 bg-gray-900 text-gray-400 text-sm">
        <p>&copy; 2024 {{ projectName }}</p>
      </footer>
    </div>
  `,
  styles: []
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
