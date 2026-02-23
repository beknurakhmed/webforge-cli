'use client';

import Link from 'next/link';
import { useCart } from './CartProvider';

export function Header() {
  const { totalItems } = useCart();

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-gray-900">
          <span className="text-2xl">🛍️</span>
          <span>{'{{projectName}}'}</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/" className="text-gray-700 font-medium hover:text-indigo-600 transition-colors">Home</Link>
          <Link href="/cart" className="flex items-center gap-1.5 relative text-gray-700 font-medium hover:text-indigo-600 transition-colors">
            <span>🛒</span>
            <span>Cart</span>
            {totalItems > 0 && <span className="absolute -top-2 -right-2.5 bg-indigo-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">{totalItems}</span>}
          </Link>
        </nav>
      </div>
    </header>
  );
}
