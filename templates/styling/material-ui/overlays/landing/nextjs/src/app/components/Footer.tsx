'use client';

import { Box, Container, Typography, Grid2, Link, Divider } from '@mui/material';

export function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: '#111827', color: '#d1d5db', pt: 8, pb: 4 }}>
      <Container maxWidth="lg">
        <Grid2 container spacing={4}>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <Typography variant="h5" sx={{ color: '#ffffff', fontWeight: 700, mb: 1 }}>
              {'{{projectName}}'}
            </Typography>
            <Typography variant="body2">
              Building the future of the web.
            </Typography>
          </Grid2>
          <Grid2 size={{ xs: 6, md: 2 }}>
            <Typography variant="subtitle2" sx={{ color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.05em', mb: 1 }}>
              Product
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
              <Link href="#features" underline="hover" sx={{ color: '#9ca3af', fontSize: '0.9rem', '&:hover': { color: '#ffffff' } }}>Features</Link>
              <Link href="#cta" underline="hover" sx={{ color: '#9ca3af', fontSize: '0.9rem', '&:hover': { color: '#ffffff' } }}>Pricing</Link>
            </Box>
          </Grid2>
          <Grid2 size={{ xs: 6, md: 2 }}>
            <Typography variant="subtitle2" sx={{ color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.05em', mb: 1 }}>
              Company
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
              <Link href="#" underline="hover" sx={{ color: '#9ca3af', fontSize: '0.9rem', '&:hover': { color: '#ffffff' } }}>About</Link>
              <Link href="#" underline="hover" sx={{ color: '#9ca3af', fontSize: '0.9rem', '&:hover': { color: '#ffffff' } }}>Blog</Link>
            </Box>
          </Grid2>
        </Grid2>
        <Divider sx={{ borderColor: '#374151', my: 4 }} />
        <Typography variant="body2" align="center" sx={{ color: '#6b7280' }}>
          &copy; 2025 {'{{projectName}}'}. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
