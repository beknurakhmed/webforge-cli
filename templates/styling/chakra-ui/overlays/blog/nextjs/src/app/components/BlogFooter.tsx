'use client';

import Link from 'next/link';
import { Box, Flex, SimpleGrid, Text, VStack } from '@chakra-ui/react';

export function BlogFooter() {
  return (
    <Box as="footer" bg="gray.900" color="gray.400" pt={12} pb={6} px={6} mt={16}>
      <Box maxW="1100px" mx="auto">
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} gap={8} mb={8} templateColumns={{ base: '1fr', sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr' }}>
          <Box>
            <Text color="white" fontSize="1.15rem" fontWeight={700} mb={3}>📝 {'{{projectName}}'}</Text>
            <Text fontSize="0.85rem" lineHeight={1.6}>Sharing insights, tutorials, and stories about technology, design, and the web.</Text>
          </Box>
          <Box>
            <Text color="white" fontSize="0.95rem" fontWeight={700} mb={3}>Categories</Text>
            <VStack align="start" gap={1}>
              <Link href="/category/technology"><Text fontSize="0.85rem" _hover={{ color: 'white' }}>Technology</Text></Link>
              <Link href="/category/design"><Text fontSize="0.85rem" _hover={{ color: 'white' }}>Design</Text></Link>
              <Link href="/category/business"><Text fontSize="0.85rem" _hover={{ color: 'white' }}>Business</Text></Link>
              <Link href="/category/tutorial"><Text fontSize="0.85rem" _hover={{ color: 'white' }}>Tutorials</Text></Link>
            </VStack>
          </Box>
          <Box>
            <Text color="white" fontSize="0.95rem" fontWeight={700} mb={3}>Links</Text>
            <VStack align="start" gap={1}>
              <Link href="/about"><Text fontSize="0.85rem" _hover={{ color: 'white' }}>About</Text></Link>
              <Link href="/"><Text fontSize="0.85rem" _hover={{ color: 'white' }}>Home</Text></Link>
              <Text fontSize="0.85rem" cursor="pointer" _hover={{ color: 'white' }}>RSS Feed</Text>
              <Text fontSize="0.85rem" cursor="pointer" _hover={{ color: 'white' }}>Sitemap</Text>
            </VStack>
          </Box>
          <Box>
            <Text color="white" fontSize="0.95rem" fontWeight={700} mb={3}>Connect</Text>
            <Flex gap={4} fontSize="1.4rem">
              <Text cursor="pointer">🐦</Text>
              <Text cursor="pointer">📘</Text>
              <Text cursor="pointer">💼</Text>
              <Text cursor="pointer">📷</Text>
            </Flex>
          </Box>
        </SimpleGrid>
        <Box borderTop="1px solid" borderColor="gray.700" pt={6} textAlign="center">
          <Text fontSize="0.8rem">&copy; 2025 {'{{projectName}}'}. All rights reserved.</Text>
        </Box>
      </Box>
    </Box>
  );
}
