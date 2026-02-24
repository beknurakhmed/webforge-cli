import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import { Header } from './Header';
import { Footer } from './Footer';
import { CartItem } from '../data/products';

interface LayoutProps {
  cart: CartItem[];
}

export function Layout({ cart }: LayoutProps) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header cart={cart} />
      <Container maxWidth="lg" sx={{ flex: 1, py: 4 }}>
        <Outlet />
      </Container>
      <Footer />
    </Box>
  );
}
