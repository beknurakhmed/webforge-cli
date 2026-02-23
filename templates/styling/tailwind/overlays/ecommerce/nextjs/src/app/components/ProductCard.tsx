import Link from 'next/link';
import { Product } from './CartProvider';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`} className="block bg-white rounded-xl overflow-hidden shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
      <div className="h-48 flex items-center justify-center text-6xl bg-gray-100">{product.image}</div>
      <div className="p-4">
        <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wide">{product.category}</span>
        <h3 className="text-base font-semibold text-gray-900 mt-1">{product.name}</h3>
        <div className="flex items-center gap-1.5 text-sm mb-2">
          {'⭐'.repeat(Math.floor(product.rating))}
          <span className="text-gray-500">{product.rating}</span>
        </div>
        <p className="text-xl font-bold text-indigo-600">${product.price.toFixed(2)}</p>
      </div>
    </Link>
  );
}
