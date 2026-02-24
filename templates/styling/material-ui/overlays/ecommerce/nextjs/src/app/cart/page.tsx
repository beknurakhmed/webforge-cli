'use client';

import Link from 'next/link';
import {
  Box, Typography, Button, Container, Grid2, Card, CardContent, Divider, IconButton, Stack,
} from '@mui/material';
import { useCart } from '../components/CartProvider';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <Container maxWidth="lg" sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h3" sx={{ mb: 2 }}>🛒</Typography>
        <Typography variant="h5" sx={{ fontWeight: 700, color: '#111827', mb: 1 }}>Your cart is empty</Typography>
        <Typography variant="body1" sx={{ color: '#6b7280', mb: 3 }}>Looks like you have not added any items to your cart yet.</Typography>
        <Button
          component={Link}
          href="/"
          variant="contained"
          sx={{ bgcolor: '#4f46e5', textTransform: 'none', fontWeight: 600, '&:hover': { bgcolor: '#4338ca' } }}
        >
          Continue Shopping
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 700, color: '#111827' }}>Shopping Cart</Typography>
        <Button
          variant="outlined"
          onClick={clearCart}
          sx={{ textTransform: 'none', color: '#374151', borderColor: '#d1d5db' }}
        >
          Clear Cart
        </Button>
      </Box>
      <Grid2 container spacing={3} alignItems="flex-start">
        <Grid2 size={{ xs: 12, md: 8 }}>
          <Stack spacing={1.5}>
            {items.map((item) => (
              <Card key={item.id} sx={{ borderRadius: 3 }}>
                <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box sx={{ fontSize: '2.5rem', width: 70, height: 70, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#f3f4f6', borderRadius: 2 }}>
                    {item.image}
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#111827' }}>{item.name}</Typography>
                    <Typography variant="caption" sx={{ color: '#6b7280' }}>{item.category}</Typography>
                    <Typography variant="body2" sx={{ color: '#4f46e5', fontWeight: 600 }}>${item.price.toFixed(2)}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', border: '1px solid #e5e7eb', borderRadius: 2, overflow: 'hidden' }}>
                    <Button size="small" onClick={() => updateQuantity(item.id, item.quantity - 1)} sx={{ minWidth: 32 }}>−</Button>
                    <Typography sx={{ width: 36, textAlign: 'center', fontWeight: 600 }}>{item.quantity}</Typography>
                    <Button size="small" onClick={() => updateQuantity(item.id, item.quantity + 1)} sx={{ minWidth: 32 }}>+</Button>
                  </Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#111827', minWidth: 70, textAlign: 'right' }}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </Typography>
                  <Button size="small" onClick={() => removeFromCart(item.id)} sx={{ minWidth: 'auto', fontSize: '1.2rem' }}>
                    🗑️
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Stack>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <Card sx={{ borderRadius: 3, position: 'sticky', top: 80 }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, color: '#111827', mb: 2 }}>Order Summary</Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 0.5, color: '#374151' }}>
                <Typography variant="body2">Subtotal</Typography>
                <Typography variant="body2">${totalPrice.toFixed(2)}</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 0.5, color: '#374151' }}>
                <Typography variant="body2">Shipping</Typography>
                <Typography variant="body2">{totalPrice > 50 ? 'Free' : '$9.99'}</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 0.5, color: '#374151' }}>
                <Typography variant="body2">Tax</Typography>
                <Typography variant="body2">${(totalPrice * 0.08).toFixed(2)}</Typography>
              </Box>
              <Divider sx={{ my: 1.5 }} />
              <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 0.5 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Total</Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  ${(totalPrice + (totalPrice > 50 ? 0 : 9.99) + totalPrice * 0.08).toFixed(2)}
                </Typography>
              </Box>
              <Button
                variant="contained"
                fullWidth
                sx={{ mt: 2, bgcolor: '#4f46e5', textTransform: 'none', fontWeight: 600, py: 1.5, borderRadius: 2, '&:hover': { bgcolor: '#4338ca' } }}
              >
                Proceed to Checkout
              </Button>
              <Button
                component={Link}
                href="/"
                fullWidth
                sx={{ mt: 1, color: '#4f46e5', textTransform: 'none', fontWeight: 500 }}
              >
                &larr; Continue Shopping
              </Button>
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>
    </Container>
  );
}
