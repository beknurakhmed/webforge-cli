import { Box, Container, Typography, Grid2, Link, Divider } from '@mui/material';

export function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: '#111827', color: '#d1d5db', pt: 6, pb: 3, mt: 'auto' }}>
      <Container maxWidth="lg">
        <Grid2 container spacing={4}>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" sx={{ color: '#ffffff', mb: 1 }}>
              {'{{projectName}}'}
            </Typography>
            <Typography variant="body2">
              Your one-stop shop for quality products.
            </Typography>
          </Grid2>
          <Grid2 size={{ xs: 6, md: 2 }}>
            <Typography variant="subtitle2" sx={{ color: '#ffffff', textTransform: 'uppercase', mb: 1 }}>
              Shop
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
              <Link href="#" underline="hover" sx={{ color: '#9ca3af', fontSize: '0.9rem', '&:hover': { color: '#ffffff' } }}>All Products</Link>
              <Link href="#" underline="hover" sx={{ color: '#9ca3af', fontSize: '0.9rem', '&:hover': { color: '#ffffff' } }}>New Arrivals</Link>
              <Link href="#" underline="hover" sx={{ color: '#9ca3af', fontSize: '0.9rem', '&:hover': { color: '#ffffff' } }}>Sale</Link>
            </Box>
          </Grid2>
          <Grid2 size={{ xs: 6, md: 2 }}>
            <Typography variant="subtitle2" sx={{ color: '#ffffff', textTransform: 'uppercase', mb: 1 }}>
              Support
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
              <Link href="#" underline="hover" sx={{ color: '#9ca3af', fontSize: '0.9rem', '&:hover': { color: '#ffffff' } }}>FAQ</Link>
              <Link href="#" underline="hover" sx={{ color: '#9ca3af', fontSize: '0.9rem', '&:hover': { color: '#ffffff' } }}>Shipping</Link>
              <Link href="#" underline="hover" sx={{ color: '#9ca3af', fontSize: '0.9rem', '&:hover': { color: '#ffffff' } }}>Returns</Link>
            </Box>
          </Grid2>
        </Grid2>
        <Divider sx={{ borderColor: '#374151', my: 3 }} />
        <Typography variant="body2" align="center" sx={{ color: '#6b7280' }}>
          &copy; {new Date().getFullYear()} {'{{projectName}}'}. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
