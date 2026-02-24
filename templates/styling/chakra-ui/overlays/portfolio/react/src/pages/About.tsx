import { Box, Heading, Text, Flex, VStack } from '@chakra-ui/react';
import SkillsGrid from '../components/SkillsGrid';

const timeline = [
  { year: '2024 - Present', role: 'Senior Frontend Developer', company: 'Tech Corp', desc: 'Leading frontend architecture and mentoring junior developers.' },
  { year: '2022 - 2024', role: 'Frontend Developer', company: 'StartupXYZ', desc: 'Built and maintained multiple React applications from scratch.' },
  { year: '2020 - 2022', role: 'Junior Developer', company: 'Web Agency', desc: 'Developed responsive websites and learned modern frameworks.' },
];

function About() {
  return (
    <Box maxW="800px" mx="auto" py={16} px={8}>
      <Heading as="h2" size="xl" textAlign="center" mb={2} color="gray.900">About Me</Heading>
      <Text color="gray.500" textAlign="center" mb={12}>My journey as a developer</Text>

      <Flex gap={6} bg="gray.50" p={8} borderRadius="xl" mb={10} flexDirection={{ base: 'column', md: 'row' }} alignItems={{ base: 'center', md: 'flex-start' }}>
        <Text fontSize="3xl" flexShrink={0}>👨‍💻</Text>
        <Text color="gray.700" lineHeight={1.7}>
          I am a passionate software engineer with a love for building beautiful, performant
          web applications. With expertise in modern JavaScript frameworks and a keen eye
          for design, I bridge the gap between functionality and aesthetics.
        </Text>
      </Flex>

      <Heading as="h3" size="md" fontWeight={700} color="gray.900" mt={8} mb={4}>Experience</Heading>
      <VStack gap={6} align="stretch">
        {timeline.map((item, i) => (
          <Box key={i} borderLeft="3px solid" borderColor="#4f46e5" pl={5}>
            <Text fontSize="0.8rem" color="#4f46e5" fontWeight={600}>{item.year}</Text>
            <Heading as="h4" size="sm" color="gray.900" my={1}>{item.role}</Heading>
            <Text fontSize="0.9rem" color="gray.500">{item.company}</Text>
            <Text color="gray.700" fontSize="0.9rem" mt={1}>{item.desc}</Text>
          </Box>
        ))}
      </VStack>

      <Heading as="h3" size="md" fontWeight={700} color="gray.900" mt={10} mb={4}>Skills</Heading>
      <SkillsGrid />
    </Box>
  );
}

export default About;
