import { Box, Stack } from '@mui/material';
import PostCard from '../components/PostCard';
import BlogSidebar from '../components/BlogSidebar';
import { posts } from '../data/posts';

function Home() {
  return (
    <Box sx={{ display: 'flex', gap: 4 }}>
      <Stack spacing={2} sx={{ flex: 1 }}>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </Stack>
      <BlogSidebar />
    </Box>
  );
}

export default Home;
