'use client';

import Link from 'next/link';
import { useCart } from './CartProvider';

export function Header() {
  const { totalItems } = useCart();

  return (
    <header className="header">
      <div className="header-container">
        <Link href="/" className="logo">
          <span className="logo-icon">🛍️</span>
          <span>{'{{projectName}}'}</span>
        </Link>
        <nav className="nav">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/cart" className="nav-link cart-link">
            <span>🛒</span>
            <span>Cart</span>
            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </Link>
        </nav>
      </div>
    </header>
  );
}
