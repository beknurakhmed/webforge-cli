import { Box, Heading, Text, Button, VStack } from '@chakra-ui/react';

export function CTA() {
  return (
    <Box as="section" id="cta" bg="gray.50" py={20} px={8} textAlign="center">
      <VStack maxW="600px" mx="auto" gap={4}>
        <Heading as="h2" fontSize="2.5rem" fontWeight={700} color="gray.900">
          Ready to Get Started?
        </Heading>
        <Text color="gray.500" fontSize="lg" mb={4}>
          Join thousands of developers who are building amazing products.
        </Text>
        <Button
          bg="#4f46e5"
          color="white"
          px={10}
          py={6}
          borderRadius="lg"
          fontSize="lg"
          fontWeight={600}
          border="2px solid"
          borderColor="#4f46e5"
          _hover={{ bg: '#4338ca', borderColor: '#4338ca' }}
        >
          Start Free Trial
        </Button>
        <Text fontSize="sm" color="gray.400" mt={1}>
          No credit card required
        </Text>
      </VStack>
    </Box>
  );
}
