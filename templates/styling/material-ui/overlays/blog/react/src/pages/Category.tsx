import { useParams, Link } from 'react-router-dom';
import { Box, Typography, Button, Stack } from '@mui/material';
import PostCard from '../components/PostCard';
import { posts } from '../data/posts';

function Category() {
  const { slug } = useParams();
  const filtered = posts.filter(
    (p) => p.category.toLowerCase() === slug?.toLowerCase()
  );
  const categoryName = filtered.length > 0 ? filtered[0].category : slug;

  return (
    <Box>
      <Button component={Link} to="/" sx={{ color: '#4f46e5', textTransform: 'none', fontWeight: 500, mb: 2 }}>
        &larr; Back to Home
      </Button>
      <Typography variant="h4" sx={{ fontWeight: 700, color: '#111827', mb: 3 }}>
        Category: {categoryName}
      </Typography>
      {filtered.length === 0 ? (
        <Typography variant="body1" sx={{ color: '#6b7280' }}>
          No posts found in this category.
        </Typography>
      ) : (
        <Stack spacing={2}>
          {filtered.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </Stack>
      )}
    </Box>
  );
}

export default Category;
