'use client';

import Link from 'next/link';
import { Box, Flex, Text, VStack, Input, Button } from '@chakra-ui/react';

const categories = [
  { name: 'Technology', slug: 'technology', count: 12 },
  { name: 'Design', slug: 'design', count: 8 },
  { name: 'Business', slug: 'business', count: 6 },
  { name: 'Lifestyle', slug: 'lifestyle', count: 5 },
  { name: 'Tutorial', slug: 'tutorial', count: 9 },
];

const popularPosts = [
  { id: 1, title: 'Getting Started with Next.js 15', date: 'Jan 15, 2025' },
  { id: 3, title: 'Design Systems That Scale', date: 'Jan 10, 2025' },
  { id: 5, title: 'The Future of Web Development', date: 'Jan 3, 2025' },
];

export function BlogSidebar() {
  return (
    <Box as="aside" position="sticky" top="80px">
      <Box bg="white" borderRadius="xl" p={5} border="1px solid" borderColor="gray.200" mb={5}>
        <Text fontWeight={700} color="gray.900" mb={4}>📂 Categories</Text>
        <VStack align="stretch" gap={0}>
          {categories.map((cat) => (
            <Link key={cat.slug} href={`/category/${cat.slug}`} style={{ textDecoration: 'none' }}>
              <Flex justify="space-between" py={2.5} borderBottom="1px solid" borderColor="gray.100" fontSize="0.9rem" color="gray.600" _hover={{ color: '#4f46e5' }} transition="color 0.2s">
                <Text>{cat.name}</Text>
                <Text bg="gray.50" px={2} py={0.5} borderRadius="full" fontSize="0.75rem" fontWeight={600} color="gray.500">{cat.count}</Text>
              </Flex>
            </Link>
          ))}
        </VStack>
      </Box>

      <Box bg="white" borderRadius="xl" p={5} border="1px solid" borderColor="gray.200" mb={5}>
        <Text fontWeight={700} color="gray.900" mb={4}>🔥 Popular Posts</Text>
        <VStack align="stretch" gap={0}>
          {popularPosts.map((post) => (
            <Link key={post.id} href={`/post/${post.id}`} style={{ textDecoration: 'none' }}>
              <Box py={2.5} borderBottom="1px solid" borderColor="gray.100">
                <Text fontSize="0.9rem" fontWeight={600} color="gray.900">{post.title}</Text>
                <Text fontSize="0.75rem" color="gray.500">{post.date}</Text>
              </Box>
            </Link>
          ))}
        </VStack>
      </Box>

      <Box bg="white" borderRadius="xl" p={5} border="1px solid" borderColor="gray.200">
        <Text fontWeight={700} color="gray.900" mb={3}>📬 Newsletter</Text>
        <Text fontSize="0.85rem" color="gray.500" mb={3}>Get the latest posts delivered to your inbox.</Text>
        <Input placeholder="your@email.com" border="1px solid" borderColor="gray.300" borderRadius="lg" mb={3} />
        <Button w="100%" bg="#4f46e5" color="white" borderRadius="lg" fontWeight={600} _hover={{ bg: '#4338ca' }}>Subscribe</Button>
      </Box>
    </Box>
  );
}
