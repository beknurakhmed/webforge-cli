import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Badge, Button, Box } from '@mui/material';
import { CartItem } from '../data/products';

interface HeaderProps {
  cart: CartItem[];
}

export function Header({ cart }: HeaderProps) {
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <AppBar position="sticky" color="default" elevation={0} sx={{ borderBottom: '1px solid #e5e7eb', bgcolor: '#ffffff' }}>
      <Toolbar sx={{ maxWidth: 1200, mx: 'auto', width: '100%' }}>
        <Typography
          variant="h6"
          component={NavLink}
          to="/"
          sx={{ color: '#4f46e5', fontWeight: 700, textDecoration: 'none', flexGrow: 1 }}
        >
          {'{{projectName}}'}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          <Button
            component={NavLink}
            to="/"
            sx={{
              color: '#6b7280',
              fontWeight: 500,
              textTransform: 'none',
              '&.active': { color: '#4f46e5' },
            }}
          >
            Home
          </Button>
          <Button
            component={NavLink}
            to="/cart"
            sx={{
              color: '#6b7280',
              fontWeight: 500,
              textTransform: 'none',
              '&.active': { color: '#4f46e5' },
            }}
          >
            <Badge badgeContent={cartCount} color="primary" sx={{ '& .MuiBadge-badge': { bgcolor: '#4f46e5' } }}>
              Cart
            </Badge>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
