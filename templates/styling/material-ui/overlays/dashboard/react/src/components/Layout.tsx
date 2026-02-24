import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { Sidebar } from './Sidebar';

export function Layout() {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <Box component="main" sx={{ flex: 1, bgcolor: '#f9fafb', p: 3, overflow: 'auto' }}>
        <Outlet />
      </Box>
    </Box>
  );
}
