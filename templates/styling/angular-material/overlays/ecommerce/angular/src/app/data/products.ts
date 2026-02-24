export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 79.99,
    image: '🎧',
    category: 'Electronics',
    description: 'Premium wireless headphones with noise cancellation.',
  },
  {
    id: 2,
    name: 'Running Shoes',
    price: 129.99,
    image: '👟',
    category: 'Sports',
    description: 'Lightweight running shoes for daily training.',
  },
  {
    id: 3,
    name: 'Coffee Maker',
    price: 49.99,
    image: '☕',
    category: 'Home',
    description: 'Programmable coffee maker with thermal carafe.',
  },
  {
    id: 4,
    name: 'Backpack',
    price: 59.99,
    image: '🎒',
    category: 'Accessories',
    description: 'Water-resistant laptop backpack.',
  },
  {
    id: 5,
    name: 'Smartwatch',
    price: 199.99,
    image: '⌚',
    category: 'Electronics',
    description: 'Fitness tracking smartwatch.',
  },
  {
    id: 6,
    name: 'Desk Lamp',
    price: 34.99,
    image: '💡',
    category: 'Home',
    description: 'LED desk lamp with adjustable brightness.',
  },
  {
    id: 7,
    name: 'Yoga Mat',
    price: 24.99,
    image: '🧘',
    category: 'Sports',
    description: 'Non-slip exercise yoga mat.',
  },
  {
    id: 8,
    name: 'Sunglasses',
    price: 89.99,
    image: '🕶️',
    category: 'Accessories',
    description: 'Polarized UV protection sunglasses.',
  },
];
