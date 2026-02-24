import { Link } from 'react-router-dom';
import { Box, Heading, Text, Flex, Input, Button, VStack } from '@chakra-ui/react';
import { categories } from '../data/posts';

function BlogSidebar() {
  return (
    <VStack as="aside" gap={8} align="stretch">
      <Box bg="gray.50" p={6} borderRadius="xl">
        <Heading as="h3" size="sm" fontWeight={600} mb={3} color="gray.900">
          Categories
        </Heading>
        <Flex flexWrap="wrap" gap={2}>
          {categories.map((cat) => (
            <Box
              key={cat}
              as={Link}
              to={`/category/${cat.toLowerCase()}`}
              bg="white"
              border="1px solid"
              borderColor="gray.200"
              px={3}
              py={1}
              borderRadius="full"
              fontSize="0.8rem"
              color="gray.700"
              textDecoration="none"
              transition="all 0.15s"
              _hover={{ borderColor: '#4f46e5', color: '#4f46e5' }}
            >
              {cat}
            </Box>
          ))}
        </Flex>
      </Box>
      <Box bg="gray.50" p={6} borderRadius="xl">
        <Heading as="h3" size="sm" fontWeight={600} mb={3} color="gray.900">
          Newsletter
        </Heading>
        <Text color="gray.500" fontSize="0.9rem" lineHeight={1.5} mb={3}>
          Subscribe to get the latest posts delivered to your inbox.
        </Text>
        <Input
          type="email"
          placeholder="your@email.com"
          border="1px solid"
          borderColor="gray.300"
          borderRadius="md"
          fontSize="0.9rem"
          mb={2}
          px={3}
          py={2}
        />
        <Button w="100%" bg="#4f46e5" color="white" fontWeight={600} borderRadius="md" _hover={{ bg: '#4338ca' }}>
          Subscribe
        </Button>
      </Box>
    </VStack>
  );
}

export default BlogSidebar;
