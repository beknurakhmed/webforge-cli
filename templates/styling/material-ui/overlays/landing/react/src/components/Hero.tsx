import { AppBar, Toolbar, Typography, Button, Box, Container, Stack } from '@mui/material';

export function Hero() {
  return (
    <Box
      component="header"
      sx={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: '#ffffff',
        pb: 8,
      }}
    >
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar sx={{ maxWidth: 1200, mx: 'auto', width: '100%' }}>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700, color: '#ffffff' }}>
            {'{{projectName}}'}
          </Typography>
          <Stack direction="row" spacing={3}>
            <Button href="#features" sx={{ color: 'rgba(255,255,255,0.9)', textTransform: 'none', fontWeight: 500 }}>
              Features
            </Button>
            <Button href="#cta" sx={{ color: 'rgba(255,255,255,0.9)', textTransform: 'none', fontWeight: 500 }}>
              Pricing
            </Button>
            <Button href="#contact" sx={{ color: 'rgba(255,255,255,0.9)', textTransform: 'none', fontWeight: 500 }}>
              Contact
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" sx={{ textAlign: 'center', pt: 8, pb: 4 }}>
        <Typography variant="h2" sx={{ fontWeight: 800, mb: 3, lineHeight: 1.1 }}>
          Build Something Amazing
        </Typography>
        <Typography variant="h6" sx={{ opacity: 0.9, mb: 4, lineHeight: 1.6, fontWeight: 400 }}>
          A modern landing page template to kickstart your next project. Fast, responsive, and ready for production.
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap">
          <Button
            variant="contained"
            size="large"
            sx={{ bgcolor: '#4f46e5', px: 4, py: 1.5, textTransform: 'none', fontWeight: 600, borderRadius: 2, '&:hover': { bgcolor: '#4338ca' } }}
          >
            Get Started
          </Button>
          <Button
            variant="outlined"
            size="large"
            sx={{ color: '#ffffff', borderColor: 'rgba(255,255,255,0.5)', px: 4, py: 1.5, textTransform: 'none', fontWeight: 600, borderRadius: 2, '&:hover': { borderColor: '#ffffff', bgcolor: 'rgba(255,255,255,0.1)' } }}
          >
            Learn More
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
