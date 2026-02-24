'use client';

import Link from 'next/link';
import { AppBar, Toolbar, Typography, Badge, Button, Box } from '@mui/material';
import { useCart } from './CartProvider';

export function Header() {
  const { totalItems } = useCart();

  return (
    <AppBar position="sticky" color="default" elevation={0} sx={{ borderBottom: '1px solid #e5e7eb', bgcolor: '#ffffff' }}>
      <Toolbar sx={{ maxWidth: 1200, mx: 'auto', width: '100%' }}>
        <Typography
          variant="h6"
          component={Link}
          href="/"
          sx={{ color: '#4f46e5', fontWeight: 700, textDecoration: 'none', flexGrow: 1 }}
        >
          {'{{projectName}}'}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          <Button component={Link} href="/" sx={{ color: '#374151', fontWeight: 500, textTransform: 'none' }}>
            Home
          </Button>
          <Button component={Link} href="/cart" sx={{ color: '#374151', fontWeight: 500, textTransform: 'none' }}>
            <Badge badgeContent={totalItems} color="primary" sx={{ '& .MuiBadge-badge': { bgcolor: '#4f46e5' } }}>
              Cart
            </Badge>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
