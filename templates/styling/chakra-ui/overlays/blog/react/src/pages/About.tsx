import { Box, Heading, Text, Flex, VStack } from '@chakra-ui/react';

function About() {
  return (
    <Box maxW="720px" mx="auto">
      <Heading as="h1" fontSize="2rem" fontWeight={800} color="gray.900" mb={4}>
        About This Blog
      </Heading>
      <Text color="gray.700" lineHeight={1.7} fontSize="1.05rem" mb={8}>
        A blog dedicated to modern web development, covering topics from frontend frameworks
        to backend architectures and everything in between.
      </Text>
      <Flex gap={6} bg="gray.50" borderRadius="xl" p={8} mb={8} flexDirection={{ base: 'column', md: 'row' }}>
        <Text fontSize="3xl" flexShrink={0}>✍️</Text>
        <Box>
          <Heading as="h2" size="md" color="gray.900" mb={1}>Jane Developer</Heading>
          <Text color="#4f46e5" fontWeight={600} mb={2}>Senior Software Engineer</Text>
          <Text color="gray.500" lineHeight={1.6}>
            With over 8 years of experience building web applications, I write about
            the tools, techniques, and practices that help developers build better software.
          </Text>
        </Box>
      </Flex>
      <Box>
        <Heading as="h2" size="md" color="gray.900" mb={2}>Get in Touch</Heading>
        <Text color="gray.500" mb={4}>Have a question or want to collaborate? Reach out anytime.</Text>
        <VStack as="ul" align="flex-start" gap={2} listStyleType="none" p={0} color="gray.700">
          <li>Email: hello@devblog.com</li>
          <li>GitHub: @janedev</li>
          <li>Twitter: @janedev</li>
        </VStack>
      </Box>
    </Box>
  );
}

export default About;
