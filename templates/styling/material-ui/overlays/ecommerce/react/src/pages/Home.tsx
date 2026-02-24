import { useState } from 'react';
import { Box, Typography, TextField, Grid2 } from '@mui/material';
import { ProductCard } from '../components/ProductCard';
import { products, Product } from '../data/products';

interface HomeProps {
  addToCart: (product: Product) => void;
}

export function Home({ addToCart }: HomeProps) {
  const [search, setSearch] = useState('');

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3, flexWrap: 'wrap', gap: 2 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, color: '#111827' }}>
          All Products
        </Typography>
        <TextField
          size="small"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ width: 220, '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
        />
      </Box>
      <Grid2 container spacing={3}>
        {filtered.map((product) => (
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={product.id}>
            <ProductCard product={product} onAddToCart={addToCart} />
          </Grid2>
        ))}
        {filtered.length === 0 && (
          <Grid2 size={{ xs: 12 }}>
            <Typography variant="body1" align="center" sx={{ color: '#6b7280', py: 4 }}>
              No products found.
            </Typography>
          </Grid2>
        )}
      </Grid2>
    </Box>
  );
}
