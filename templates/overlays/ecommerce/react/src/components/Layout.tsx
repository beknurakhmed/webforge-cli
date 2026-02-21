import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { CartItem } from '../data/products';

interface LayoutProps {
  cart: CartItem[];
}

export function Layout({ cart }: LayoutProps) {
  return (
    <div className="ecommerce">
      <Header cart={cart} />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
