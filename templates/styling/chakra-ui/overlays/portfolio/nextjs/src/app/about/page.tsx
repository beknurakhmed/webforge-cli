'use client';

import Link from 'next/link';
import { Box, Flex, Heading, Text, SimpleGrid, VStack } from '@chakra-ui/react';
import { SkillsGrid } from '../components/SkillsGrid';

const experience = [
  { role: 'Senior Full-Stack Developer', company: 'TechCorp Inc.', period: '2022 - Present', description: 'Leading development of cloud-native applications serving 50K+ users. Architecting microservices and mentoring junior developers.', icon: '🏢' },
  { role: 'Frontend Developer', company: 'DesignStudio Co.', period: '2020 - 2022', description: 'Built responsive web applications and design systems. Improved page load performance by 40% through optimization.', icon: '💻' },
  { role: 'Junior Developer', company: 'StartupXYZ', period: '2018 - 2020', description: 'Full-stack development for a SaaS platform. Implemented features used by thousands of customers daily.', icon: '🚀' },
];

const education = [
  { degree: 'M.S. Computer Science', school: 'State University', year: '2018', icon: '🎓' },
  { degree: 'B.S. Software Engineering', school: 'Tech Institute', year: '2016', icon: '📚' },
];

export default function AboutPage() {
  return (
    <Box maxW="900px" mx="auto" px={6} py={8}>
      <Box textAlign="center" mb={12}>
        <Text fontSize="5rem" mb={4}>👨‍💻</Text>
        <Heading as="h1" fontSize="2rem" fontWeight={800} color="gray.900" mb={4}>About Me</Heading>
        <Text fontSize="1.1rem" color="gray.600" maxW="600px" mx="auto">
          I am a full-stack developer with over 6 years of experience building web applications.
          I am passionate about clean code, user experience, and turning complex problems into simple,
          elegant solutions.
        </Text>
      </Box>

      <Box mb={12}>
        <Heading as="h2" fontSize="1.5rem" fontWeight={700} color="gray.900" mb={6}>💼 Experience</Heading>
        <VStack gap={6} align="stretch">
          {experience.map((exp, i) => (
            <Flex key={i} gap={5} bg="white" p={6} borderRadius="xl" border="1px solid" borderColor="gray.200">
              <Text fontSize="2rem" flexShrink={0}>{exp.icon}</Text>
              <Box>
                <Text fontSize="1.1rem" fontWeight={700} color="gray.900">{exp.role}</Text>
                <Text color="#4f46e5" fontWeight={600} fontSize="0.9rem">{exp.company}</Text>
                <Text fontSize="0.8rem" color="gray.500" mb={2}>{exp.period}</Text>
                <Text fontSize="0.9rem" color="gray.600">{exp.description}</Text>
              </Box>
            </Flex>
          ))}
        </VStack>
      </Box>

      <Box mb={12}>
        <Heading as="h2" fontSize="1.5rem" fontWeight={700} color="gray.900" mb={6}>🎓 Education</Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={5}>
          {education.map((edu, i) => (
            <Box key={i} bg="white" p={6} borderRadius="xl" border="1px solid" borderColor="gray.200" textAlign="center">
              <Text fontSize="2.5rem" mb={3}>{edu.icon}</Text>
              <Text fontWeight={700} color="gray.900">{edu.degree}</Text>
              <Text fontSize="0.9rem" color="gray.600">{edu.school}</Text>
              <Text fontSize="0.85rem" color="gray.500">{edu.year}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      <SkillsGrid />

      <Box textAlign="center" py={12} bg="white" borderRadius="xl" border="1px solid" borderColor="gray.200">
        <Heading as="h2" fontSize="1.5rem" fontWeight={700} color="gray.900" mb={2}>Want to work together?</Heading>
        <Text color="gray.500" mb={6}>I am always interested in hearing about new projects and opportunities.</Text>
        <Link href="/contact" style={{ textDecoration: 'none' }}>
          <Box as="span" display="inline-block" bg="#4f46e5" color="white" px={8} py={3.5} borderRadius="lg" fontWeight={600} fontSize="1.05rem" _hover={{ bg: '#4338ca' }} transition="all 0.2s">Get in Touch</Box>
        </Link>
      </Box>
    </Box>
  );
}
