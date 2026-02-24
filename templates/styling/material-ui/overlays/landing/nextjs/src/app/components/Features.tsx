'use client';

import { Box, Container, Typography, Grid2, Card, CardContent } from '@mui/material';

const features = [
  { icon: '⚡', title: 'Lightning Fast', description: 'Optimized for performance with lazy loading and code splitting.' },
  { icon: '🎨', title: 'Beautiful Design', description: 'Clean, modern UI with responsive layouts.' },
  { icon: '🔒', title: 'Secure by Default', description: 'Built with security best practices.' },
  { icon: '🧩', title: 'Modular Architecture', description: 'Component-based structure for easy customization.' },
  { icon: '📱', title: 'Mobile First', description: 'Designed for mobile, scaled up for desktop.' },
  { icon: '🚀', title: 'Easy Deployment', description: 'Deploy anywhere in minutes.' },
];

export function Features() {
  return (
    <Box id="features" sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" sx={{ fontWeight: 700, color: '#111827', mb: 1 }}>
          Features
        </Typography>
        <Typography variant="subtitle1" align="center" sx={{ color: '#6b7280', mb: 6 }}>
          Everything you need to build a modern web application
        </Typography>
        <Grid2 container spacing={3}>
          {features.map((f, i) => (
            <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={i}>
              <Card
                variant="outlined"
                sx={{
                  borderRadius: 3,
                  p: 1,
                  height: '100%',
                  transition: 'all 0.2s',
                  '&:hover': { boxShadow: '0 10px 25px rgba(0,0,0,0.08)', transform: 'translateY(-2px)' },
                }}
              >
                <CardContent>
                  <Typography variant="h4" sx={{ mb: 1.5 }}>{f.icon}</Typography>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: '#111827', mb: 1 }}>
                    {f.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#6b7280', lineHeight: 1.6 }}>
                    {f.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </Box>
  );
}
