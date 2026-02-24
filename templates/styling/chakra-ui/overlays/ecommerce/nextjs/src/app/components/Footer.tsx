'use client';

import { Box, SimpleGrid, Heading, Text, HStack } from '@chakra-ui/react';

export function Footer() {
  return (
    <Box as="footer" bg="gray.900" color="gray.400" pt={12} pb={6} px={6} mt={16}>
      <SimpleGrid maxW="1200px" mx="auto" columns={{ base: 1, sm: 2, md: 4 }} gap={8} mb={8}>
        <Box>
          <Heading as="h3" size="md" color="white" mb={3}>{'{{projectName}}'}</Heading>
          <Text fontSize="0.9rem" lineHeight={1.6}>Your one-stop shop for quality products at great prices.</Text>
        </Box>
        <Box>
          <Heading as="h4" size="sm" color="white" mb={3}>Shop</Heading>
          <Text fontSize="0.9rem" py={1}>New Arrivals</Text>
          <Text fontSize="0.9rem" py={1}>Best Sellers</Text>
          <Text fontSize="0.9rem" py={1}>Sale Items</Text>
          <Text fontSize="0.9rem" py={1}>Gift Cards</Text>
        </Box>
        <Box>
          <Heading as="h4" size="sm" color="white" mb={3}>Support</Heading>
          <Text fontSize="0.9rem" py={1}>Help Center</Text>
          <Text fontSize="0.9rem" py={1}>Shipping Info</Text>
          <Text fontSize="0.9rem" py={1}>Returns</Text>
          <Text fontSize="0.9rem" py={1}>Contact Us</Text>
        </Box>
        <Box>
          <Heading as="h4" size="sm" color="white" mb={3}>Follow Us</Heading>
          <HStack gap={4} fontSize="1.5rem"><Text>📘</Text><Text>🐦</Text><Text>📷</Text><Text>📌</Text></HStack>
        </Box>
      </SimpleGrid>
      <Box borderTop="1px solid" borderColor="gray.700" pt={6} textAlign="center" maxW="1200px" mx="auto">
        <Text fontSize="0.85rem">&copy; 2025 {'{{projectName}}'}. All rights reserved.</Text>
      </Box>
    </Box>
  );
}
