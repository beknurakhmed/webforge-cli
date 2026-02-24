import { createRouter } from './router';
import { renderHome } from './pages/home';
import { renderProductDetail } from './pages/product-detail';
import { renderCart } from './pages/cart';
import styles from './style.module.css';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export let cart: CartItem[] = [];

export function addToCart(product: Product): void {
  const existing = cart.find(item => item.id === product.id);
  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
}

export function removeFromCart(id: number): void {
  cart = cart.filter(item => item.id !== id);
}

export function getCartTotal(): number {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export const products: Product[] = [
  { id: 1, name: 'Wireless Headphones', price: 79.99, image: '🎧', category: 'Electronics', description: 'Premium wireless headphones with noise cancellation and 30-hour battery life. Crystal clear audio for music lovers.' },
  { id: 2, name: 'Leather Backpack', price: 129.99, image: '🎒', category: 'Accessories', description: 'Handcrafted genuine leather backpack with laptop compartment. Perfect for work and travel.' },
  { id: 3, name: 'Smart Watch', price: 249.99, image: '⌚', category: 'Electronics', description: 'Feature-rich smartwatch with health tracking, GPS, and 5-day battery life. Stay connected on the go.' },
  { id: 4, name: 'Running Shoes', price: 99.99, image: '👟', category: 'Footwear', description: 'Lightweight running shoes with responsive cushioning and breathable mesh upper for maximum comfort.' },
  { id: 5, name: 'Coffee Maker', price: 59.99, image: '☕', category: 'Home', description: 'Programmable coffee maker with thermal carafe. Brew up to 12 cups of perfect coffee every morning.' },
  { id: 6, name: 'Desk Lamp', price: 44.99, image: '💡', category: 'Home', description: 'Adjustable LED desk lamp with multiple brightness levels and color temperatures. Eye-care technology.' },
  { id: 7, name: 'Yoga Mat', price: 34.99, image: '🧘', category: 'Fitness', description: 'Non-slip yoga mat with alignment lines. Extra thick for joint protection during your practice.' },
  { id: 8, name: 'Sunglasses', price: 149.99, image: '🕶️', category: 'Accessories', description: 'Polarized sunglasses with UV400 protection. Lightweight titanium frame for all-day comfort.' },
];

export { styles };

const app = document.querySelector<HTMLElement>('#app')!;

createRouter([
  { path: '/', render: renderHome },
  { path: '/product/:id', render: renderProductDetail },
  { path: '/cart', render: renderCart },
], app);

// Event delegation for interactive elements
app.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;

  if (target.dataset.addToCart) {
    const id = parseInt(target.dataset.addToCart);
    const product = products.find(p => p.id === id);
    if (product) addToCart(product);
    window.dispatchEvent(new HashChangeEvent('hashchange'));
  }

  if (target.dataset.removeFromCart) {
    removeFromCart(parseInt(target.dataset.removeFromCart));
    window.dispatchEvent(new HashChangeEvent('hashchange'));
  }
});
