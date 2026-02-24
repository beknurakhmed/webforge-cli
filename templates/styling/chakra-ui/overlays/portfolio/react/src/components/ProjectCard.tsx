import { Box, Heading, Text, Flex, Badge } from '@chakra-ui/react';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Box
      border="1px solid"
      borderColor="gray.200"
      borderRadius="xl"
      overflow="hidden"
      transition="all 0.2s"
      _hover={{ boxShadow: 'lg', transform: 'translateY(-3px)' }}
    >
      <Box fontSize="3xl" textAlign="center" p={8} bg="gray.50">
        {project.image}
      </Box>
      <Box p={5}>
        <Heading as="h3" size="sm" fontWeight={600} mb={2} color="gray.900">
          {project.title}
        </Heading>
        <Text color="gray.500" fontSize="0.9rem" lineHeight={1.5} mb={4}>
          {project.description}
        </Text>
        <Flex flexWrap="wrap" gap={1.5}>
          {project.tags.map((tag, j) => (
            <Badge key={j} bg="#eef2ff" color="#4f46e5" px={2} py={0.5} borderRadius="sm" fontSize="0.75rem" fontWeight={500}>
              {tag}
            </Badge>
          ))}
        </Flex>
      </Box>
    </Box>
  );
}

export default ProjectCard;
