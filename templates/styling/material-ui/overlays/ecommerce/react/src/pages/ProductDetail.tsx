import { useParams, Link } from 'react-router-dom';
import { Box, Typography, Button, Chip, Grid2, Paper } from '@mui/material';
import { products, Product } from '../data/products';

interface ProductDetailProps {
  addToCart: (product: Product) => void;
}

export function ProductDetail({ addToCart }: ProductDetailProps) {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <Box sx={{ textAlign: 'center', py: 8 }}>
        <Typography variant="h5" sx={{ color: '#374151', mb: 2 }}>
          Product Not Found
        </Typography>
        <Button component={Link} to="/" sx={{ color: '#4f46e5', textTransform: 'none', fontWeight: 500 }}>
          Back to Shop
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: 900, mx: 'auto' }}>
      <Button
        component={Link}
        to="/"
        sx={{ color: '#4f46e5', textTransform: 'none', fontWeight: 500, mb: 3 }}
      >
        &larr; Back to Shop
      </Button>
      <Grid2 container spacing={4} alignItems="flex-start">
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Paper
            elevation={0}
            sx={{ fontSize: '8rem', textAlign: 'center', p: 6, bgcolor: '#f9fafb', borderRadius: 3 }}
          >
            {product.image}
          </Paper>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Chip
            label={product.category}
            size="small"
            sx={{ bgcolor: '#eef2ff', color: '#4f46e5', fontWeight: 600, fontSize: '0.75rem', mb: 1 }}
          />
          <Typography variant="h4" sx={{ fontWeight: 700, color: '#111827', mb: 2 }}>
            {product.name}
          </Typography>
          <Typography variant="body1" sx={{ color: '#374151', lineHeight: 1.6, mb: 3 }}>
            {product.description}
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 700, color: '#111827', mb: 3 }}>
            ${product.price.toFixed(2)}
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => addToCart(product)}
            sx={{ bgcolor: '#4f46e5', textTransform: 'none', fontWeight: 600, px: 4, py: 1.5, borderRadius: 2, '&:hover': { bgcolor: '#4338ca' } }}
          >
            Add to Cart
          </Button>
        </Grid2>
      </Grid2>
    </Box>
  );
}
