import Link from 'next/link';
import { Product } from './CartProvider';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`} className={styles.productCard}>
      <div className={styles.productImage}>{product.image}</div>
      <div className={styles.productInfo}>
        <span className={styles.productCategory}>{product.category}</span>
        <h3 className={styles.productName}>{product.name}</h3>
        <div className={styles.productRating}>
          {'⭐'.repeat(Math.floor(product.rating))}
          <span className={styles.ratingText}>{product.rating}</span>
        </div>
        <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
      </div>
    </Link>
  );
}
