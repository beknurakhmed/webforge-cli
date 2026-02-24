import { Link } from 'react-router-dom';
import { Box, Typography, Button, Container, Grid2, Stack } from '@mui/material';
import ProjectCard from '../components/ProjectCard';
import SkillsGrid from '../components/SkillsGrid';
import { projects } from '../data/projects';

function Home() {
  const featured = projects.slice(0, 3);

  return (
    <Box>
      <Box
        sx={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: '#ffffff',
          py: 10,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="subtitle1" sx={{ opacity: 0.9, mb: 1 }}>
            Hi, I'm
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 800, mb: 2 }}>
            {'{{projectName}}'}
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 400, opacity: 0.9, mb: 1 }}>
            Frontend Developer &amp; Software Engineer
          </Typography>
          <Typography variant="body1" sx={{ opacity: 0.85, mb: 4, maxWidth: 600, mx: 'auto' }}>
            I craft pixel-perfect, user-centric web experiences with modern technologies.
            Passionate about clean code and great design.
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center">
            <Button
              component={Link}
              to="/projects"
              variant="contained"
              size="large"
              sx={{ bgcolor: '#4f46e5', textTransform: 'none', fontWeight: 600, px: 4, borderRadius: 2, '&:hover': { bgcolor: '#4338ca' } }}
            >
              View My Work
            </Button>
            <Button
              component={Link}
              to="/contact"
              variant="outlined"
              size="large"
              sx={{ color: '#ffffff', borderColor: 'rgba(255,255,255,0.5)', textTransform: 'none', fontWeight: 600, px: 4, borderRadius: 2, '&:hover': { borderColor: '#ffffff', bgcolor: 'rgba(255,255,255,0.1)' } }}
            >
              Get In Touch
            </Button>
          </Stack>
        </Container>
      </Box>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" align="center" sx={{ fontWeight: 700, color: '#111827', mb: 1 }}>
          Featured Projects
        </Typography>
        <Typography variant="subtitle1" align="center" sx={{ color: '#6b7280', mb: 4 }}>
          A selection of my recent work
        </Typography>
        <Grid2 container spacing={3}>
          {featured.map((project) => (
            <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={project.id}>
              <ProjectCard project={project} />
            </Grid2>
          ))}
        </Grid2>
      </Container>
      <Box sx={{ bgcolor: '#f9fafb', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" sx={{ fontWeight: 700, color: '#111827', mb: 1 }}>
            Skills &amp; Technologies
          </Typography>
          <Typography variant="subtitle1" align="center" sx={{ color: '#6b7280', mb: 4 }}>
            Technologies I work with daily
          </Typography>
          <SkillsGrid />
        </Container>
      </Box>
    </Box>
  );
}

export default Home;
