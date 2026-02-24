import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import BlogHeader from './BlogHeader';
import BlogFooter from './BlogFooter';

function Layout() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <BlogHeader />
      <Container maxWidth="lg" sx={{ flex: 1, py: 4 }}>
        <Outlet />
      </Container>
      <BlogFooter />
    </Box>
  );
}

export default Layout;
