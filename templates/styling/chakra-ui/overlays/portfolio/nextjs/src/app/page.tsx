'use client';

import Link from 'next/link';
import { Box, Flex, Heading, Text, SimpleGrid } from '@chakra-ui/react';
import { ProjectCard, Project } from './components/ProjectCard';
import { SkillsGrid } from './components/SkillsGrid';

const projects: Project[] = [
  { id: 1, title: 'E-Commerce Platform', description: 'A full-featured online store with cart, checkout, and payment integration. Built with modern web technologies for optimal performance.', tech: ['React', 'Node.js', 'PostgreSQL'], image: '🛒', category: 'Web App', link: '#', featured: true },
  { id: 2, title: 'Task Management Dashboard', description: 'Real-time collaborative task management tool with drag-and-drop, notifications, and team features.', tech: ['Next.js', 'TypeScript', 'MongoDB'], image: '📋', category: 'SaaS', link: '#', featured: true },
  { id: 3, title: 'Weather Analytics App', description: 'Interactive weather visualization app with historical data analysis and forecasting capabilities.', tech: ['React', 'D3.js', 'Python'], image: '🌤️', category: 'Data Viz', link: '#', featured: true },
  { id: 4, title: 'Social Media Mobile App', description: 'Cross-platform social app with real-time messaging, stories, and content sharing features.', tech: ['React Native', 'Firebase', 'Redux'], image: '📱', category: 'Mobile', link: '#', featured: false },
  { id: 5, title: 'AI Content Generator', description: 'AI-powered tool for generating marketing copy, blog posts, and social media content automatically.', tech: ['Python', 'OpenAI', 'FastAPI'], image: '🤖', category: 'AI/ML', link: '#', featured: false },
  { id: 6, title: 'Portfolio Website Builder', description: 'Drag-and-drop portfolio builder with customizable themes, animations, and one-click deployment.', tech: ['Vue.js', 'Node.js', 'AWS'], image: '🎨', category: 'Web App', link: '#', featured: false },
];

const featuredProjects = projects.filter((p) => p.featured);

export default function HomePage() {
  return (
    <Box maxW="1100px" mx="auto" px={6}>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={12} alignItems="center" py={16}>
        <Box>
          <Text fontSize="1.1rem" color="#4f46e5" fontWeight={600} mb={2}>Hello, I am</Text>
          <Heading as="h1" fontSize={{ base: '2rem', md: '3rem' }} fontWeight={800} color="gray.900" lineHeight={1.1} mb={2}>{'{{projectName}}'}</Heading>
          <Text fontSize="1.35rem" color="gray.500" fontWeight={500} mb={4}>Full-Stack Developer & Designer</Text>
          <Text fontSize="1.05rem" color="gray.600" mb={8} maxW="500px">
            I build modern web applications with clean code and thoughtful design.
            Passionate about creating digital experiences that make a real impact.
          </Text>
          <Flex gap={4}>
            <Link href="/projects" style={{ textDecoration: 'none' }}>
              <Box as="span" display="inline-block" bg="#4f46e5" color="white" px={7} py={3} borderRadius="lg" fontWeight={600} _hover={{ bg: '#4338ca' }} transition="all 0.2s">View Projects</Box>
            </Link>
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <Box as="span" display="inline-block" bg="transparent" color="#4f46e5" px={7} py={3} borderRadius="lg" fontWeight={600} border="2px solid" borderColor="#4f46e5" _hover={{ bg: '#4f46e5', color: 'white' }} transition="all 0.2s">Get in Touch</Box>
            </Link>
          </Flex>
        </Box>
        <Flex align="center" justify="center">
          <Text fontSize="10rem">👨‍💻</Text>
        </Flex>
      </SimpleGrid>

      <Box py={16}>
        <Heading as="h2" fontSize="1.75rem" fontWeight={700} color="gray.900" textAlign="center">Featured Projects</Heading>
        <Text textAlign="center" color="gray.500" mt={2} mb={8}>A selection of my recent work and side projects</Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </SimpleGrid>
        <Box textAlign="center" mt={8}>
          <Link href="/projects" style={{ textDecoration: 'none' }}>
            <Box as="span" display="inline-block" bg="transparent" color="#4f46e5" px={7} py={3} borderRadius="lg" fontWeight={600} border="2px solid" borderColor="#4f46e5" _hover={{ bg: '#4f46e5', color: 'white' }} transition="all 0.2s">View All Projects →</Box>
          </Link>
        </Box>
      </Box>

      <SkillsGrid />

      <Box textAlign="center" py={16} px={8} bgGradient="linear-gradient(135deg, #4f46e5, #7c3aed)" borderRadius="xl" my={16} color="white">
        <Heading as="h2" fontSize="2rem" fontWeight={800} mb={3}>Let us Work Together</Heading>
        <Text fontSize="1.1rem" opacity={0.9} mb={6} maxW="500px" mx="auto">Have a project in mind? I am always open to discussing new opportunities and creative ideas.</Text>
        <Link href="/contact" style={{ textDecoration: 'none' }}>
          <Box as="span" display="inline-block" bg="white" color="#4f46e5" px={8} py={3.5} borderRadius="lg" fontWeight={600} fontSize="1.05rem" _hover={{ bg: 'gray.100' }} transition="all 0.2s">Start a Conversation</Box>
        </Link>
      </Box>
    </Box>
  );
}
