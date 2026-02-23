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
      <div className="text-center py-16">
        <h2 className="text-gray-700 mb-4">Product Not Found</h2>
        <Link to="/" className="text-indigo-600 no-underline font-medium hover:underline">
          Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-[900px] mx-auto">
      <Link to="/" className="text-indigo-600 no-underline font-medium inline-block mb-6 hover:underline">
        ← Back to Shop
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
        <div className="text-8xl text-center py-12 bg-gray-50 rounded-xl">{product.image}</div>
        <div>
          <span className="text-xs text-indigo-600 font-semibold uppercase tracking-wider">
            {product.category}
          </span>
          <h1 className="text-3xl font-bold text-gray-900 mt-1 mb-4">{product.name}</h1>
          <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>
          <span className="text-3xl font-bold text-gray-900 block mb-6">
            ${product.price.toFixed(2)}
          </span>
          <button
            className="bg-indigo-600 text-white border-none px-8 py-3 rounded-lg text-base cursor-pointer font-medium hover:bg-indigo-700 transition-colors"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
