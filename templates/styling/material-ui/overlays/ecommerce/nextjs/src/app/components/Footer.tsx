'use client';

import { Box, Container, Typography, Grid2, Link, Divider, Stack } from '@mui/material';

export function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: '#111827', color: '#d1d5db', pt: 6, pb: 3, mt: 8 }}>
      <Container maxWidth="lg">
        <Grid2 container spacing={4}>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" sx={{ color: '#ffffff', mb: 1 }}>
              {'{{projectName}}'}
            </Typography>
            <Typography variant="body2">
              Your one-stop shop for quality products at great prices.
            </Typography>
          </Grid2>
          <Grid2 size={{ xs: 6, md: 2 }}>
            <Typography variant="subtitle2" sx={{ color: '#ffffff', textTransform: 'uppercase', mb: 1 }}>Shop</Typography>
            <Stack spacing={0.5}>
              <Typography variant="body2" sx={{ color: '#9ca3af', cursor: 'pointer', '&:hover': { color: '#ffffff' } }}>New Arrivals</Typography>
              <Typography variant="body2" sx={{ color: '#9ca3af', cursor: 'pointer', '&:hover': { color: '#ffffff' } }}>Best Sellers</Typography>
              <Typography variant="body2" sx={{ color: '#9ca3af', cursor: 'pointer', '&:hover': { color: '#ffffff' } }}>Sale Items</Typography>
              <Typography variant="body2" sx={{ color: '#9ca3af', cursor: 'pointer', '&:hover': { color: '#ffffff' } }}>Gift Cards</Typography>
            </Stack>
          </Grid2>
          <Grid2 size={{ xs: 6, md: 2 }}>
            <Typography variant="subtitle2" sx={{ color: '#ffffff', textTransform: 'uppercase', mb: 1 }}>Support</Typography>
            <Stack spacing={0.5}>
              <Typography variant="body2" sx={{ color: '#9ca3af', cursor: 'pointer', '&:hover': { color: '#ffffff' } }}>Help Center</Typography>
              <Typography variant="body2" sx={{ color: '#9ca3af', cursor: 'pointer', '&:hover': { color: '#ffffff' } }}>Shipping Info</Typography>
              <Typography variant="body2" sx={{ color: '#9ca3af', cursor: 'pointer', '&:hover': { color: '#ffffff' } }}>Returns</Typography>
              <Typography variant="body2" sx={{ color: '#9ca3af', cursor: 'pointer', '&:hover': { color: '#ffffff' } }}>Contact Us</Typography>
            </Stack>
          </Grid2>
          <Grid2 size={{ xs: 6, md: 2 }}>
            <Typography variant="subtitle2" sx={{ color: '#ffffff', textTransform: 'uppercase', mb: 1 }}>Follow Us</Typography>
            <Stack direction="row" spacing={1} sx={{ fontSize: '1.5rem' }}>
              <span>📘</span><span>🐦</span><span>📷</span><span>📌</span>
            </Stack>
          </Grid2>
        </Grid2>
        <Divider sx={{ borderColor: '#374151', my: 3 }} />
        <Typography variant="body2" align="center" sx={{ color: '#6b7280' }}>
          &copy; 2025 {'{{projectName}}'}. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
