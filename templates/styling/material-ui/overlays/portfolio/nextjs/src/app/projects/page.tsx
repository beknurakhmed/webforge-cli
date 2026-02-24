'use client';

import { useState } from 'react';
import { Box, Typography, Container, Grid2, Button } from '@mui/material';
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
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" sx={{ fontWeight: 800, color: '#111827', mb: 1 }}>All Projects</Typography>
        <Typography variant="body1" sx={{ color: '#6b7280' }}>
          A complete collection of my work, side projects, and experiments.
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
        {categories.map((cat) => (
          <Button
            key={cat}
            size="small"
            variant={activeCategory === cat ? 'contained' : 'outlined'}
            onClick={() => setActiveCategory(cat)}
            sx={{
              textTransform: 'none',
              fontWeight: 500,
              borderRadius: 2,
              ...(activeCategory === cat
                ? { bgcolor: '#4f46e5', '&:hover': { bgcolor: '#4338ca' } }
                : { color: '#374151', borderColor: '#d1d5db', '&:hover': { borderColor: '#9ca3af' } }),
            }}
          >
            {cat}
          </Button>
        ))}
      </Box>

      <Grid2 container spacing={3}>
        {filtered.map((project) => (
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={project.id}>
            <ProjectCard project={project} />
          </Grid2>
        ))}
      </Grid2>

      {filtered.length === 0 && (
        <Box sx={{ py: 6, textAlign: 'center' }}>
          <Typography variant="body1" sx={{ color: '#6b7280' }}>No projects found in this category.</Typography>
        </Box>
      )}
    </Container>
  );
}
