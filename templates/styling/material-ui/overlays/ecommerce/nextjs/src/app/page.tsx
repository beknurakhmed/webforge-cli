'use client';

import { useState } from 'react';
import { Box, Typography, Container, TextField, Button, Grid2, Stack } from '@mui/material';
import { ProductCard } from './components/ProductCard';
import { Product } from './components/CartProvider';

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

const categories = ['All', ...Array.from(new Set(products.map((p) => p.category)))];

export default function HomePage() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = products.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Box>
      <Box sx={{ background: 'linear-gradient(135deg, #4f46e5, #7c3aed)', color: '#ffffff', textAlign: 'center', py: 8 }}>
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ fontWeight: 800, mb: 1 }}>
            Welcome to {'{{projectName}}'}
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9, mb: 4, fontWeight: 400 }}>
            Discover amazing products at unbeatable prices
          </Typography>
          <Box sx={{ maxWidth: 500, mx: 'auto' }}>
            <TextField
              fullWidth
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              sx={{
                bgcolor: '#ffffff',
                borderRadius: 6,
                '& .MuiOutlinedInput-root': { borderRadius: 6 },
                '& fieldset': { border: 'none' },
              }}
            />
          </Box>
        </Container>
      </Box>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Stack direction="row" spacing={1} sx={{ mb: 4, flexWrap: 'wrap' }}>
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={activeCategory === cat ? 'contained' : 'outlined'}
              size="small"
              onClick={() => setActiveCategory(cat)}
              sx={{
                textTransform: 'none',
                fontWeight: 500,
                borderRadius: 5,
                ...(activeCategory === cat
                  ? { bgcolor: '#4f46e5', '&:hover': { bgcolor: '#4338ca' } }
                  : { color: '#374151', borderColor: '#e5e7eb' }),
              }}
            >
              {cat}
            </Button>
          ))}
        </Stack>
        <Grid2 container spacing={3}>
          {filtered.map((product) => (
            <Grid2 size={{ xs: 12, sm: 6, md: 3 }} key={product.id}>
              <ProductCard product={product} />
            </Grid2>
          ))}
        </Grid2>
        {filtered.length === 0 && (
          <Typography variant="body1" align="center" sx={{ color: '#6b7280', py: 6 }}>
            No products found. Try a different search.
          </Typography>
        )}
      </Container>
    </Box>
  );
}
