'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Box, Heading, Text, Button, Badge, SimpleGrid, Center, VStack } from '@chakra-ui/react';
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
      <Center py={16} flexDirection="column" gap={4}>
        <Heading as="h2" size="lg">Product Not Found</Heading>
        <Text color="gray.500">The product you are looking for does not exist.</Text>
        <Button as={Link} href="/" bg="#4f46e5" color="white" _hover={{ bg: '#4338ca' }}>Back to Shop</Button>
      </Center>
    );
  }

  return (
    <Box maxW="1000px" mx="auto" py={8} px={6}>
      <Box as={Link} href="/" color="#4f46e5" fontWeight={500} textDecoration="none" display="inline-block" mb={6} _hover={{ textDecoration: 'underline' }}>← Back to Shop</Box>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={12}>
        <Center h="400px" fontSize="8xl" bg="white" borderRadius="xl" boxShadow="sm">{product.image}</Center>
        <VStack align="flex-start" gap={4}>
          <Badge color="#4f46e5" fontSize="0.75rem" fontWeight={600} textTransform="uppercase" bg="transparent" p={0}>{product.category}</Badge>
          <Heading as="h1" size="xl" color="gray.900">{product.name}</Heading>
          <Text fontSize="0.85rem" color="gray.500">{'⭐'.repeat(Math.floor(product.rating))} {product.rating} / 5.0</Text>
          <Text fontSize="2xl" fontWeight={700} color="#4f46e5">${product.price.toFixed(2)}</Text>
          <Text color="gray.700" lineHeight={1.7}>{product.description}</Text>
          <Button bg="#4f46e5" color="white" size="lg" px={8} borderRadius="lg" fontWeight={600} _hover={{ bg: '#4338ca' }} onClick={() => addToCart(product)}>Add to Cart</Button>
          <Box mt={4}>
            <Heading as="h3" size="sm" color="gray.900" mb={3}>Features</Heading>
            <VStack align="flex-start" gap={1} color="gray.700">
              <Text>Free shipping on orders over $50</Text>
              <Text>30-day return policy</Text>
              <Text>1-year warranty</Text>
              <Text>Secure checkout</Text>
            </VStack>
          </Box>
        </VStack>
      </SimpleGrid>
    </Box>
  );
}
