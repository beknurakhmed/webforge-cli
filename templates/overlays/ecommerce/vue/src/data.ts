export interface Product {
  id: number;
  name: string;
  price: number;
  emoji: string;
  description: string;
  category: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export const products: Product[] = [
  { id: 1, name: 'Wireless Headphones', price: 79.99, emoji: '🎧', description: 'Premium noise-cancelling wireless headphones with 30-hour battery life.', category: 'Electronics' },
  { id: 2, name: 'Leather Backpack', price: 129.99, emoji: '🎒', description: 'Handcrafted leather backpack with laptop compartment and multiple pockets.', category: 'Accessories' },
  { id: 3, name: 'Running Shoes', price: 94.99, emoji: '👟', description: 'Lightweight running shoes with responsive cushioning for all-day comfort.', category: 'Footwear' },
  { id: 4, name: 'Smart Watch', price: 199.99, emoji: '⌚', description: 'Fitness tracker and smartwatch with heart rate monitor and GPS.', category: 'Electronics' },
  { id: 5, name: 'Coffee Maker', price: 64.99, emoji: '☕', description: 'Programmable drip coffee maker with thermal carafe and auto-shutoff.', category: 'Home' },
  { id: 6, name: 'Sunglasses', price: 49.99, emoji: '🕶️', description: 'Polarized UV400 sunglasses with lightweight titanium frame.', category: 'Accessories' },
  { id: 7, name: 'Yoga Mat', price: 34.99, emoji: '🧘', description: 'Non-slip eco-friendly yoga mat with alignment lines and carrying strap.', category: 'Fitness' },
  { id: 8, name: 'Desk Lamp', price: 44.99, emoji: '💡', description: 'LED desk lamp with adjustable brightness, color temperature, and USB port.', category: 'Home' },
];
