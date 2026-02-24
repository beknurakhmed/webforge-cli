import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { CartItem } from '../data/products';
import styles from './Layout.module.css';

interface LayoutProps {
  cart: CartItem[];
}

export function Layout({ cart }: LayoutProps) {
  return (
    <div className={styles.ecommerce}>
      <Header cart={cart} />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
