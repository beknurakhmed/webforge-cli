import { Box, Text } from '@chakra-ui/react';

function BlogFooter() {
  return (
    <Box as="footer" borderTop="1px solid" borderColor="gray.200" py={8} textAlign="center">
      <Text color="gray.400" fontSize="0.875rem">
        &copy; 2025 {'{{projectName}}'}. Built with passion for the web.
      </Text>
    </Box>
  );
}

export default BlogFooter;
