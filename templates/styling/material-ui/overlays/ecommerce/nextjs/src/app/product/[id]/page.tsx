'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Box, Typography, Button, Chip, Grid2, Paper, Container, List, ListItem, ListItemText } from '@mui/material';
import { useCart, Product } from '../../components/CartProvider';

const products: Product[] = [
  { id: 1, name: 'Wireless Headphones', price: 79.99, image: '🎧', category: 'Electronics', rating: 4.5, description: 'Premium wireless headphones with noise cancellation and 30-hour battery life. Crystal-clear sound quality for music lovers.' },
  { id: 2, name: 'Smart Watch', price: 199.99, image: '⌚', category: 'Electronics', rating: 4.7, description: 'Feature-packed smartwatch with health monitoring, GPS tracking, and a vibrant AMOLED display.' },
  { id: 3, name: 'Running Shoes', price: 129.99, image: '👟', category: 'Sports', rating: 4.3, description: 'Lightweight running shoes with responsive cushioning and breathable mesh upper for maximum comfort.' },
  { id: 4, name: 'Backpack', price: 59.99, image: '🎒', category: 'Accessories', rating: 4.6, description: 'Durable travel backpack with laptop compartment, water-resistant fabric, and ergonomic design.' },
  { id: 5, name: 'Coffee Maker', price: 89.99, image: '☕', category: 'Home', rating: 4.4, description: 'Programmable coffee maker with thermal carafe, brew-strength control, and auto-shutoff feature.' },
  { id: 6, name: 'Desk Lamp', price: 45.99, image: '💡', category: 'Home', rating: 4.2, description: 'Adjustable LED desk lamp with multiple brightness levels, color temperatures, and USB charging port.' },
  { id: 7, name: 'Yoga Mat', price: 34.99, image: '🧘', category: 'Sports', rating: 4.8, description: 'Non-slip yoga mat with alignment marks, eco-friendly material, and carrying strap included.' },
  { id: 8, name: 'Sunglasses', price: 149.99, image: '🕶️', category: 'Accessories', rating: 4.1, description: 'Polarized sunglasses with UV400 protection, lightweight titanium frame, and scratch-resistant lenses.' },
];

export default function ProductDetailPage() {
  const params = useParams();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === Number(params.id));

  if (!product) {
    return (
      <Container maxWidth="lg" sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h5" sx={{ color: '#374151', mb: 2 }}>Product Not Found</Typography>
        <Typography variant="body1" sx={{ color: '#6b7280', mb: 2 }}>The product you are looking for does not exist.</Typography>
        <Button component={Link} href="/" variant="contained" sx={{ bgcolor: '#4f46e5', textTransform: 'none', '&:hover': { bgcolor: '#4338ca' } }}>
          Back to Shop
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Button component={Link} href="/" sx={{ color: '#4f46e5', textTransform: 'none', fontWeight: 500, mb: 3 }}>
        &larr; Back to Shop
      </Button>
      <Grid2 container spacing={4} alignItems="flex-start">
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Paper elevation={0} sx={{ height: 400, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '8rem', bgcolor: '#f9fafb', borderRadius: 3 }}>
            {product.image}
          </Paper>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Chip label={product.category} size="small" sx={{ bgcolor: '#eef2ff', color: '#4f46e5', fontWeight: 600, mb: 1 }} />
          <Typography variant="h4" sx={{ fontWeight: 700, color: '#111827', mb: 1 }}>
            {product.name}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 2 }}>
            {'⭐'.repeat(Math.floor(product.rating))}
            <Typography variant="body2" sx={{ color: '#6b7280' }}>{product.rating} / 5.0</Typography>
          </Box>
          <Typography variant="h4" sx={{ fontWeight: 700, color: '#4f46e5', mb: 2 }}>
            ${product.price.toFixed(2)}
          </Typography>
          <Typography variant="body1" sx={{ color: '#374151', lineHeight: 1.7, mb: 3 }}>
            {product.description}
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => addToCart(product)}
            sx={{ bgcolor: '#4f46e5', textTransform: 'none', fontWeight: 600, px: 4, py: 1.5, borderRadius: 2, '&:hover': { bgcolor: '#4338ca' } }}
          >
            Add to Cart
          </Button>
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, color: '#111827', mb: 1 }}>Features</Typography>
            <List disablePadding>
              {['Free shipping on orders over $50', '30-day return policy', '1-year warranty', 'Secure checkout'].map((feat) => (
                <ListItem key={feat} disableGutters sx={{ py: 0.25 }}>
                  <ListItemText primary={feat} primaryTypographyProps={{ variant: 'body2', color: '#374151' }} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid2>
      </Grid2>
    </Container>
  );
}
