import { Box, Container, Typography, Grid2, Card, CardContent } from '@mui/material';

const features = [
  {
    icon: '⚡',
    title: 'Lightning Fast',
    description: 'Optimized for performance with lazy loading, code splitting, and modern build tools.',
  },
  {
    icon: '🎨',
    title: 'Beautiful Design',
    description: 'Clean, modern UI with responsive layouts that look great on any device.',
  },
  {
    icon: '🔒',
    title: 'Secure by Default',
    description: 'Built with security best practices including HTTPS, CSP headers, and input validation.',
  },
  {
    icon: '🧩',
    title: 'Modular Architecture',
    description: 'Component-based structure makes it easy to customize and extend functionality.',
  },
  {
    icon: '📱',
    title: 'Mobile First',
    description: 'Designed for mobile devices first, then scaled up for tablets and desktops.',
  },
  {
    icon: '🚀',
    title: 'Easy Deployment',
    description: 'Deploy anywhere — Vercel, Netlify, AWS, or your own server in minutes.',
  },
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
          {features.map((feature, index) => (
            <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={index}>
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
                  <Typography variant="h4" sx={{ mb: 1.5 }}>{feature.icon}</Typography>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: '#111827', mb: 1 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#6b7280', lineHeight: 1.6 }}>
                    {feature.description}
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
