import { useParams, Link } from 'react-router-dom';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import PostCard from '../components/PostCard';
import { posts } from '../data/posts';

function Category() {
  const { slug } = useParams();
  const filtered = posts.filter(
    (p) => p.category.toLowerCase() === slug?.toLowerCase()
  );
  const categoryName = filtered.length > 0 ? filtered[0].category : slug;

  return (
    <Box maxW="720px" mx="auto">
      <Box
        as={Link}
        to="/"
        display="inline-block"
        color="#4f46e5"
        textDecoration="none"
        fontSize="0.9rem"
        mb={6}
        _hover={{ textDecoration: 'underline' }}
      >
        ← Back to Home
      </Box>
      <Heading as="h1" size="xl" fontWeight={700} color="gray.900" mb={6}>
        Category: {categoryName}
      </Heading>
      {filtered.length === 0 ? (
        <Text color="gray.500">No posts found in this category.</Text>
      ) : (
        <VStack gap={0} align="stretch">
          {filtered.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </VStack>
      )}
    </Box>
  );
}

export default Category;
