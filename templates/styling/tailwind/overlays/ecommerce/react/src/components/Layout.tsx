import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { CartItem } from '../data/products';

interface LayoutProps {
  cart: CartItem[];
}

export function Layout({ cart }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header cart={cart} />
      <main className="flex-1 max-w-[1200px] mx-auto w-full px-4 sm:px-8 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
