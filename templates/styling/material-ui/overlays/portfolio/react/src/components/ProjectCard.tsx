import { Card, CardContent, Typography, Box, Chip } from '@mui/material';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card
      sx={{
        borderRadius: 3,
        transition: 'all 0.2s',
        '&:hover': { boxShadow: '0 8px 25px rgba(0,0,0,0.08)', transform: 'translateY(-2px)' },
      }}
    >
      <Box sx={{ fontSize: '3rem', textAlign: 'center', py: 3, bgcolor: '#f9fafb' }}>
        {project.image}
      </Box>
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: 600, color: '#111827', mb: 0.5 }}>
          {project.title}
        </Typography>
        <Typography variant="body2" sx={{ color: '#6b7280', mb: 1.5 }}>
          {project.description}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
          {project.tags.map((tag, j) => (
            <Chip
              key={j}
              label={tag}
              size="small"
              sx={{ bgcolor: '#eef2ff', color: '#4f46e5', fontWeight: 500, fontSize: '0.7rem' }}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}

export default ProjectCard;
