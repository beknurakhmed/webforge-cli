import { Link } from 'react-router-dom';
import { Product } from '../data/products';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className={styles.productCard}>
      <Link to={`/product/${product.id}`} className={styles.productLink}>
        <div className={styles.productImage}>{product.image}</div>
        <div className={styles.productInfo}>
          <span className={styles.productCategory}>{product.category}</span>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </div>
      </Link>
      <div className={styles.productActions}>
        <span className={styles.productPrice}>${product.price.toFixed(2)}</span>
        <button className={styles.addToCart} onClick={() => onAddToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
