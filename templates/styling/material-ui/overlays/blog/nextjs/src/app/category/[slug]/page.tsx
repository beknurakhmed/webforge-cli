'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Box, Typography, Container, Grid2, Button } from '@mui/material';
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
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Button component={Link} href="/" sx={{ color: '#6b7280', textTransform: 'none', mb: 1, pl: 0, '&:hover': { color: '#4f46e5', bgcolor: 'transparent' } }}>
          &larr; All Posts
        </Button>
        <Typography variant="h4" sx={{ fontWeight: 800, color: '#111827', mb: 0.5 }}>
          📂 {categoryName}
        </Typography>
        <Typography variant="body1" sx={{ color: '#6b7280' }}>
          {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} in this category
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', gap: 4, flexDirection: { xs: 'column', md: 'row' } }}>
        <Box sx={{ flex: 1 }}>
          {filteredPosts.length > 0 ? (
            <Grid2 container spacing={2}>
              {filteredPosts.map((post) => (
                <Grid2 size={{ xs: 12 }} key={post.id}>
                  <PostCard post={post} />
                </Grid2>
              ))}
            </Grid2>
          ) : (
            <Box sx={{ py: 6, textAlign: 'center' }}>
              <Typography variant="body1" sx={{ color: '#6b7280', mb: 2 }}>No articles found in this category.</Typography>
              <Button component={Link} href="/" variant="contained" sx={{ bgcolor: '#4f46e5', textTransform: 'none', fontWeight: 600, borderRadius: 2, '&:hover': { bgcolor: '#4338ca' } }}>
                View All Posts
              </Button>
            </Box>
          )}
        </Box>
        <BlogSidebar />
      </Box>
    </Container>
  );
}
