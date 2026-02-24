'use client';

import Link from 'next/link';
import { Box, Flex, Text, SimpleGrid } from '@chakra-ui/react';

export interface Post {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  authorAvatar: string;
}

interface PostCardProps {
  post: Post;
  featured?: boolean;
}

export function PostCard({ post, featured = false }: PostCardProps) {
  return (
    <Link href={`/post/${post.id}`} style={{ textDecoration: 'none' }}>
      <Box
        bg="white"
        borderRadius="xl"
        overflow="hidden"
        border="1px solid"
        borderColor="gray.200"
        transition="transform 0.2s, box-shadow 0.2s"
        _hover={{ transform: 'translateY(-3px)', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
        display={featured ? 'grid' : 'block'}
        gridTemplateColumns={featured ? { base: '1fr', md: '1fr 1fr' } : undefined}
        gap={featured ? 8 : undefined}
        alignItems={featured ? 'center' : undefined}
      >
        <Flex
          align="center"
          justify="center"
          fontSize={featured ? '6rem' : '3.5rem'}
          h={featured ? '300px' : '180px'}
          bgGradient="linear-gradient(135deg, #eef2ff, #e0e7ff)"
        >
          {post.image}
        </Flex>
        <Box p={5}>
          <Flex align="center" gap={3} mb={2}>
            <Link href={`/category/${post.category.toLowerCase()}`} style={{ textDecoration: 'none' }}>
              <Text fontSize="0.75rem" fontWeight={600} color="#4f46e5" textTransform="uppercase" letterSpacing="0.05em" bg="#eef2ff" px={2} py={0.5} borderRadius="sm">{post.category}</Text>
            </Link>
            <Text fontSize="0.8rem" color="gray.500">{post.readTime}</Text>
          </Flex>
          <Text fontSize={featured ? '1.5rem' : '1.15rem'} fontWeight={700} color="gray.900" mb={2} lineHeight={1.4}>{post.title}</Text>
          <Text fontSize="0.9rem" color="gray.600" mb={4} lineClamp={2}>{post.excerpt}</Text>
          <Flex align="center" gap={2} fontSize="0.85rem">
            <Text fontSize="1.2rem">{post.authorAvatar}</Text>
            <Text fontWeight={600} color="gray.900">{post.author}</Text>
            <Text color="gray.500">{post.date}</Text>
          </Flex>
        </Box>
      </Box>
    </Link>
  );
}
