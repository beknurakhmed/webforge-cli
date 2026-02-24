import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from './Header';
import { Footer } from './Footer';
import { CartItem } from '../data/products';

const EcommerceWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  width: 100%;
`;

interface LayoutProps {
  cart: CartItem[];
}

export function Layout({ cart }: LayoutProps) {
  return (
    <EcommerceWrapper>
      <Header cart={cart} />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </EcommerceWrapper>
  );
}
