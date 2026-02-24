'use client';

import Link from 'next/link';
import { Box, Heading, Text, Badge, Center } from '@chakra-ui/react';
import { Product } from './CartProvider';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Box as={Link} href={`/product/${product.id}`} display="block" bg="white" borderRadius="xl" overflow="hidden" boxShadow="sm" transition="all 0.2s" textDecoration="none" _hover={{ transform: 'translateY(-4px)', boxShadow: 'lg' }}>
      <Center h="200px" fontSize="4xl" bg="gray.100">{product.image}</Center>
      <Box p={4}>
        <Badge color="#4f46e5" fontSize="0.75rem" fontWeight={600} textTransform="uppercase" letterSpacing="0.05em" bg="transparent" p={0}>{product.category}</Badge>
        <Heading as="h3" size="sm" fontWeight={600} color="gray.900" mt={1} mb={1}>{product.name}</Heading>
        <Text fontSize="0.85rem" color="gray.500" mb={2}>{'⭐'.repeat(Math.floor(product.rating))} {product.rating}</Text>
        <Text fontSize="xl" fontWeight={700} color="#4f46e5">${product.price.toFixed(2)}</Text>
      </Box>
    </Box>
  );
}
