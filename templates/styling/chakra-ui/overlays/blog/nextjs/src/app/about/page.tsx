'use client';

import { Box, Heading, Text, SimpleGrid, Flex, VStack } from '@chakra-ui/react';

const team = [
  { name: 'Alex Rivera', role: 'Lead Writer & Editor', bio: 'Full-stack developer with 10+ years of experience. Passionate about modern web technologies and developer education.', avatar: '👨‍💻' },
  { name: 'Priya Sharma', role: 'Design Writer', bio: 'UI/UX designer who loves translating complex design concepts into accessible, practical advice.', avatar: '👩‍🎨' },
  { name: 'Marcus Chen', role: 'Technical Writer', bio: 'Software architect specializing in scalable systems and design patterns. Writes about architecture and best practices.', avatar: '👨' },
  { name: 'Sofia Andersen', role: 'Tutorial Creator', bio: 'Frontend developer and educator. Creates in-depth tutorials that make complex topics approachable.', avatar: '👩' },
];

export default function AboutPage() {
  return (
    <Box maxW="800px" mx="auto" px={6} py={8}>
      <Box textAlign="center" mb={12}>
        <Heading as="h1" fontSize="2rem" fontWeight={800} color="gray.900" mb={3}>About {'{{projectName}}'}</Heading>
        <Text fontSize="1.1rem" color="gray.500" maxW="600px" mx="auto">We are a team of passionate developers and designers sharing knowledge about modern web development, design, and technology.</Text>
      </Box>

      <Box mb={10}>
        <Heading as="h2" size="lg" color="gray.900" mb={4}>Our Mission</Heading>
        <Text color="gray.600" mb={3}>We believe in making technology accessible to everyone. Our articles combine practical tutorials with in-depth analysis to help developers at every level grow their skills and stay current with the latest trends.</Text>
      </Box>

      <Box mb={10}>
        <Heading as="h2" size="lg" color="gray.900" mb={4}>Meet the Team</Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
          {team.map((member) => (
            <Box key={member.name} bg="white" p={6} borderRadius="xl" border="1px solid" borderColor="gray.200" textAlign="center">
              <Text fontSize="3rem" mb={3}>{member.avatar}</Text>
              <Text fontWeight={700} color="gray.900">{member.name}</Text>
              <Text fontSize="0.8rem" color="#4f46e5" fontWeight={600} mb={2}>{member.role}</Text>
              <Text fontSize="0.85rem" color="gray.500">{member.bio}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      <Box mb={10}>
        <Heading as="h2" size="lg" color="gray.900" mb={4}>Get In Touch</Heading>
        <Text color="gray.600" mb={4}>Have a suggestion for a topic? Want to contribute? We would love to hear from you.</Text>
        <Flex gap={8} flexWrap="wrap">
          <Flex align="center" gap={2} fontSize="0.95rem">
            <Text>📧</Text>
            <Text>hello@{'{{projectName}}'}.com</Text>
          </Flex>
          <Flex align="center" gap={2} fontSize="0.95rem">
            <Text>🐦</Text>
            <Text>@{'{{projectName}}'}</Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
