import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Navbar from './Navbar';
import PortfolioFooter from './PortfolioFooter';

function Layout() {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Navbar />
      <Box as="main" flex={1}>
        <Outlet />
      </Box>
      <PortfolioFooter />
    </Box>
  );
}

export default Layout;
