import { Link } from 'react-router-dom';
import { Box, Heading, Text, Flex, Button, SimpleGrid } from '@chakra-ui/react';
import ProjectCard from '../components/ProjectCard';
import SkillsGrid from '../components/SkillsGrid';
import { projects } from '../data/projects';

function Home() {
  const featured = projects.slice(0, 3);

  return (
    <Box>
      <Box bgGradient="linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)" color="white" py={20} px={8}>
        <Box textAlign="center" maxW="700px" mx="auto">
          <Text fontSize="lg" color="#4f46e5" fontWeight={600}>Hi, I'm</Text>
          <Heading as="h1" fontSize={{ base: '2.5rem', md: '4rem' }} fontWeight={800} my={2}>
            {'{{projectName}}'}
          </Heading>
          <Text fontSize="xl" color="gray.400" mb={4}>Frontend Developer &amp; Software Engineer</Text>
          <Text color="gray.300" lineHeight={1.7} mb={8}>
            I craft pixel-perfect, user-centric web experiences with modern technologies.
            Passionate about clean code and great design.
          </Text>
          <Flex gap={4} justify="center" flexWrap="wrap">
            <Button as={Link} to="/projects" bg="#4f46e5" color="white" px={6} py={5} borderRadius="lg" fontWeight={600} border="2px solid" borderColor="#4f46e5" textDecoration="none" _hover={{ bg: '#4338ca', borderColor: '#4338ca' }}>
              View My Work
            </Button>
            <Button as={Link} to="/contact" bg="transparent" color="white" px={6} py={5} borderRadius="lg" fontWeight={600} border="2px solid" borderColor="gray.600" textDecoration="none" _hover={{ borderColor: 'white' }}>
              Get In Touch
            </Button>
          </Flex>
        </Box>
      </Box>

      <Box maxW="1100px" mx="auto" py={20} px={8}>
        <Heading as="h2" size="xl" textAlign="center" mb={2} color="gray.900">Featured Projects</Heading>
        <Text color="gray.500" textAlign="center" mb={12}>A selection of my recent work</Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </SimpleGrid>
      </Box>

      <Box bg="gray.50" py={20} px={8}>
        <Heading as="h2" size="xl" textAlign="center" mb={2} color="gray.900">Skills &amp; Technologies</Heading>
        <Text color="gray.500" textAlign="center" mb={12}>Technologies I work with daily</Text>
        <SkillsGrid />
      </Box>
    </Box>
  );
}

export default Home;
