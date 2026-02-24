import { Box, Heading, Text, SimpleGrid, VStack, Flex, Input, Button } from '@chakra-ui/react';

function Contact() {
  return (
    <Box maxW="900px" mx="auto" py={16} px={8}>
      <Heading as="h2" size="xl" textAlign="center" mb={2} color="gray.900">Get In Touch</Heading>
      <Text color="gray.500" textAlign="center" mb={8}>Have a project in mind? Let's work together.</Text>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={12} templateColumns={{ base: '1fr', md: '1fr 280px' }}>
        <VStack as="form" gap={5} align="stretch" onSubmit={(e: React.FormEvent) => e.preventDefault()}>
          <SimpleGrid columns={2} gap={4}>
            <Box>
              <Text as="label" htmlFor="name" display="block" fontSize="0.85rem" fontWeight={600} color="gray.700" mb={1}>Name</Text>
              <Input id="name" type="text" placeholder="Your name" border="1px solid" borderColor="gray.300" borderRadius="lg" fontSize="0.9rem" px={3} py={2} _focus={{ borderColor: '#4f46e5', boxShadow: '0 0 0 2px rgba(79, 70, 229, 0.15)' }} />
            </Box>
            <Box>
              <Text as="label" htmlFor="email" display="block" fontSize="0.85rem" fontWeight={600} color="gray.700" mb={1}>Email</Text>
              <Input id="email" type="email" placeholder="your@email.com" border="1px solid" borderColor="gray.300" borderRadius="lg" fontSize="0.9rem" px={3} py={2} _focus={{ borderColor: '#4f46e5', boxShadow: '0 0 0 2px rgba(79, 70, 229, 0.15)' }} />
            </Box>
          </SimpleGrid>
          <Box>
            <Text as="label" htmlFor="subject" display="block" fontSize="0.85rem" fontWeight={600} color="gray.700" mb={1}>Subject</Text>
            <Input id="subject" type="text" placeholder="Project inquiry" border="1px solid" borderColor="gray.300" borderRadius="lg" fontSize="0.9rem" px={3} py={2} _focus={{ borderColor: '#4f46e5', boxShadow: '0 0 0 2px rgba(79, 70, 229, 0.15)' }} />
          </Box>
          <Box>
            <Text as="label" htmlFor="message" display="block" fontSize="0.85rem" fontWeight={600} color="gray.700" mb={1}>Message</Text>
            <Box
              as="textarea"
              id="message"
              rows={5}
              placeholder="Tell me about your project..."
              w="100%"
              border="1px solid"
              borderColor="gray.300"
              borderRadius="lg"
              fontSize="0.9rem"
              px={3}
              py={2}
              fontFamily="inherit"
              css={{ resize: 'vertical', '&:focus': { borderColor: '#4f46e5', outline: 'none', boxShadow: '0 0 0 2px rgba(79, 70, 229, 0.15)' } }}
            />
          </Box>
          <Button type="submit" bg="#4f46e5" color="white" px={6} py={5} borderRadius="lg" fontWeight={600} border="2px solid" borderColor="#4f46e5" _hover={{ bg: '#4338ca', borderColor: '#4338ca' }} alignSelf="flex-start">
            Send Message
          </Button>
        </VStack>
        <Box pt={2}>
          <Heading as="h3" size="sm" fontWeight={600} color="gray.900" mb={6}>Contact Info</Heading>
          <VStack gap={5} align="stretch">
            <Flex gap={3} align="center">
              <Text fontSize="xl">📧</Text>
              <Text color="gray.700">hello@developer.com</Text>
            </Flex>
            <Flex gap={3} align="center">
              <Text fontSize="xl">📍</Text>
              <Text color="gray.700">San Francisco, CA</Text>
            </Flex>
            <Flex gap={3} align="center">
              <Text fontSize="xl">🔗</Text>
              <Text color="gray.700">github.com/developer</Text>
            </Flex>
          </VStack>
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export default Contact;
