import { Box, Heading, Text, SimpleGrid } from '@chakra-ui/react';

const features = [
  {
    icon: '⚡',
    title: 'Lightning Fast',
    description: 'Optimized for performance with lazy loading, code splitting, and modern build tools.',
  },
  {
    icon: '🎨',
    title: 'Beautiful Design',
    description: 'Clean, modern UI with responsive layouts that look great on any device.',
  },
  {
    icon: '🔒',
    title: 'Secure by Default',
    description: 'Built with security best practices including HTTPS, CSP headers, and input validation.',
  },
  {
    icon: '🧩',
    title: 'Modular Architecture',
    description: 'Component-based structure makes it easy to customize and extend functionality.',
  },
  {
    icon: '📱',
    title: 'Mobile First',
    description: 'Designed for mobile devices first, then scaled up for tablets and desktops.',
  },
  {
    icon: '🚀',
    title: 'Easy Deployment',
    description: 'Deploy anywhere — Vercel, Netlify, AWS, or your own server in minutes.',
  },
];

export function Features() {
  return (
    <Box as="section" id="features" py={20} px={8} maxW="1200px" mx="auto" textAlign="center">
      <Heading as="h2" fontSize="2.5rem" fontWeight={700} mb={2} color="gray.900">
        Features
      </Heading>
      <Text color="gray.500" fontSize="lg" mb={12}>
        Everything you need to build a modern web application
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8} textAlign="left">
        {features.map((feature, index) => (
          <Box
            key={index}
            p={8}
            borderRadius="xl"
            border="1px solid"
            borderColor="gray.200"
            transition="all 0.2s"
            _hover={{ boxShadow: 'lg', transform: 'translateY(-2px)' }}
          >
            <Text fontSize="2xl" mb={4}>{feature.icon}</Text>
            <Heading as="h3" size="md" fontWeight={600} mb={2} color="gray.900">
              {feature.title}
            </Heading>
            <Text color="gray.500" lineHeight={1.6}>
              {feature.description}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
