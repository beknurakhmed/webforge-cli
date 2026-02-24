import { Link } from 'react-router-dom';
import { Flex, Box, Text, Heading, HStack } from '@chakra-ui/react';
import type { Post } from '../data/posts';

interface PostCardProps {
  post: Post;
}

function PostCard({ post }: PostCardProps) {
  return (
    <Flex as="article" gap={6} py={6} borderBottom="1px solid" borderColor="gray.100">
      <Box fontSize="3xl" w="80px" textAlign="center" flexShrink={0}>
        {post.image}
      </Box>
      <Box flex={1}>
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
        <Box as={Link} to={`/post/${post.id}`} textDecoration="none" display="block">
          <Heading as="h2" size="md" fontWeight={700} color="gray.900" mt={1} mb={2} _hover={{ color: '#4f46e5' }}>
            {post.title}
          </Heading>
        </Box>
        <Text color="gray.500" lineHeight={1.6} mb={3}>
          {post.excerpt}
        </Text>
        <HStack gap={4} fontSize="0.8rem" color="gray.400">
          <Text>By {post.author}</Text>
          <Text>{post.date}</Text>
          <Text>{post.readTime} read</Text>
        </HStack>
      </Box>
    </Flex>
  );
}

export default PostCard;
