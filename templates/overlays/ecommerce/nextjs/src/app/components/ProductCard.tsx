import Link from 'next/link';
import { Product } from './CartProvider';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`} className="product-card">
      <div className="product-image">{product.image}</div>
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-name">{product.name}</h3>
        <div className="product-rating">
          {'⭐'.repeat(Math.floor(product.rating))}
          <span className="rating-text">{product.rating}</span>
        </div>
        <p className="product-price">${product.price.toFixed(2)}</p>
      </div>
    </Link>
  );
}
