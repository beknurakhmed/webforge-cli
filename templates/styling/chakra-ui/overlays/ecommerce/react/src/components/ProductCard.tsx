import { Link } from 'react-router-dom';
import { Box, Flex, Text, Heading, Button, Badge } from '@chakra-ui/react';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <Box
      border="1px solid"
      borderColor="gray.200"
      borderRadius="xl"
      overflow="hidden"
      transition="all 0.2s"
      bg="white"
      display="flex"
      flexDirection="column"
      _hover={{ boxShadow: 'lg', transform: 'translateY(-2px)' }}
    >
      <Box as={Link} to={`/product/${product.id}`} textDecoration="none" color="inherit">
        <Box fontSize="4xl" textAlign="center" p={8} bg="gray.50">
          {product.image}
        </Box>
        <Box px={5} pt={4} pb={2}>
          <Badge color="#4f46e5" fontSize="0.75rem" fontWeight={600} textTransform="uppercase" letterSpacing="0.05em" bg="transparent" p={0}>
            {product.category}
          </Badge>
          <Heading as="h3" size="sm" mt={1} mb={1} color="gray.900">
            {product.name}
          </Heading>
          <Text color="gray.500" fontSize="0.85rem">
            {product.description}
          </Text>
        </Box>
      </Box>
      <Flex justify="space-between" align="center" px={5} py={4} mt="auto">
        <Text fontSize="xl" fontWeight={700} color="gray.900">
          ${product.price.toFixed(2)}
        </Text>
        <Button
          bg="#4f46e5"
          color="white"
          size="sm"
          fontWeight={500}
          borderRadius="md"
          _hover={{ bg: '#4338ca' }}
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </Button>
      </Flex>
    </Box>
  );
}
