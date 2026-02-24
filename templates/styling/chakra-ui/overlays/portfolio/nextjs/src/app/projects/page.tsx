'use client';

import { useState } from 'react';
import { Box, Heading, Text, Flex, Button, SimpleGrid } from '@chakra-ui/react';
import { ProjectCard, Project } from '../components/ProjectCard';

const projects: Project[] = [
  { id: 1, title: 'E-Commerce Platform', description: 'A full-featured online store with cart, checkout, and payment integration. Built with modern web technologies for optimal performance.', tech: ['React', 'Node.js', 'PostgreSQL'], image: '🛒', category: 'Web App', link: '#', featured: true },
  { id: 2, title: 'Task Management Dashboard', description: 'Real-time collaborative task management tool with drag-and-drop, notifications, and team features.', tech: ['Next.js', 'TypeScript', 'MongoDB'], image: '📋', category: 'SaaS', link: '#', featured: true },
  { id: 3, title: 'Weather Analytics App', description: 'Interactive weather visualization app with historical data analysis and forecasting capabilities.', tech: ['React', 'D3.js', 'Python'], image: '🌤️', category: 'Data Viz', link: '#', featured: true },
  { id: 4, title: 'Social Media Mobile App', description: 'Cross-platform social app with real-time messaging, stories, and content sharing features.', tech: ['React Native', 'Firebase', 'Redux'], image: '📱', category: 'Mobile', link: '#', featured: false },
  { id: 5, title: 'AI Content Generator', description: 'AI-powered tool for generating marketing copy, blog posts, and social media content automatically.', tech: ['Python', 'OpenAI', 'FastAPI'], image: '🤖', category: 'AI/ML', link: '#', featured: false },
  { id: 6, title: 'Portfolio Website Builder', description: 'Drag-and-drop portfolio builder with customizable themes, animations, and one-click deployment.', tech: ['Vue.js', 'Node.js', 'AWS'], image: '🎨', category: 'Web App', link: '#', featured: false },
];

const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <Box maxW="1100px" mx="auto" px={6} py={8}>
      <Box textAlign="center" mb={8}>
        <Heading as="h1" fontSize="2rem" fontWeight={800} color="gray.900">All Projects</Heading>
        <Text color="gray.500" mt={2}>A complete collection of my work, side projects, and experiments.</Text>
      </Box>

      <Flex justify="center" gap={2} mb={8} flexWrap="wrap">
        {categories.map((cat) => (
          <Button
            key={cat}
            px={5}
            py={2}
            borderRadius="full"
            fontWeight={500}
            fontSize="0.85rem"
            bg={activeCategory === cat ? '#4f46e5' : 'white'}
            color={activeCategory === cat ? 'white' : 'gray.600'}
            border="2px solid"
            borderColor={activeCategory === cat ? '#4f46e5' : 'gray.200'}
            _hover={{ bg: activeCategory === cat ? '#4338ca' : 'gray.50', borderColor: '#4f46e5' }}
            onClick={() => setActiveCategory(cat)}
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

      {filtered.length === 0 && (
        <Box textAlign="center" py={12} color="gray.500">
          <Text>No projects found in this category.</Text>
        </Box>
      )}
    </Box>
  );
}
