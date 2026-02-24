import { NavLink } from 'react-router-dom';
import { Box, Flex, Heading, HStack } from '@chakra-ui/react';

function BlogHeader() {
  return (
    <Box as="header" borderBottom="1px solid" borderColor="gray.200">
      <Flex maxW="1100px" mx="auto" px={8} py={5} justify="space-between" align="center">
        <Heading as={NavLink} to="/" size="lg" color="gray.900" textDecoration="none">
          {'{{projectName}}'}
        </Heading>
        <HStack as="nav" gap={6}>
          <Box
            as={NavLink}
            to="/"
            end
            color="gray.500"
            fontWeight={500}
            textDecoration="none"
            _hover={{ color: '#4f46e5' }}
            css={{ '&.active': { color: '#4f46e5' } }}
          >
            Home
          </Box>
          <Box
            as={NavLink}
            to="/about"
            color="gray.500"
            fontWeight={500}
            textDecoration="none"
            _hover={{ color: '#4f46e5' }}
            css={{ '&.active': { color: '#4f46e5' } }}
          >
            About
          </Box>
        </HStack>
      </Flex>
    </Box>
  );
}

export default BlogHeader;
