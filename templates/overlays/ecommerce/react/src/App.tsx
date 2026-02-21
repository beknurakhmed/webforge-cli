import { useState } from 'react';
import { Header } from './components/Header';
import { ProductGrid } from './components/ProductGrid';
import { Cart } from './components/Cart';
import { Footer } from './components/Footer';
import './App.css';

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

const products: Product[] = [
  { id: 1, name: 'Wireless Headphones', price: 79.99, image: '🎧', category: 'Electronics', description: 'Premium sound quality with noise cancellation.' },
  { id: 2, name: 'Smart Watch', price: 199.99, image: '⌚', category: 'Electronics', description: 'Track your fitness and stay connected.' },
  { id: 3, name: 'Laptop Stand', price: 49.99, image: '💻', category: 'Accessories', description: 'Ergonomic aluminum stand for better posture.' },
  { id: 4, name: 'Mechanical Keyboard', price: 129.99, image: '⌨️', category: 'Electronics', description: 'Tactile switches with RGB backlighting.' },
  { id: 5, name: 'USB-C Hub', price: 39.99, image: '🔌', category: 'Accessories', description: '7-in-1 hub with 4K HDMI output.' },
  { id: 6, name: 'Webcam HD', price: 69.99, image: '📷', category: 'Electronics', description: '1080p webcam with built-in microphone.' },
  { id: 7, name: 'Desk Lamp', price: 34.99, image: '💡', category: 'Home', description: 'LED desk lamp with adjustable brightness.' },
  { id: 8, name: 'Mouse Pad XL', price: 19.99, image: '🖱️', category: 'Accessories', description: 'Extended mouse pad with stitched edges.' },
];

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="ecommerce">
      <Header cartCount={cartCount} onCartClick={() => setIsCartOpen(!isCartOpen)} />
      <main className="main">
        <ProductGrid products={products} onAddToCart={addToCart} />
      </main>
      {isCartOpen && (
        <Cart items={cartItems} onRemove={removeFromCart} onClose={() => setIsCartOpen(false)} />
      )}
      <Footer />
    </div>
  );
}

export default App;
