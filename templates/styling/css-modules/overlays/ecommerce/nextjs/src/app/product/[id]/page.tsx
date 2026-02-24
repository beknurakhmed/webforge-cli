'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useCart, Product } from '../../components/CartProvider';
import styles from './page.module.css';

const products: Product[] = [
  { id: 1, name: 'Wireless Headphones', price: 79.99, image: '🎧', category: 'Electronics', rating: 4.5, description: 'Premium wireless headphones with noise cancellation and 30-hour battery life. Crystal-clear sound quality for music lovers.' },
  { id: 2, name: 'Smart Watch', price: 199.99, image: '⌚', category: 'Electronics', rating: 4.7, description: 'Feature-packed smartwatch with health monitoring, GPS tracking, and a vibrant AMOLED display.' },
  { id: 3, name: 'Running Shoes', price: 129.99, image: '👟', category: 'Sports', rating: 4.3, description: 'Lightweight running shoes with responsive cushioning and breathable mesh upper for maximum comfort.' },
  { id: 4, name: 'Backpack', price: 59.99, image: '🎒', category: 'Accessories', rating: 4.6, description: 'Durable travel backpack with laptop compartment, water-resistant fabric, and ergonomic design.' },
  { id: 5, name: 'Coffee Maker', price: 89.99, image: '☕', category: 'Home', rating: 4.4, description: 'Programmable coffee maker with thermal carafe, brew-strength control, and auto-shutoff feature.' },
  { id: 6, name: 'Desk Lamp', price: 45.99, image: '💡', category: 'Home', rating: 4.2, description: 'Adjustable LED desk lamp with multiple brightness levels, color temperatures, and USB charging port.' },
  { id: 7, name: 'Yoga Mat', price: 34.99, image: '🧘', category: 'Sports', rating: 4.8, description: 'Non-slip yoga mat with alignment marks, eco-friendly material, and carrying strap included.' },
  { id: 8, name: 'Sunglasses', price: 149.99, image: '🕶️', category: 'Accessories', rating: 4.1, description: 'Polarized sunglasses with UV400 protection, lightweight titanium frame, and scratch-resistant lenses.' },
];

export default function ProductDetailPage() {
  const params = useParams();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === Number(params.id));

  if (!product) {
    return (
      <div className={styles.notFound}>
        <h2>Product Not Found</h2>
        <p>The product you are looking for does not exist.</p>
        <Link href="/" className={styles.btnPrimary}>Back to Shop</Link>
      </div>
    );
  }

  return (
    <div className={styles.productDetail}>
      <Link href="/" className={styles.backLink}>Back to Shop</Link>
      <div className={styles.productDetailGrid}>
        <div className={styles.productDetailImage}>{product.image}</div>
        <div className={styles.productDetailInfo}>
          <span className={styles.productCategory}>{product.category}</span>
          <h1>{product.name}</h1>
          <div className={styles.productRating}>
            {'⭐'.repeat(Math.floor(product.rating))}
            <span className={styles.ratingText}>{product.rating} / 5.0</span>
          </div>
          <p className={styles.productDetailPrice}>${product.price.toFixed(2)}</p>
          <p className={styles.productDescription}>{product.description}</p>
          <button className={styles.btnPrimary} onClick={() => addToCart(product)}>
            🛒 Add to Cart
          </button>
          <div className={styles.productFeatures}>
            <h3>Features</h3>
            <ul>
              <li>Free shipping on orders over $50</li>
              <li>30-day return policy</li>
              <li>1-year warranty</li>
              <li>Secure checkout</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
