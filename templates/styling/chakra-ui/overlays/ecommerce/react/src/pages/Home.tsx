import { useState } from 'react';
import { Box, Flex, Heading, Input, SimpleGrid, Text } from '@chakra-ui/react';
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
    <Box as="section">
      <Flex justify="space-between" align="center" mb={6} flexWrap="wrap" gap={4}>
        <Heading as="h2" size="xl" color="gray.900">
          All Products
        </Heading>
        <Input
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          maxW="220px"
          border="1px solid"
          borderColor="gray.300"
          borderRadius="lg"
          fontSize="0.9rem"
          px={4}
          py={2}
        />
      </Flex>
      <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gap={6}>
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </SimpleGrid>
      {filtered.length === 0 && (
        <Text color="gray.500" textAlign="center" py={8}>
          No products found.
        </Text>
      )}
    </Box>
  );
}
