'use client';

import Link from 'next/link';
import { Box, Typography, Container, Grid2, Button } from '@mui/material';
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
    <Box>
      <Box sx={{ background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)', color: '#ffffff', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Grid2 container spacing={4} alignItems="center">
            <Grid2 size={{ xs: 12, md: 7 }}>
              <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)', mb: 1, fontWeight: 500 }}>
                Hello, I am
              </Typography>
              <Typography variant="h2" sx={{ fontWeight: 800, mb: 1, lineHeight: 1.1 }}>
                {'{{projectName}}'}
              </Typography>
              <Typography variant="h5" sx={{ color: 'rgba(255,255,255,0.9)', fontWeight: 400, mb: 2 }}>
                Full-Stack Developer & Designer
              </Typography>
              <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)', mb: 4, maxWidth: 500, lineHeight: 1.7 }}>
                I build modern web applications with clean code and thoughtful design.
                Passionate about creating digital experiences that make a real impact.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button
                  component={Link}
                  href="/projects"
                  variant="contained"
                  sx={{ bgcolor: '#ffffff', color: '#4f46e5', textTransform: 'none', fontWeight: 600, px: 3, py: 1.2, borderRadius: 2, '&:hover': { bgcolor: '#f3f4f6' } }}
                >
                  View Projects
                </Button>
                <Button
                  component={Link}
                  href="/contact"
                  variant="outlined"
                  sx={{ borderColor: '#ffffff', color: '#ffffff', textTransform: 'none', fontWeight: 600, px: 3, py: 1.2, borderRadius: 2, '&:hover': { bgcolor: 'rgba(255,255,255,0.1)', borderColor: '#ffffff' } }}
                >
                  Get in Touch
                </Button>
              </Box>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 5 }} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Typography sx={{ fontSize: '8rem' }}>👨‍💻</Typography>
            </Grid2>
          </Grid2>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 800, color: '#111827', mb: 1 }}>Featured Projects</Typography>
          <Typography variant="body1" sx={{ color: '#6b7280' }}>A selection of my recent work and side projects</Typography>
        </Box>
        <Grid2 container spacing={3}>
          {featuredProjects.map((project) => (
            <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={project.id}>
              <ProjectCard project={project} />
            </Grid2>
          ))}
        </Grid2>
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button
            component={Link}
            href="/projects"
            variant="outlined"
            sx={{ color: '#4f46e5', borderColor: '#4f46e5', textTransform: 'none', fontWeight: 600, borderRadius: 2, '&:hover': { bgcolor: '#eef2ff', borderColor: '#4f46e5' } }}
          >
            View All Projects &rarr;
          </Button>
        </Box>
      </Container>

      <Container maxWidth="lg">
        <SkillsGrid />
      </Container>

      <Box sx={{ bgcolor: '#f9fafb', py: 8, mt: 6 }}>
        <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
          <Typography variant="h4" sx={{ fontWeight: 800, color: '#111827', mb: 2 }}>Let us Work Together</Typography>
          <Typography variant="body1" sx={{ color: '#6b7280', mb: 4, lineHeight: 1.7 }}>
            Have a project in mind? I am always open to discussing new opportunities and creative ideas.
          </Typography>
          <Button
            component={Link}
            href="/contact"
            variant="contained"
            size="large"
            sx={{ bgcolor: '#4f46e5', textTransform: 'none', fontWeight: 600, px: 4, py: 1.5, borderRadius: 2, '&:hover': { bgcolor: '#4338ca' } }}
          >
            Start a Conversation
          </Button>
        </Container>
      </Box>
    </Box>
  );
}
