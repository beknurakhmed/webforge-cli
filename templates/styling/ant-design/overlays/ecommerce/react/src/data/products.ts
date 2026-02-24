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

export const products: Product[] = [
  { id: 1, name: 'Wireless Headphones', price: 79.99, image: '🎧', category: 'Electronics', description: 'Premium wireless headphones with noise cancellation and 30-hour battery life.' },
  { id: 2, name: 'Running Shoes', price: 129.99, image: '👟', category: 'Sports', description: 'Lightweight running shoes with responsive cushioning for everyday runs.' },
  { id: 3, name: 'Leather Backpack', price: 89.99, image: '🎒', category: 'Accessories', description: 'Handcrafted leather backpack with padded laptop compartment.' },
  { id: 4, name: 'Smart Watch', price: 199.99, image: '⌚', category: 'Electronics', description: 'Feature-rich smartwatch with health tracking and GPS navigation.' },
  { id: 5, name: 'Coffee Maker', price: 59.99, image: '☕', category: 'Home', description: 'Programmable coffee maker with thermal carafe and auto-brew timer.' },
  { id: 6, name: 'Yoga Mat', price: 34.99, image: '🧘', category: 'Sports', description: 'Non-slip yoga mat with alignment markers and carrying strap.' },
  { id: 7, name: 'Sunglasses', price: 149.99, image: '🕶️', category: 'Accessories', description: 'Polarized sunglasses with UV400 protection and titanium frame.' },
  { id: 8, name: 'Desk Lamp', price: 44.99, image: '💡', category: 'Home', description: 'Adjustable LED desk lamp with touch dimmer and USB charging port.' },
];
