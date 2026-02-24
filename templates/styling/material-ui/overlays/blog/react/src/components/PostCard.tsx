import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Box, Chip } from '@mui/material';
import type { Post } from '../data/posts';

interface PostCardProps {
  post: Post;
}

function PostCard({ post }: PostCardProps) {
  return (
    <Card
      component="article"
      sx={{
        display: 'flex',
        borderRadius: 3,
        overflow: 'hidden',
        transition: 'all 0.2s',
        '&:hover': { boxShadow: '0 8px 25px rgba(0,0,0,0.08)', transform: 'translateY(-2px)' },
      }}
    >
      <Box sx={{ fontSize: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 120, flexShrink: 0, bgcolor: '#f9fafb' }}>
        {post.image}
      </Box>
      <CardContent sx={{ flex: 1 }}>
        <Chip
          label={post.category}
          component={Link}
          to={`/category/${post.category.toLowerCase()}`}
          clickable
          size="small"
          sx={{ bgcolor: '#eef2ff', color: '#4f46e5', fontWeight: 600, fontSize: '0.7rem', mb: 1 }}
        />
        <Typography
          variant="h6"
          component={Link}
          to={`/post/${post.id}`}
          sx={{ textDecoration: 'none', color: '#111827', fontWeight: 600, display: 'block', mb: 0.5, '&:hover': { color: '#4f46e5' } }}
        >
          {post.title}
        </Typography>
        <Typography variant="body2" sx={{ color: '#6b7280', mb: 1.5 }}>
          {post.excerpt}
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, color: '#9ca3af', fontSize: '0.8rem' }}>
          <Typography variant="caption">By {post.author}</Typography>
          <Typography variant="caption">{post.date}</Typography>
          <Typography variant="caption">{post.readTime} read</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default PostCard;
