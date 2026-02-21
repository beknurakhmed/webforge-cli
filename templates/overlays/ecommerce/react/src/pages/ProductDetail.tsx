import { useParams, Link } from 'react-router-dom';
import { products, Product } from '../data/products';

interface ProductDetailProps {
  addToCart: (product: Product) => void;
}

export function ProductDetail({ addToCart }: ProductDetailProps) {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="not-found">
        <h2>Product Not Found</h2>
        <Link to="/" className="back-link">Back to Shop</Link>
      </div>
    );
  }

  return (
    <div className="product-detail">
      <Link to="/" className="back-link">← Back to Shop</Link>
      <div className="detail-content">
        <div className="detail-image">{product.image}</div>
        <div className="detail-info">
          <span className="product-category">{product.category}</span>
          <h1>{product.name}</h1>
          <p className="detail-description">{product.description}</p>
          <span className="detail-price">${product.price.toFixed(2)}</span>
          <button className="add-to-cart detail-btn" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
