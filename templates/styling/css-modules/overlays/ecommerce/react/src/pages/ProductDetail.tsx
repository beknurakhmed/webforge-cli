import { useParams, Link } from 'react-router-dom';
import { products, Product } from '../data/products';
import styles from './ProductDetail.module.css';

interface ProductDetailProps {
  addToCart: (product: Product) => void;
}

export function ProductDetail({ addToCart }: ProductDetailProps) {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className={styles.notFound}>
        <h2>Product Not Found</h2>
        <Link to="/" className={styles.backLink}>Back to Shop</Link>
      </div>
    );
  }

  return (
    <div className={styles.productDetail}>
      <Link to="/" className={styles.backLink}>Back to Shop</Link>
      <div className={styles.detailContent}>
        <div className={styles.detailImage}>{product.image}</div>
        <div className={styles.detailInfo}>
          <span className={styles.productCategory}>{product.category}</span>
          <h1>{product.name}</h1>
          <p className={styles.detailDescription}>{product.description}</p>
          <span className={styles.detailPrice}>${product.price.toFixed(2)}</span>
          <button className={styles.addToCart} onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
