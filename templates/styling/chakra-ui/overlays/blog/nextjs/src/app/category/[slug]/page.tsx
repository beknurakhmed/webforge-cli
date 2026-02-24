'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Box, Heading, Text, SimpleGrid } from '@chakra-ui/react';
import { PostCard, Post } from '../../components/PostCard';
import { BlogSidebar } from '../../components/BlogSidebar';

const posts: Post[] = [
  { id: 1, title: 'Getting Started with Next.js 15', excerpt: 'Learn the fundamentals of Next.js 15 App Router, server components, and file-based routing in this comprehensive guide.', content: '', author: 'Alex Rivera', date: 'Jan 15, 2025', category: 'Technology', readTime: '8 min read', image: '⚛️', authorAvatar: '👨‍💻' },
  { id: 2, title: 'Building Better User Interfaces', excerpt: 'Explore modern UI patterns and best practices for creating intuitive, accessible, and beautiful user interfaces.', content: '', author: 'Priya Sharma', date: 'Jan 12, 2025', category: 'Design', readTime: '6 min read', image: '🎨', authorAvatar: '👩‍🎨' },
  { id: 3, title: 'Design Systems That Scale', excerpt: 'How to build and maintain design systems that grow with your organization while maintaining consistency.', content: '', author: 'Marcus Chen', date: 'Jan 10, 2025', category: 'Design', readTime: '10 min read', image: '📐', authorAvatar: '👨' },
  { id: 4, title: 'TypeScript Tips and Tricks', excerpt: 'Advanced TypeScript patterns that will make your code more type-safe, readable, and maintainable.', content: '', author: 'Sofia Andersen', date: 'Jan 8, 2025', category: 'Technology', readTime: '7 min read', image: '📘', authorAvatar: '👩' },
  { id: 5, title: 'The Future of Web Development', excerpt: 'A look at emerging trends and technologies that are shaping the future of how we build for the web.', content: '', author: 'Alex Rivera', date: 'Jan 3, 2025', category: 'Technology', readTime: '12 min read', image: '🌐', authorAvatar: '👨‍💻' },
  { id: 6, title: 'Mastering CSS Grid Layout', excerpt: 'A deep dive into CSS Grid with practical examples for creating complex, responsive layouts with ease.', content: '', author: 'Priya Sharma', date: 'Dec 28, 2024', category: 'Tutorial', readTime: '9 min read', image: '📏', authorAvatar: '👩‍🎨' },
];

export default function CategoryPage() {
  const params = useParams();
  const slug = params.slug as string;
  const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1);
  const filteredPosts = posts.filter(
    (p) => p.category.toLowerCase() === slug.toLowerCase()
  );

  return (
    <Box maxW="1100px" mx="auto" px={6} py={8}>
      <Box mb={8}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <Text display="inline-block" color="#4f46e5" fontWeight={500} mb={4} _hover={{ textDecoration: 'underline' }}>← All Posts</Text>
        </Link>
        <Heading as="h1" size="xl" color="gray.900" mb={1}>📂 {categoryName}</Heading>
        <Text color="gray.500">{filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} in this category</Text>
      </Box>

      <SimpleGrid columns={{ base: 1, lg: 2 }} gap={10} templateColumns={{ base: '1fr', lg: '1fr 320px' }} alignItems="start">
        <Box>
          {filteredPosts.length > 0 ? (
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
              {filteredPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </SimpleGrid>
          ) : (
            <Box textAlign="center" py={12}>
              <Text color="gray.500" mb={4}>No articles found in this category.</Text>
              <Link href="/" style={{ textDecoration: 'none' }}>
                <Box as="span" display="inline-block" bg="#4f46e5" color="white" px={6} py={2.5} borderRadius="lg" fontWeight={600} _hover={{ bg: '#4338ca' }}>View All Posts</Box>
              </Link>
            </Box>
          )}
        </Box>
        <BlogSidebar />
      </SimpleGrid>
    </Box>
  );
}
