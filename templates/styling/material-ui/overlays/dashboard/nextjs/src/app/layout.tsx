import './globals.css';
import { Sidebar } from './components/Sidebar';
import { Box } from '@mui/material';

export const metadata = {
  title: '{{projectName}} - Dashboard',
  description: 'Admin dashboard for {{projectName}}',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Box sx={{ display: 'flex', minHeight: '100vh' }}>
          <Sidebar />
          <Box component="main" sx={{ flex: 1, bgcolor: '#f9fafb', p: 3, overflow: 'auto' }}>
            {children}
          </Box>
        </Box>
      </body>
    </html>
  );
}
