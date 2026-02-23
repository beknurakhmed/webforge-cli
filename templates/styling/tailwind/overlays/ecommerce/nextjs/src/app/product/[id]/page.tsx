'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useCart, Product } from '../../components/CartProvider';

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
      <div className="text-center py-16 px-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Product Not Found</h2>
        <p className="text-gray-500 mb-4">The product you are looking for does not exist.</p>
        <Link href="/" className="inline-block px-6 py-2.5 rounded-lg font-semibold bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">Back to Shop</Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      <Link href="/" className="inline-block text-indigo-600 font-medium mb-6 hover:underline">← Back to Shop</Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="h-96 flex items-center justify-center text-8xl bg-white rounded-xl shadow-sm">{product.image}</div>
        <div>
          <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wide">{product.category}</span>
          <h1 className="text-2xl font-bold text-gray-900 mt-2">{product.name}</h1>
          <div className="flex items-center gap-1.5 text-sm my-2">
            {'⭐'.repeat(Math.floor(product.rating))}
            <span className="text-gray-500">{product.rating} / 5.0</span>
          </div>
          <p className="text-3xl font-bold text-indigo-600 my-4">${product.price.toFixed(2)}</p>
          <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>
          <button className="px-8 py-3.5 rounded-lg text-base font-semibold bg-indigo-600 text-white hover:bg-indigo-700 transition-colors cursor-pointer border-none" onClick={() => addToCart(product)}>
            🛒 Add to Cart
          </button>
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Features</h3>
            <ul className="space-y-1.5">
              <li className="text-gray-700">✅ Free shipping on orders over $50</li>
              <li className="text-gray-700">✅ 30-day return policy</li>
              <li className="text-gray-700">✅ 1-year warranty</li>
              <li className="text-gray-700">✅ Secure checkout</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
