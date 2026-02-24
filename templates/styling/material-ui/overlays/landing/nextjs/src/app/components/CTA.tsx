'use client';

import { Box, Container, Typography, Button } from '@mui/material';

export function CTA() {
  return (
    <Box id="cta" sx={{ bgcolor: '#f9fafb', py: 10 }}>
      <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
        <Typography variant="h3" sx={{ fontWeight: 700, color: '#111827', mb: 2 }}>
          Ready to Get Started?
        </Typography>
        <Typography variant="subtitle1" sx={{ color: '#6b7280', mb: 4 }}>
          Join thousands of developers building amazing products.
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            bgcolor: '#4f46e5',
            px: 5,
            py: 1.5,
            textTransform: 'none',
            fontWeight: 600,
            fontSize: '1.1rem',
            borderRadius: 2,
            '&:hover': { bgcolor: '#4338ca' },
          }}
        >
          Start Free Trial
        </Button>
        <Typography variant="body2" sx={{ color: '#9ca3af', mt: 1.5 }}>
          No credit card required
        </Typography>
      </Container>
    </Box>
  );
}
