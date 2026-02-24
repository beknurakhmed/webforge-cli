import { useParams, Link } from 'react-router-dom';
import { Box, Typography, Button, Chip, Card, CardContent, Divider } from '@mui/material';
import { posts } from '../data/posts';

function PostDetail() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <Box>
        <Typography variant="body1">Post not found.</Typography>
        <Button component={Link} to="/" sx={{ color: '#4f46e5', textTransform: 'none' }}>Back to Home</Button>
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: 720, mx: 'auto' }}>
      <Button component={Link} to="/" sx={{ color: '#4f46e5', textTransform: 'none', fontWeight: 500, mb: 3 }}>
        &larr; Back to Posts
      </Button>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h2" sx={{ mb: 2 }}>{post.image}</Typography>
        <Chip
          label={post.category}
          component={Link}
          to={`/category/${post.category.toLowerCase()}`}
          clickable
          size="small"
          sx={{ bgcolor: '#eef2ff', color: '#4f46e5', fontWeight: 600, mb: 2 }}
        />
        <Typography variant="h4" sx={{ fontWeight: 700, color: '#111827', mb: 2 }}>
          {post.title}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, color: '#9ca3af' }}>
          <Typography variant="body2">By {post.author}</Typography>
          <Typography variant="body2">{post.date}</Typography>
          <Typography variant="body2">{post.readTime} read</Typography>
        </Box>
      </Box>
      <Typography variant="body1" sx={{ color: '#374151', lineHeight: 1.8, mb: 4 }}>
        {post.content}
      </Typography>
      <Divider sx={{ my: 3 }} />
      <Card sx={{ borderRadius: 3, bgcolor: '#f9fafb' }}>
        <CardContent sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, color: '#111827', mb: 1 }}>
            About {post.author}
          </Typography>
          <Typography variant="body2" sx={{ color: '#6b7280' }}>
            A passionate developer writing about web technologies, best practices, and software engineering.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default PostDetail;
