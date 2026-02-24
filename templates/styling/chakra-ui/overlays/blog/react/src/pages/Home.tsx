import { SimpleGrid, VStack } from '@chakra-ui/react';
import PostCard from '../components/PostCard';
import BlogSidebar from '../components/BlogSidebar';
import { posts } from '../data/posts';

function Home() {
  return (
    <SimpleGrid columns={{ base: 1, lg: 2 }} gap={12} templateColumns={{ base: '1fr', lg: '1fr 300px' }}>
      <VStack gap={0} align="stretch">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </VStack>
      <BlogSidebar />
    </SimpleGrid>
  );
}

export default Home;
