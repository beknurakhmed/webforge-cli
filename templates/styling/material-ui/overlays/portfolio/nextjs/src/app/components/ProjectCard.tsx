'use client';

import { Card, CardContent, Box, Typography, Chip, Link as MuiLink } from '@mui/material';

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
    <Card sx={{ borderRadius: 3, overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column', transition: 'box-shadow 0.2s', '&:hover': { boxShadow: 4 } }}>
      <Box sx={{ bgcolor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', py: 4, fontSize: '3rem' }}>
        {project.image}
      </Box>
      <CardContent sx={{ p: 3, display: 'flex', flexDirection: 'column', flex: 1 }}>
        <Chip label={project.category} size="small" sx={{ bgcolor: '#eef2ff', color: '#4f46e5', fontWeight: 600, alignSelf: 'flex-start', mb: 1 }} />
        <Typography variant="h6" sx={{ fontWeight: 700, color: '#111827', mb: 1 }}>{project.title}</Typography>
        <Typography variant="body2" sx={{ color: '#6b7280', lineHeight: 1.6, mb: 2, flex: 1 }}>{project.description}</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
          {project.tech.map((t) => (
            <Chip key={t} label={t} size="small" variant="outlined" sx={{ borderColor: '#d1d5db', color: '#374151', fontWeight: 500 }} />
          ))}
        </Box>
        <MuiLink href={project.link} target="_blank" rel="noopener noreferrer" underline="none" sx={{ color: '#4f46e5', fontWeight: 600, fontSize: '0.875rem', '&:hover': { color: '#4338ca' } }}>
          View Project &rarr;
        </MuiLink>
      </CardContent>
    </Card>
  );
}
