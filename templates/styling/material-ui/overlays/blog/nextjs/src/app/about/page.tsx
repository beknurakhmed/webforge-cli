'use client';

import { Box, Typography, Container, Grid2, Card, CardContent } from '@mui/material';

const team = [
  { name: 'Alex Rivera', role: 'Lead Writer & Editor', bio: 'Full-stack developer with 10+ years of experience. Passionate about modern web technologies and developer education.', avatar: '👨‍💻' },
  { name: 'Priya Sharma', role: 'Design Writer', bio: 'UI/UX designer who loves translating complex design concepts into accessible, practical advice.', avatar: '👩‍🎨' },
  { name: 'Marcus Chen', role: 'Technical Writer', bio: 'Software architect specializing in scalable systems and design patterns. Writes about architecture and best practices.', avatar: '👨' },
  { name: 'Sofia Andersen', role: 'Tutorial Creator', bio: 'Frontend developer and educator. Creates in-depth tutorials that make complex topics approachable.', avatar: '👩' },
];

export default function AboutPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" sx={{ fontWeight: 800, color: '#111827', mb: 2 }}>
          About {'{{projectName}}'}
        </Typography>
        <Typography variant="h6" sx={{ color: '#6b7280', fontWeight: 400, maxWidth: 600, mx: 'auto', lineHeight: 1.6 }}>
          We are a team of passionate developers and designers sharing knowledge about modern web development, design, and technology.
        </Typography>
      </Box>

      <Card sx={{ borderRadius: 3, mb: 4 }}>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: 700, color: '#111827', mb: 2 }}>Our Mission</Typography>
          <Typography variant="body1" sx={{ color: '#374151', lineHeight: 1.8 }}>
            We believe in making technology accessible to everyone. Our articles combine practical tutorials with in-depth analysis to help developers at every level grow their skills and stay current with the latest trends.
          </Typography>
        </CardContent>
      </Card>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" sx={{ fontWeight: 700, color: '#111827', mb: 3 }}>Meet the Team</Typography>
        <Grid2 container spacing={3}>
          {team.map((member) => (
            <Grid2 size={{ xs: 12, sm: 6, md: 3 }} key={member.name}>
              <Card sx={{ borderRadius: 3, textAlign: 'center', height: '100%' }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography sx={{ fontSize: '3rem', mb: 1 }}>{member.avatar}</Typography>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: '#111827' }}>{member.name}</Typography>
                  <Typography variant="body2" sx={{ color: '#4f46e5', fontWeight: 500, mb: 1 }}>{member.role}</Typography>
                  <Typography variant="body2" sx={{ color: '#6b7280', lineHeight: 1.6 }}>{member.bio}</Typography>
                </CardContent>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Box>

      <Card sx={{ borderRadius: 3 }}>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: 700, color: '#111827', mb: 2 }}>Get In Touch</Typography>
          <Typography variant="body1" sx={{ color: '#374151', mb: 3, lineHeight: 1.8 }}>
            Have a suggestion for a topic? Want to contribute? We would love to hear from you.
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Typography sx={{ fontSize: '1.3rem' }}>📧</Typography>
              <Typography variant="body1" sx={{ color: '#374151' }}>hello@{'{{projectName}}'}.com</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Typography sx={{ fontSize: '1.3rem' }}>🐦</Typography>
              <Typography variant="body1" sx={{ color: '#374151' }}>@{'{{projectName}}'}</Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}
