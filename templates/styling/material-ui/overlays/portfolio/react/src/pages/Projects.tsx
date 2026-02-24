import { useState } from 'react';
import { Box, Typography, Button, Container, Grid2, Stack } from '@mui/material';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const allCategories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];

function Projects() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h4" align="center" sx={{ fontWeight: 700, color: '#111827', mb: 1 }}>
        All Projects
      </Typography>
      <Typography variant="subtitle1" align="center" sx={{ color: '#6b7280', mb: 4 }}>
        Browse my complete portfolio
      </Typography>
      <Stack direction="row" spacing={1} justifyContent="center" sx={{ mb: 4, flexWrap: 'wrap' }}>
        {allCategories.map((cat) => (
          <Button
            key={cat}
            variant={active === cat ? 'contained' : 'outlined'}
            size="small"
            onClick={() => setActive(cat)}
            sx={{
              textTransform: 'none',
              fontWeight: 500,
              borderRadius: 5,
              ...(active === cat
                ? { bgcolor: '#4f46e5', '&:hover': { bgcolor: '#4338ca' } }
                : { color: '#374151', borderColor: '#e5e7eb' }),
            }}
          >
            {cat}
          </Button>
        ))}
      </Stack>
      <Grid2 container spacing={3}>
        {filtered.map((project) => (
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={project.id}>
            <ProjectCard project={project} />
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
}

export default Projects;
