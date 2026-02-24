'use client';

import Link from 'next/link';
import { Box, Flex, SimpleGrid, Text, VStack } from '@chakra-ui/react';

export function Footer() {
  return (
    <Box as="footer" bg="gray.900" color="gray.400" pt={12} pb={6} px={6} mt={16}>
      <Box maxW="1100px" mx="auto">
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={8} mb={8} templateColumns={{ base: '1fr', md: '2fr 1fr 1fr' }}>
          <Box>
            <Text color="white" fontSize="1.15rem" fontWeight={700} mb={3}>🚀 {'{{projectName}}'}</Text>
            <Text fontSize="0.85rem" lineHeight={1.6}>Building digital experiences that make a difference. Let us create something amazing together.</Text>
          </Box>
          <Box>
            <Text color="white" fontSize="0.95rem" fontWeight={700} mb={3}>Quick Links</Text>
            <VStack align="start" gap={1}>
              <Link href="/"><Text fontSize="0.85rem" _hover={{ color: 'white' }}>Home</Text></Link>
              <Link href="/projects"><Text fontSize="0.85rem" _hover={{ color: 'white' }}>Projects</Text></Link>
              <Link href="/about"><Text fontSize="0.85rem" _hover={{ color: 'white' }}>About</Text></Link>
              <Link href="/contact"><Text fontSize="0.85rem" _hover={{ color: 'white' }}>Contact</Text></Link>
            </VStack>
          </Box>
          <Box>
            <Text color="white" fontSize="0.95rem" fontWeight={700} mb={3}>Connect</Text>
            <Flex gap={4} fontSize="1.4rem">
              <Text cursor="pointer">💼</Text>
              <Text cursor="pointer">🐦</Text>
              <Text cursor="pointer">📂</Text>
              <Text cursor="pointer">📧</Text>
            </Flex>
          </Box>
        </SimpleGrid>
        <Box borderTop="1px solid" borderColor="gray.700" pt={6} textAlign="center">
          <Text fontSize="0.8rem">&copy; 2025 {'{{projectName}}'}. Crafted with care.</Text>
        </Box>
      </Box>
    </Box>
  );
}
