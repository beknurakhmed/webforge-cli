'use client';

import { useState } from 'react';
import { Box, Heading, Text, Input, Flex, Button, SimpleGrid, Center } from '@chakra-ui/react';
import { ProductCard } from './components/ProductCard';
import { Product } from './components/CartProvider';

const products: Product[] = [
  { id: 1, name: 'Wireless Headphones', price: 79.99, image: '🎧', category: 'Electronics', rating: 4.5, description: 'Premium wireless headphones with noise cancellation and 30-hour battery life.' },
  { id: 2, name: 'Smart Watch', price: 199.99, image: '⌚', category: 'Electronics', rating: 4.7, description: 'Feature-packed smartwatch with health monitoring, GPS tracking, and a vibrant AMOLED display.' },
  { id: 3, name: 'Running Shoes', price: 129.99, image: '👟', category: 'Sports', rating: 4.3, description: 'Lightweight running shoes with responsive cushioning and breathable mesh upper.' },
  { id: 4, name: 'Backpack', price: 59.99, image: '🎒', category: 'Accessories', rating: 4.6, description: 'Durable travel backpack with laptop compartment and water-resistant fabric.' },
  { id: 5, name: 'Coffee Maker', price: 89.99, image: '☕', category: 'Home', rating: 4.4, description: 'Programmable coffee maker with thermal carafe and brew-strength control.' },
  { id: 6, name: 'Desk Lamp', price: 45.99, image: '💡', category: 'Home', rating: 4.2, description: 'Adjustable LED desk lamp with multiple brightness levels and USB charging.' },
  { id: 7, name: 'Yoga Mat', price: 34.99, image: '🧘', category: 'Sports', rating: 4.8, description: 'Non-slip yoga mat with alignment marks and eco-friendly material.' },
  { id: 8, name: 'Sunglasses', price: 149.99, image: '🕶️', category: 'Accessories', rating: 4.1, description: 'Polarized sunglasses with UV400 protection and titanium frame.' },
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
      <Box bgGradient="linear-gradient(135deg, #4f46e5, #7c3aed)" color="white" textAlign="center" py={16} px={6}>
        <Heading as="h1" fontSize="2.5rem" fontWeight={800} mb={2}>Welcome to {'{{projectName}}'}</Heading>
        <Text fontSize="lg" opacity={0.9} mb={8}>Discover amazing products at unbeatable prices</Text>
        <Flex maxW="500px" mx="auto" bg="white" borderRadius="full" px={4} py={2} align="center">
          <Text mr={2}>🔍</Text>
          <Input border="none" placeholder="Search products..." value={search} onChange={(e) => setSearch(e.target.value)} color="gray.700" _focus={{ boxShadow: 'none' }} />
        </Flex>
      </Box>
      <Box maxW="1200px" mx="auto" py={8} px={6}>
        <Flex gap={2} mb={8} flexWrap="wrap">
          {categories.map((cat) => (
            <Button key={cat} bg={activeCategory === cat ? '#4f46e5' : 'white'} color={activeCategory === cat ? 'white' : 'gray.700'} border="2px solid" borderColor={activeCategory === cat ? '#4f46e5' : 'gray.200'} borderRadius="full" px={5} fontWeight={500} _hover={{ bg: activeCategory === cat ? '#4338ca' : 'gray.50' }} onClick={() => setActiveCategory(cat)}>
              {cat}
            </Button>
          ))}
        </Flex>
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap={6}>
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </SimpleGrid>
        {filtered.length === 0 && (
          <Center py={12} color="gray.500" fontSize="lg">No products found. Try a different search.</Center>
        )}
      </Box>
    </Box>
  );
}
