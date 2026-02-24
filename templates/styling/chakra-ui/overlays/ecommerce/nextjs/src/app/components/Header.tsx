'use client';

import Link from 'next/link';
import { Box, Flex, Heading, HStack, Text, Badge } from '@chakra-ui/react';
import { useCart } from './CartProvider';

export function Header() {
  const { totalItems } = useCart();

  return (
    <Box as="header" bg="white" borderBottom="1px solid" borderColor="gray.200" position="sticky" top={0} zIndex={100}>
      <Flex maxW="1200px" mx="auto" px={6} align="center" justify="space-between" h="64px">
        <Heading as={Link} href="/" size="md" color="gray.900" textDecoration="none">
          {'{{projectName}}'}
        </Heading>
        <HStack as="nav" gap={6}>
          <Box as={Link} href="/" color="gray.700" fontWeight={500} textDecoration="none" _hover={{ color: '#4f46e5' }}>Home</Box>
          <HStack as={Link} href="/cart" gap={1} color="gray.700" fontWeight={500} textDecoration="none" _hover={{ color: '#4f46e5' }} position="relative">
            <Text>Cart</Text>
            {totalItems > 0 && (
              <Badge bg="#4f46e5" color="white" borderRadius="full" fontSize="0.7rem" px={2} position="absolute" top="-8px" right="-10px">
                {totalItems}
              </Badge>
            )}
          </HStack>
        </HStack>
      </Flex>
    </Box>
  );
}
