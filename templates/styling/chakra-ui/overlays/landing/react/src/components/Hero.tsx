import { Box, Flex, Heading, Text, Button, HStack, Link } from '@chakra-ui/react';

export function Hero() {
  return (
    <Box as="header" bgGradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)" color="white" pb={16}>
      <Flex as="nav" justify="space-between" align="center" maxW="1200px" mx="auto" px={8} py={4}>
        <Heading size="lg" color="white">{'{{projectName}}'}</Heading>
        <HStack gap={8} display={{ base: 'none', md: 'flex' }}>
          <Link href="#features" color="whiteAlpha.900" textDecoration="none" fontWeight={500} _hover={{ color: 'white' }}>Features</Link>
          <Link href="#cta" color="whiteAlpha.900" textDecoration="none" fontWeight={500} _hover={{ color: 'white' }}>Pricing</Link>
          <Link href="#contact" color="whiteAlpha.900" textDecoration="none" fontWeight={500} _hover={{ color: 'white' }}>Contact</Link>
        </HStack>
      </Flex>
      <Box textAlign="center" px={8} py={16} maxW="800px" mx="auto">
        <Heading as="h1" fontSize={{ base: '2.5rem', md: '3.5rem' }} fontWeight={800} mb={6} lineHeight={1.1}>
          Build Something Amazing
        </Heading>
        <Text fontSize="xl" opacity={0.9} mb={8} lineHeight={1.6}>
          A modern landing page template to kickstart your next project. Fast, responsive, and ready for production.
        </Text>
        <HStack gap={4} justify="center" flexWrap="wrap">
          <Button bg="#4f46e5" color="white" px={6} py={5} borderRadius="lg" fontWeight={600} border="2px solid" borderColor="#4f46e5" _hover={{ bg: '#4338ca', borderColor: '#4338ca' }}>
            Get Started
          </Button>
          <Button bg="transparent" color="white" px={6} py={5} borderRadius="lg" fontWeight={600} border="2px solid" borderColor="whiteAlpha.500" _hover={{ bg: 'whiteAlpha.100', borderColor: 'white' }}>
            Learn More
          </Button>
        </HStack>
      </Box>
    </Box>
  );
}
