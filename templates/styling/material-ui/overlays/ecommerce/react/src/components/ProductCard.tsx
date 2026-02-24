import { Link } from 'react-router-dom';
import { Card, CardContent, CardActions, Typography, Button, Box, Chip } from '@mui/material';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 3,
        transition: 'all 0.2s',
        '&:hover': { boxShadow: '0 8px 25px rgba(0,0,0,0.08)', transform: 'translateY(-2px)' },
      }}
    >
      <Box
        component={Link}
        to={`/product/${product.id}`}
        sx={{ textDecoration: 'none', color: 'inherit' }}
      >
        <Box sx={{ fontSize: '4rem', textAlign: 'center', p: 4, bgcolor: '#f9fafb' }}>
          {product.image}
        </Box>
        <CardContent sx={{ pb: 0 }}>
          <Chip
            label={product.category}
            size="small"
            sx={{ bgcolor: '#eef2ff', color: '#4f46e5', fontWeight: 600, fontSize: '0.7rem', mb: 0.5 }}
          />
          <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#111827' }}>
            {product.name}
          </Typography>
          <Typography variant="body2" sx={{ color: '#6b7280' }}>
            {product.description}
          </Typography>
        </CardContent>
      </Box>
      <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2, mt: 'auto' }}>
        <Typography variant="h6" sx={{ fontWeight: 700, color: '#111827' }}>
          ${product.price.toFixed(2)}
        </Typography>
        <Button
          variant="contained"
          size="small"
          onClick={() => onAddToCart(product)}
          sx={{ bgcolor: '#4f46e5', textTransform: 'none', fontWeight: 500, '&:hover': { bgcolor: '#4338ca' } }}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}
