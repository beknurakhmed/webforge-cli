'use client';

import { Box, Flex, Text, HStack } from '@chakra-ui/react';

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  category: string;
  link: string;
  featured: boolean;
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Box
      bg="white"
      borderRadius="xl"
      overflow="hidden"
      border="1px solid"
      borderColor="gray.200"
      transition="transform 0.2s, box-shadow 0.2s"
      _hover={{ transform: 'translateY(-4px)', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
    >
      <Flex align="center" justify="center" fontSize="4rem" h="200px" bgGradient="linear-gradient(135deg, #eef2ff, #e0e7ff)">
        {project.image}
      </Flex>
      <Box p={5}>
        <Text fontSize="0.75rem" fontWeight={600} color="#4f46e5" textTransform="uppercase" letterSpacing="0.05em">{project.category}</Text>
        <Text fontSize="1.15rem" fontWeight={700} color="gray.900" mt={1} mb={1}>{project.title}</Text>
        <Text fontSize="0.9rem" color="gray.600" mb={4} lineClamp={2}>{project.description}</Text>
        <HStack gap={1.5} flexWrap="wrap" mb={4}>
          {project.tech.map((t) => (
            <Text key={t} bg="#eef2ff" color="#4f46e5" px={2} py={0.5} borderRadius="sm" fontSize="0.75rem" fontWeight={500}>{t}</Text>
          ))}
        </HStack>
        <Text as="a" href={project.link} target="_blank" rel="noopener noreferrer" color="#4f46e5" fontWeight={600} fontSize="0.9rem" _hover={{ textDecoration: 'underline' }}>
          View Project →
        </Text>
      </Box>
    </Box>
  );
}
