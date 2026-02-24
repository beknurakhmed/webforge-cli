import { Outlet } from 'react-router-dom';
import { Box, Container } from '@chakra-ui/react';
import BlogHeader from './BlogHeader';
import BlogFooter from './BlogFooter';

function Layout() {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <BlogHeader />
      <Container as="main" flex={1} maxW="1100px" py={8} px={8} w="100%">
        <Outlet />
      </Container>
      <BlogFooter />
    </Box>
  );
}

export default Layout;
