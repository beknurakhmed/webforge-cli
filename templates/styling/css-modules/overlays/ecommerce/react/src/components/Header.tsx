import { NavLink } from 'react-router-dom';
import { CartItem } from '../data/products';
import styles from './Header.module.css';

interface HeaderProps {
  cart: CartItem[];
}

export function Header({ cart }: HeaderProps) {
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className={styles.storeHeader}>
      <div className={styles.headerContent}>
        <NavLink to="/" className={styles.storeLogo}>{'{{projectName}}'}</NavLink>
        <nav className={styles.storeNav}>
          <NavLink to="/" className={({ isActive }) => isActive ? styles.navLinkActive : styles.navLink} end>
            Home
          </NavLink>
          <NavLink to="/cart" className={({ isActive }) => isActive ? styles.navLinkActive : styles.navLink}>
            Cart
            {cartCount > 0 && <span className={styles.cartBadge}>{cartCount}</span>}
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
