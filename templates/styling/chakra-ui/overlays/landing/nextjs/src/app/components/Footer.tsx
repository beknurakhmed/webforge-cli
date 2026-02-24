'use client';

import { Box, Flex, Heading, Text, Link, VStack, HStack } from '@chakra-ui/react';

export function Footer() {
  return (
    <Box as="footer" bg="gray.900" color="gray.400" pt={16} pb={8} px={8}>
      <Flex maxW="1200px" mx="auto" justify="space-between" gap={16} flexWrap="wrap">
        <Box>
          <Heading as="h3" size="lg" color="white" mb={2}>{'{{projectName}}'}</Heading>
          <Text>Building the future of the web.</Text>
        </Box>
        <HStack gap={16} align="flex-start" flexWrap="wrap">
          <VStack align="flex-start" gap={2}>
            <Heading as="h4" size="xs" color="white" textTransform="uppercase" mb={2}>Product</Heading>
            <Link href="#features" color="gray.400" _hover={{ color: 'white' }} textDecoration="none">Features</Link>
            <Link href="#cta" color="gray.400" _hover={{ color: 'white' }} textDecoration="none">Pricing</Link>
          </VStack>
          <VStack align="flex-start" gap={2}>
            <Heading as="h4" size="xs" color="white" textTransform="uppercase" mb={2}>Company</Heading>
            <Link href="#" color="gray.400" _hover={{ color: 'white' }} textDecoration="none">About</Link>
            <Link href="#" color="gray.400" _hover={{ color: 'white' }} textDecoration="none">Blog</Link>
          </VStack>
        </HStack>
      </Flex>
      <Box borderTop="1px solid" borderColor="gray.700" mt={12} pt={6} textAlign="center" maxW="1200px" mx="auto">
        <Text fontSize="sm" color="gray.500">&copy; 2025 {'{{projectName}}'}. All rights reserved.</Text>
      </Box>
    </Box>
  );
}
