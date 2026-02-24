import { Link } from 'react-router-dom';
import { Box, Flex, Heading, Text, Button, VStack, HStack, Center, SimpleGrid } from '@chakra-ui/react';
import { CartItem } from '../data/products';

interface CartProps {
  cart: CartItem[];
  removeFromCart: (id: number) => void;
}

export function Cart({ cart, removeFromCart }: CartProps) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <Box>
        <Heading as="h2" size="xl" color="gray.900" mb={6}>
          Shopping Cart
        </Heading>
        <Center py={12} flexDirection="column">
          <Text fontSize="xl" color="gray.500" mb={4}>
            Your cart is empty
          </Text>
          <Box as={Link} to="/" color="#4f46e5" fontWeight={500} textDecoration="none" _hover={{ textDecoration: 'underline' }}>
            Continue Shopping
          </Box>
        </Center>
      </Box>
    );
  }

  return (
    <Box>
      <Heading as="h2" size="xl" color="gray.900" mb={6}>
        Shopping Cart ({cart.length} items)
      </Heading>
      <SimpleGrid columns={{ base: 1, lg: 2 }} gap={8} templateColumns={{ base: '1fr', lg: '1fr 320px' }}>
        <VStack gap={0} align="stretch">
          {cart.map((item) => (
            <Flex key={item.id} align="center" gap={4} py={5} borderBottom="1px solid" borderColor="gray.200">
              <Text fontSize="2.5rem">{item.image}</Text>
              <Box flex={1}>
                <Box as={Link} to={`/product/${item.id}`} textDecoration="none" color="inherit">
                  <Heading as="h4" size="sm" color="gray.900">{item.name}</Heading>
                </Box>
                <Text color="gray.500" fontSize="0.85rem" mt={1}>Qty: {item.quantity}</Text>
              </Box>
              <Text fontWeight={700} color="gray.900" fontSize="md" minW="70px" textAlign="right">
                ${(item.price * item.quantity).toFixed(2)}
              </Text>
              <Button
                variant="plain"
                color="red.500"
                fontSize="0.85rem"
                fontWeight={500}
                p={0}
                minW="auto"
                _hover={{ textDecoration: 'underline' }}
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </Button>
            </Flex>
          ))}
        </VStack>
        <Box bg="gray.50" border="1px solid" borderColor="gray.200" borderRadius="xl" p={6} h="fit-content">
          <Heading as="h3" size="sm" color="gray.900" mb={4}>
            Order Summary
          </Heading>
          <Flex justify="space-between" py={2} color="gray.700" fontSize="0.95rem">
            <Text>Subtotal</Text>
            <Text>${total.toFixed(2)}</Text>
          </Flex>
          <Flex justify="space-between" py={2} color="gray.700" fontSize="0.95rem">
            <Text>Shipping</Text>
            <Text>Free</Text>
          </Flex>
          <Flex justify="space-between" py={4} borderTop="1px solid" borderColor="gray.200" mt={2} fontSize="1.1rem">
            <Text>Total</Text>
            <Text fontWeight={700}>${total.toFixed(2)}</Text>
          </Flex>
          <Button
            w="100%"
            bg="#4f46e5"
            color="white"
            borderRadius="lg"
            fontWeight={600}
            fontSize="md"
            py={5}
            mt={2}
            _hover={{ bg: '#4338ca' }}
          >
            Checkout
          </Button>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
