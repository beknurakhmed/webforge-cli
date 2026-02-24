import { useParams, Link } from 'react-router-dom';
import { Box, Heading, Text, HStack } from '@chakra-ui/react';
import { posts } from '../data/posts';

function PostDetail() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <Box maxW="720px" mx="auto">
        <Text>Post not found.</Text>
        <Box as={Link} to="/" color="#4f46e5" textDecoration="none">Back to Home</Box>
      </Box>
    );
  }

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
        ← Back to Posts
      </Box>
      <Text fontSize="4xl" mb={4}>{post.image}</Text>
      <Box
        as={Link}
        to={`/category/${post.category.toLowerCase()}`}
        fontSize="0.75rem"
        color="#4f46e5"
        fontWeight={600}
        textTransform="uppercase"
        letterSpacing="0.05em"
        textDecoration="none"
        _hover={{ color: '#4338ca' }}
      >
        {post.category}
      </Box>
      <Heading as="h1" fontSize="2rem" fontWeight={800} color="gray.900" mt={2} mb={4}>
        {post.title}
      </Heading>
      <HStack gap={4} fontSize="0.8rem" color="gray.400" mb={8}>
        <Text>By {post.author}</Text>
        <Text>{post.date}</Text>
        <Text>{post.readTime} read</Text>
      </HStack>
      <Text color="gray.700" lineHeight={1.8} fontSize="1.05rem" mb={8}>
        {post.content}
      </Text>
      <Box bg="gray.50" borderRadius="xl" p={6} mt={8}>
        <Heading as="h3" size="sm" color="gray.900" mb={2}>
          About {post.author}
        </Heading>
        <Text color="gray.500" lineHeight={1.6}>
          A passionate developer writing about web technologies, best practices, and software engineering.
        </Text>
      </Box>
    </Box>
  );
}

export default PostDetail;
