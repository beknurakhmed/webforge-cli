import { Outlet } from 'react-router-dom';
import { Layout as AntLayout } from 'antd';
import { Header } from './Header';
import { Footer } from './Footer';
import { CartItem } from '../data/products';

interface LayoutProps {
  cart: CartItem[];
}

export function Layout({ cart }: LayoutProps) {
  return (
    <AntLayout style={{ minHeight: '100vh', background: '#fff' }}>
      <Header cart={cart} />
      <AntLayout.Content style={{ maxWidth: 1200, margin: '0 auto', padding: '24px 32px', width: '100%' }}>
        <Outlet />
      </AntLayout.Content>
      <Footer />
    </AntLayout>
  );
}
