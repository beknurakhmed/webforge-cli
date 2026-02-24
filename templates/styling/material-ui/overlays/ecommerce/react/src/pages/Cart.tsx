import { Link } from 'react-router-dom';
import {
  Box, Typography, Button, Grid, Card, CardContent, Divider, IconButton, Stack,
} from '@mui/material';
import { CartItem } from '../data/products';

interface CartProps {
  cart: CartItem[];
  removeFromCart: (id: number) => void;
}

export function Cart({ cart, removeFromCart }: CartProps) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', py: 6 }}>
        <Typography variant="h5" sx={{ fontWeight: 700, color: '#111827', mb: 2 }}>
          Shopping Cart
        </Typography>
        <Typography variant="h4" sx={{ mb: 1 }}>
          Your cart is empty
        </Typography>
        <Button
          component={Link}
          to="/"
          sx={{ color: '#4f46e5', textTransform: 'none', fontWeight: 500 }}
        >
          Continue Shopping
        </Button>
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, color: '#111827', mb: 3 }}>
        Shopping Cart ({cart.length} items)
      </Typography>
      <Grid2 container spacing={3}>
        <Grid2 size={{ xs: 12, md: 8 }}>
          <Stack spacing={0} divider={<Divider />}>
            {cart.map((item) => (
              <Box key={item.id} sx={{ display: 'flex', alignItems: 'center', gap: 2, py: 2 }}>
                <Typography variant="h4" sx={{ minWidth: 60, textAlign: 'center' }}>
                  {item.image}
                </Typography>
                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="subtitle1"
                    component={Link}
                    to={`/product/${item.id}`}
                    sx={{ fontWeight: 600, color: '#111827', textDecoration: 'none', '&:hover': { color: '#4f46e5' } }}
                  >
                    {item.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#6b7280' }}>
                    Qty: {item.quantity}
                  </Typography>
                </Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#111827', minWidth: 70, textAlign: 'right' }}>
                  ${(item.price * item.quantity).toFixed(2)}
                </Typography>
                <Button
                  size="small"
                  onClick={() => removeFromCart(item.id)}
                  sx={{ color: '#ef4444', textTransform: 'none', fontWeight: 500, minWidth: 'auto' }}
                >
                  Remove
                </Button>
              </Box>
            ))}
          </Stack>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <Card sx={{ bgcolor: '#f9fafb', borderRadius: 3 }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ color: '#111827', mb: 2 }}>
                Order Summary
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 0.5, color: '#374151' }}>
                <Typography variant="body2">Subtotal</Typography>
                <Typography variant="body2">${total.toFixed(2)}</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 0.5, color: '#374151' }}>
                <Typography variant="body2">Shipping</Typography>
                <Typography variant="body2">Free</Typography>
              </Box>
              <Divider sx={{ my: 1.5 }} />
              <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 0.5 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Total</Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>${total.toFixed(2)}</Typography>
              </Box>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  mt: 2,
                  bgcolor: '#4f46e5',
                  textTransform: 'none',
                  fontWeight: 600,
                  py: 1.5,
                  borderRadius: 2,
                  '&:hover': { bgcolor: '#4338ca' },
                }}
              >
                Checkout
              </Button>
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>
    </Box>
  );
}
