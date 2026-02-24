'use client';

import Link from 'next/link';
import { useCart } from './CartProvider';
import styles from './Header.module.css';

export function Header() {
  const { totalItems } = useCart();

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>🛍️</span>
          <span>{'{{projectName}}'}</span>
        </Link>
        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/cart" className={styles.cartLink}>
            <span>🛒</span>
            <span>Cart</span>
            {totalItems > 0 && <span className={styles.cartBadge}>{totalItems}</span>}
          </Link>
        </nav>
      </div>
    </header>
  );
}
