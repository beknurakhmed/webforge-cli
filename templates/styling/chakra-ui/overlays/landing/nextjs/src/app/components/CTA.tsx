'use client';

import { Box, Heading, Text, Button, VStack } from '@chakra-ui/react';

export function CTA() {
  return (
    <Box as="section" id="cta" bg="gray.50" py={20} px={8} textAlign="center">
      <VStack maxW="600px" mx="auto" gap={4}>
        <Heading as="h2" fontSize="2.5rem" fontWeight={700}>Ready to Get Started?</Heading>
        <Text color="gray.500" fontSize="lg" mb={4}>Join thousands of developers building amazing products.</Text>
        <Button bg="#4f46e5" color="white" px={10} py={6} borderRadius="lg" fontSize="lg" fontWeight={600} _hover={{ bg: '#4338ca' }}>
          Start Free Trial
        </Button>
        <Text fontSize="sm" color="gray.400">No credit card required</Text>
      </VStack>
    </Box>
  );
}
