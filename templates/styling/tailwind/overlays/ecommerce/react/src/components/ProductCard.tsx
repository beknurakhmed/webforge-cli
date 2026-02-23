import { Link } from 'react-router-dom';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-200 bg-white flex flex-col hover:shadow-lg hover:-translate-y-0.5">
      <Link to={`/product/${product.id}`} className="no-underline text-inherit">
        <div className="text-6xl text-center py-8 bg-gray-50">{product.image}</div>
        <div className="px-5 pt-4 pb-2">
          <span className="text-xs text-indigo-600 font-semibold uppercase tracking-wider">
            {product.category}
          </span>
          <h3 className="text-lg mt-1 mb-1 text-gray-900">{product.name}</h3>
          <p className="text-gray-500 text-sm">{product.description}</p>
        </div>
      </Link>
      <div className="flex justify-between items-center px-5 py-4 mt-auto">
        <span className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
        <button
          className="bg-indigo-600 text-white border-none px-4 py-2 rounded-md cursor-pointer font-medium text-sm hover:bg-indigo-700 transition-colors"
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
