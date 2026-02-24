import { useParams, Link } from 'react-router-dom';
import { Box, Flex, Heading, Text, Button, Badge, SimpleGrid, VStack, Center } from '@chakra-ui/react';
import { products, Product } from '../data/products';

interface ProductDetailProps {
  addToCart: (product: Product) => void;
}

export function ProductDetail({ addToCart }: ProductDetailProps) {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <Center py={16} flexDirection="column">
        <Heading as="h2" size="lg" color="gray.700" mb={4}>
          Product Not Found
        </Heading>
        <Box as={Link} to="/" color="#4f46e5" fontWeight={500} textDecoration="none" _hover={{ textDecoration: 'underline' }}>
          Back to Shop
        </Box>
      </Center>
    );
  }

  return (
    <Box maxW="900px" mx="auto">
      <Box as={Link} to="/" color="#4f46e5" fontWeight={500} textDecoration="none" display="inline-block" mb={6} _hover={{ textDecoration: 'underline' }}>
        ← Back to Shop
      </Box>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={12}>
        <Center fontSize="8xl" p={12} bg="gray.50" borderRadius="xl">
          {product.image}
        </Center>
        <VStack align="flex-start" gap={4}>
          <Badge color="#4f46e5" fontSize="0.75rem" fontWeight={600} textTransform="uppercase" letterSpacing="0.05em" bg="transparent" p={0}>
            {product.category}
          </Badge>
          <Heading as="h1" size="xl" color="gray.900">
            {product.name}
          </Heading>
          <Text color="gray.700" fontSize="md" lineHeight={1.6}>
            {product.description}
          </Text>
          <Text fontSize="2xl" fontWeight={700} color="gray.900">
            ${product.price.toFixed(2)}
          </Text>
          <Button
            bg="#4f46e5"
            color="white"
            size="lg"
            px={8}
            borderRadius="lg"
            fontWeight={600}
            _hover={{ bg: '#4338ca' }}
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </Button>
        </VStack>
      </SimpleGrid>
    </Box>
  );
}
