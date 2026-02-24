'use client';

import Link from 'next/link';
import { Box, Flex, Heading, Text, Button, VStack, Center, SimpleGrid, HStack } from '@chakra-ui/react';
import { useCart } from '../components/CartProvider';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <Center py={16} flexDirection="column" gap={4}>
        <Text fontSize="4xl">🛒</Text>
        <Heading as="h2" size="lg" color="gray.900">Your cart is empty</Heading>
        <Text color="gray.500">Looks like you have not added any items yet.</Text>
        <Button as={Link} href="/" bg="#4f46e5" color="white" _hover={{ bg: '#4338ca' }}>Continue Shopping</Button>
      </Center>
    );
  }

  return (
    <Box maxW="1000px" mx="auto" py={8} px={6}>
      <Flex justify="space-between" align="center" mb={8}>
        <Heading as="h1" size="xl" color="gray.900">Shopping Cart</Heading>
        <Button variant="outline" borderColor="gray.200" color="gray.700" onClick={clearCart}>Clear Cart</Button>
      </Flex>
      <SimpleGrid columns={{ base: 1, lg: 2 }} gap={8} templateColumns={{ base: '1fr', lg: '1fr 360px' }}>
        <VStack gap={4} align="stretch">
          {items.map((item) => (
            <Flex key={item.id} align="center" gap={4} bg="white" p={4} borderRadius="xl" boxShadow="sm" flexWrap={{ base: 'wrap', md: 'nowrap' }}>
              <Center fontSize="2.5rem" w="70px" h="70px" bg="gray.100" borderRadius="lg">{item.image}</Center>
              <Box flex={1}>
                <Heading as="h3" size="sm" color="gray.900">{item.name}</Heading>
                <Text fontSize="0.8rem" color="gray.500">{item.category}</Text>
                <Text fontWeight={600} color="#4f46e5">${item.price.toFixed(2)}</Text>
              </Box>
              <HStack>
                <Flex align="center" border="1px solid" borderColor="gray.200" borderRadius="lg" overflow="hidden">
                  <Button size="sm" variant="ghost" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</Button>
                  <Text w="36px" textAlign="center" fontWeight={600}>{item.quantity}</Text>
                  <Button size="sm" variant="ghost" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</Button>
                </Flex>
                <Text fontWeight={700} color="gray.900" minW="70px" textAlign="right">${(item.price * item.quantity).toFixed(2)}</Text>
                <Button variant="ghost" onClick={() => removeFromCart(item.id)} p={0} minW="auto">🗑️</Button>
              </HStack>
            </Flex>
          ))}
        </VStack>
        <Box bg="white" p={6} borderRadius="xl" boxShadow="sm" position="sticky" top="80px" h="fit-content">
          <Heading as="h2" size="md" color="gray.900" mb={4}>Order Summary</Heading>
          <Flex justify="space-between" py={2} color="gray.700"><Text>Subtotal</Text><Text>${totalPrice.toFixed(2)}</Text></Flex>
          <Flex justify="space-between" py={2} color="gray.700"><Text>Shipping</Text><Text>{totalPrice > 50 ? 'Free' : '$9.99'}</Text></Flex>
          <Flex justify="space-between" py={2} color="gray.700"><Text>Tax</Text><Text>${(totalPrice * 0.08).toFixed(2)}</Text></Flex>
          <Flex justify="space-between" pt={4} mt={2} borderTop="2px solid" borderColor="gray.200" fontSize="lg" fontWeight={700} color="gray.900">
            <Text>Total</Text><Text>${(totalPrice + (totalPrice > 50 ? 0 : 9.99) + totalPrice * 0.08).toFixed(2)}</Text>
          </Flex>
          <Button w="100%" bg="#4f46e5" color="white" size="lg" mt={4} _hover={{ bg: '#4338ca' }}>Proceed to Checkout</Button>
          <Box as={Link} href="/" display="block" textAlign="center" mt={4} color="#4f46e5" fontWeight={500} textDecoration="none">← Continue Shopping</Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
