'use client';

import { Box, Flex, Heading, Text, SimpleGrid } from '@chakra-ui/react';

interface Skill {
  name: string;
  level: number;
  icon: string;
  category: string;
}

const skills: Skill[] = [
  { name: 'React', level: 95, icon: '⚛️', category: 'Frontend' },
  { name: 'TypeScript', level: 90, icon: '📘', category: 'Languages' },
  { name: 'Node.js', level: 88, icon: '🟢', category: 'Backend' },
  { name: 'Next.js', level: 92, icon: '▲', category: 'Frontend' },
  { name: 'CSS/Sass', level: 90, icon: '🎨', category: 'Frontend' },
  { name: 'Python', level: 80, icon: '🐍', category: 'Languages' },
  { name: 'PostgreSQL', level: 82, icon: '🐘', category: 'Backend' },
  { name: 'Docker', level: 75, icon: '🐳', category: 'DevOps' },
  { name: 'AWS', level: 78, icon: '☁️', category: 'DevOps' },
  { name: 'Git', level: 93, icon: '📂', category: 'Tools' },
  { name: 'Figma', level: 85, icon: '🖌️', category: 'Design' },
  { name: 'GraphQL', level: 80, icon: '📊', category: 'Backend' },
];

export function SkillsGrid() {
  return (
    <Box py={16}>
      <Heading as="h2" fontSize="1.75rem" fontWeight={700} color="gray.900" textAlign="center">Skills & Technologies</Heading>
      <Text textAlign="center" color="gray.500" mt={2} mb={8}>Tools and technologies I work with on a daily basis</Text>
      <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 6 }} gap={4}>
        {skills.map((skill) => (
          <Box key={skill.name} bg="white" p={5} borderRadius="xl" border="1px solid" borderColor="gray.200">
            <Flex justify="space-between" align="center" mb={2}>
              <Text fontSize="1.5rem">{skill.icon}</Text>
              <Text fontSize="0.7rem" fontWeight={600} color="gray.500" textTransform="uppercase">{skill.category}</Text>
            </Flex>
            <Text fontSize="0.95rem" fontWeight={600} color="gray.900" mb={2}>{skill.name}</Text>
            <Box w="100%" h="6px" bg="gray.100" borderRadius="full" overflow="hidden" mb={1}>
              <Box h="100%" bgGradient="linear-gradient(90deg, #4f46e5, #818cf8)" borderRadius="full" style={{ width: `${skill.level}%` }} transition="width 0.5s ease" />
            </Box>
            <Text fontSize="0.75rem" color="gray.500" fontWeight={600}>{skill.level}%</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
