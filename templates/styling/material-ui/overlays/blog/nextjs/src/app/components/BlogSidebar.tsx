'use client';

import Link from 'next/link';
import { Box, Typography, Stack, Chip, TextField, Button, Card, CardContent } from '@mui/material';

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
    <Box component="aside" sx={{ width: { xs: '100%', md: 300 }, flexShrink: 0 }}>
      <Card sx={{ borderRadius: 3, mb: 2 }}>
        <CardContent sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, color: '#111827', mb: 2 }}>📂 Categories</Typography>
          <Stack spacing={1}>
            {categories.map((cat) => (
              <Link key={cat.slug} href={`/category/${cat.slug}`} style={{ textDecoration: 'none' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 0.5, px: 1, borderRadius: 1.5, '&:hover': { bgcolor: '#f3f4f6' }, cursor: 'pointer' }}>
                  <Typography variant="body2" sx={{ color: '#374151', fontWeight: 500 }}>{cat.name}</Typography>
                  <Chip label={cat.count} size="small" sx={{ bgcolor: '#f3f4f6', color: '#6b7280', fontWeight: 600, height: 24 }} />
                </Box>
              </Link>
            ))}
          </Stack>
        </CardContent>
      </Card>

      <Card sx={{ borderRadius: 3, mb: 2 }}>
        <CardContent sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, color: '#111827', mb: 2 }}>🔥 Popular Posts</Typography>
          <Stack spacing={1.5}>
            {popularPosts.map((post) => (
              <Link key={post.id} href={`/post/${post.id}`} style={{ textDecoration: 'none' }}>
                <Box sx={{ py: 0.5, '&:hover': { '& .post-title': { color: '#4f46e5' } }, cursor: 'pointer' }}>
                  <Typography className="post-title" variant="body2" sx={{ fontWeight: 500, color: '#111827', lineHeight: 1.4, transition: 'color 0.2s' }}>{post.title}</Typography>
                  <Typography variant="caption" sx={{ color: '#9ca3af' }}>{post.date}</Typography>
                </Box>
              </Link>
            ))}
          </Stack>
        </CardContent>
      </Card>

      <Card sx={{ borderRadius: 3, bgcolor: '#f9fafb' }}>
        <CardContent sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, color: '#111827', mb: 1 }}>📬 Newsletter</Typography>
          <Typography variant="body2" sx={{ color: '#6b7280', mb: 2 }}>Get the latest posts delivered to your inbox.</Typography>
          <TextField
            type="email"
            placeholder="your@email.com"
            size="small"
            fullWidth
            sx={{ mb: 1.5, '& .MuiOutlinedInput-root': { borderRadius: 2, bgcolor: '#ffffff' } }}
          />
          <Button
            variant="contained"
            fullWidth
            sx={{ bgcolor: '#4f46e5', textTransform: 'none', fontWeight: 600, borderRadius: 2, '&:hover': { bgcolor: '#4338ca' } }}
          >
            Subscribe
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
