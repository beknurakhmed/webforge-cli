import { Box, Typography, Link, Stack, Divider, Container } from '@mui/material';

function PortfolioFooter() {
  return (
    <Box component="footer" sx={{ bgcolor: '#111827', color: '#d1d5db', py: 3, mt: 'auto' }}>
      <Container maxWidth="lg">
        <Stack direction="row" spacing={3} justifyContent="center" sx={{ mb: 2 }}>
          <Link href="#" target="_blank" rel="noopener noreferrer" underline="hover" sx={{ color: '#9ca3af', '&:hover': { color: '#ffffff' } }}>
            GitHub
          </Link>
          <Link href="#" underline="hover" sx={{ color: '#9ca3af', '&:hover': { color: '#ffffff' } }}>
            LinkedIn
          </Link>
          <Link href="#" underline="hover" sx={{ color: '#9ca3af', '&:hover': { color: '#ffffff' } }}>
            Twitter
          </Link>
        </Stack>
        <Typography variant="body2" align="center" sx={{ color: '#6b7280' }}>
          &copy; 2025 {'{{projectName}}'}. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default PortfolioFooter;
