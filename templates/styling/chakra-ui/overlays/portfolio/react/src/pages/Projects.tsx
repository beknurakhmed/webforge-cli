import { useState } from 'react';
import { Box, Heading, Text, Flex, Button, SimpleGrid } from '@chakra-ui/react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const allCategories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];

function Projects() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <Box maxW="1100px" mx="auto" py={20} px={8}>
      <Heading as="h2" size="xl" textAlign="center" mb={2} color="gray.900">All Projects</Heading>
      <Text color="gray.500" textAlign="center" mb={8}>Browse my complete portfolio</Text>
      <Flex gap={2} justify="center" mb={8} flexWrap="wrap">
        {allCategories.map((cat) => (
          <Button
            key={cat}
            bg={active === cat ? '#4f46e5' : 'white'}
            color={active === cat ? 'white' : 'gray.500'}
            border="1px solid"
            borderColor={active === cat ? '#4f46e5' : 'gray.300'}
            px={4}
            py={2}
            borderRadius="full"
            fontSize="0.85rem"
            fontWeight={400}
            transition="all 0.15s"
            _hover={{ borderColor: '#4f46e5', color: active === cat ? 'white' : '#4f46e5' }}
            onClick={() => setActive(cat)}
          >
            {cat}
          </Button>
        ))}
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Projects;
