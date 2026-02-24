import { Box, Flex, Heading, Text, Link, VStack, HStack } from '@chakra-ui/react';

export function Footer() {
  return (
    <Box as="footer" bg="gray.900" color="gray.400" pt={12} pb={6} px={8} mt="auto">
      <Flex maxW="1200px" mx="auto" justify="space-between" gap={12} flexWrap="wrap">
        <Box>
          <Heading as="h3" size="md" color="white" mb={2}>
            {'{{projectName}}'}
          </Heading>
          <Text>Your one-stop shop for quality products.</Text>
        </Box>
        <HStack gap={12} align="flex-start">
          <VStack align="flex-start" gap={2}>
            <Heading as="h4" size="xs" color="white" textTransform="uppercase" mb={1}>
              Shop
            </Heading>
            <Link href="#" color="gray.400" _hover={{ color: 'white' }} textDecoration="none" fontSize="0.9rem">All Products</Link>
            <Link href="#" color="gray.400" _hover={{ color: 'white' }} textDecoration="none" fontSize="0.9rem">New Arrivals</Link>
            <Link href="#" color="gray.400" _hover={{ color: 'white' }} textDecoration="none" fontSize="0.9rem">Sale</Link>
          </VStack>
          <VStack align="flex-start" gap={2}>
            <Heading as="h4" size="xs" color="white" textTransform="uppercase" mb={1}>
              Support
            </Heading>
            <Link href="#" color="gray.400" _hover={{ color: 'white' }} textDecoration="none" fontSize="0.9rem">FAQ</Link>
            <Link href="#" color="gray.400" _hover={{ color: 'white' }} textDecoration="none" fontSize="0.9rem">Shipping</Link>
            <Link href="#" color="gray.400" _hover={{ color: 'white' }} textDecoration="none" fontSize="0.9rem">Returns</Link>
          </VStack>
        </HStack>
      </Flex>
      <Box borderTop="1px solid" borderColor="gray.700" mt={8} pt={4} textAlign="center" maxW="1200px" mx="auto">
        <Text fontSize="0.8rem" color="gray.500">
          &copy; {new Date().getFullYear()} {'{{projectName}}'}. All rights reserved.
        </Text>
      </Box>
    </Box>
  );
}
