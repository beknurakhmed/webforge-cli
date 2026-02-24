import { Outlet } from 'react-router-dom';
import { Box, Container } from '@chakra-ui/react';
import { Header } from './Header';
import { Footer } from './Footer';
import { CartItem } from '../data/products';

interface LayoutProps {
  cart: CartItem[];
}

export function Layout({ cart }: LayoutProps) {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Header cart={cart} />
      <Container as="main" flex={1} maxW="1200px" py={8} px={8} w="100%">
        <Outlet />
      </Container>
      <Footer />
    </Box>
  );
}
