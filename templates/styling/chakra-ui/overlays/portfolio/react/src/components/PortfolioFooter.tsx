import { Box, Flex, Link, Text } from '@chakra-ui/react';

function PortfolioFooter() {
  return (
    <Box as="footer" bg="gray.900" color="gray.400" py={8} textAlign="center" mt="auto">
      <Box maxW="1100px" mx="auto">
        <Flex gap={8} justify="center" mb={4}>
          <Link href="#" target="_blank" rel="noopener noreferrer" color="gray.400" textDecoration="none" _hover={{ color: 'white' }}>GitHub</Link>
          <Link href="#" color="gray.400" textDecoration="none" _hover={{ color: 'white' }}>LinkedIn</Link>
          <Link href="#" color="gray.400" textDecoration="none" _hover={{ color: 'white' }}>Twitter</Link>
        </Flex>
        <Text fontSize="0.85rem">
          &copy; 2025 {'{{projectName}}'}. All rights reserved.
        </Text>
      </Box>
    </Box>
  );
}

export default PortfolioFooter;
