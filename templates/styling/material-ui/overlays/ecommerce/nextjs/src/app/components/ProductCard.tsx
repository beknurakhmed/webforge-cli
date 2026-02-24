'use client';

import Link from 'next/link';
import { Card, CardContent, Typography, Box, Chip } from '@mui/material';
import { Product } from './CartProvider';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card
      component={Link}
      href={`/product/${product.id}`}
      sx={{
        display: 'block',
        textDecoration: 'none',
        borderRadius: 3,
        overflow: 'hidden',
        transition: 'all 0.2s',
        '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' },
      }}
    >
      <Box sx={{ height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', bgcolor: '#f3f4f6' }}>
        {product.image}
      </Box>
      <CardContent>
        <Chip label={product.category} size="small" sx={{ bgcolor: '#eef2ff', color: '#4f46e5', fontWeight: 600, fontSize: '0.7rem', mb: 0.5 }} />
        <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#111827', mb: 0.25 }}>
          {product.name}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 0.5, fontSize: '0.85rem' }}>
          {'⭐'.repeat(Math.floor(product.rating))}
          <Typography variant="caption" sx={{ color: '#6b7280' }}>{product.rating}</Typography>
        </Box>
        <Typography variant="h6" sx={{ fontWeight: 700, color: '#4f46e5' }}>
          ${product.price.toFixed(2)}
        </Typography>
      </CardContent>
    </Card>
  );
}
