'use client';

import Link from 'next/link';
import { Card, CardContent, Box, Typography, Chip } from '@mui/material';

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
      <Card sx={{
        borderRadius: 3,
        display: featured ? { xs: 'block', md: 'flex' } : 'flex',
        flexDirection: featured ? { xs: 'column', md: 'row' } : 'row',
        overflow: 'hidden',
        transition: 'box-shadow 0.2s',
        '&:hover': { boxShadow: 4 },
        height: '100%',
      }}>
        <Box sx={{
          bgcolor: '#f3f4f6',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: featured ? '4rem' : '2.5rem',
          minWidth: featured ? { xs: '100%', md: 300 } : 120,
          minHeight: featured ? { xs: 200, md: 'auto' } : 120,
          flexShrink: 0,
        }}>
          {post.image}
        </Box>
        <CardContent sx={{ p: featured ? 3 : 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            <Link href={`/category/${post.category.toLowerCase()}`} onClick={(e) => e.stopPropagation()} style={{ textDecoration: 'none' }}>
              <Chip label={post.category} size="small" sx={{ bgcolor: '#eef2ff', color: '#4f46e5', fontWeight: 600, cursor: 'pointer', '&:hover': { bgcolor: '#e0e7ff' } }} />
            </Link>
            <Typography variant="caption" sx={{ color: '#9ca3af' }}>{post.readTime}</Typography>
          </Box>
          <Typography variant={featured ? 'h5' : 'subtitle1'} sx={{ fontWeight: 700, color: '#111827', mb: 0.5, lineHeight: 1.3 }}>
            {post.title}
          </Typography>
          <Typography variant="body2" sx={{ color: '#6b7280', mb: 1.5, lineHeight: 1.6, display: featured ? 'block' : { xs: 'none', sm: 'block' } }}>
            {post.excerpt}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 'auto' }}>
            <Typography sx={{ fontSize: '1.1rem' }}>{post.authorAvatar}</Typography>
            <Typography variant="caption" sx={{ fontWeight: 500, color: '#374151' }}>{post.author}</Typography>
            <Typography variant="caption" sx={{ color: '#9ca3af' }}>{post.date}</Typography>
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
}
