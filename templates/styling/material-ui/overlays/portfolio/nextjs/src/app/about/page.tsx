'use client';

import Link from 'next/link';
import { Box, Typography, Container, Grid2, Card, CardContent, Button } from '@mui/material';
import { SkillsGrid } from '../components/SkillsGrid';

const experience = [
  { role: 'Senior Full-Stack Developer', company: 'TechCorp Inc.', period: '2022 - Present', description: 'Leading development of cloud-native applications serving 50K+ users. Architecting microservices and mentoring junior developers.', icon: '🏢' },
  { role: 'Frontend Developer', company: 'DesignStudio Co.', period: '2020 - 2022', description: 'Built responsive web applications and design systems. Improved page load performance by 40% through optimization.', icon: '💻' },
  { role: 'Junior Developer', company: 'StartupXYZ', period: '2018 - 2020', description: 'Full-stack development for a SaaS platform. Implemented features used by thousands of customers daily.', icon: '🚀' },
];

const education = [
  { degree: 'M.S. Computer Science', school: 'State University', year: '2018', icon: '🎓' },
  { degree: 'B.S. Software Engineering', school: 'Tech Institute', year: '2016', icon: '📚' },
];

export default function AboutPage() {
  return (
    <Box>
      <Box sx={{ bgcolor: '#f9fafb', py: 8, textAlign: 'center' }}>
        <Container maxWidth="sm">
          <Typography sx={{ fontSize: '4rem', mb: 2 }}>👨‍💻</Typography>
          <Typography variant="h3" sx={{ fontWeight: 800, color: '#111827', mb: 2 }}>About Me</Typography>
          <Typography variant="body1" sx={{ color: '#6b7280', lineHeight: 1.8 }}>
            I am a full-stack developer with over 6 years of experience building web applications.
            I am passionate about clean code, user experience, and turning complex problems into simple,
            elegant solutions.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography variant="h4" sx={{ fontWeight: 800, color: '#111827', mb: 3 }}>💼 Experience</Typography>
        <Box sx={{ position: 'relative', pl: 4, borderLeft: '2px solid #e5e7eb' }}>
          {experience.map((exp, i) => (
            <Box key={i} sx={{ mb: 3, position: 'relative' }}>
              <Box sx={{
                position: 'absolute',
                left: -25,
                top: 0,
                width: 40,
                height: 40,
                bgcolor: '#ffffff',
                border: '2px solid #e5e7eb',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
              }}>
                {exp.icon}
              </Box>
              <Card sx={{ borderRadius: 3, ml: 2 }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#111827' }}>{exp.role}</Typography>
                  <Typography variant="body2" sx={{ color: '#4f46e5', fontWeight: 500 }}>{exp.company}</Typography>
                  <Typography variant="caption" sx={{ color: '#9ca3af', display: 'block', mb: 1 }}>{exp.period}</Typography>
                  <Typography variant="body2" sx={{ color: '#6b7280', lineHeight: 1.6 }}>{exp.description}</Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>

        <Typography variant="h4" sx={{ fontWeight: 800, color: '#111827', mb: 3, mt: 6 }}>🎓 Education</Typography>
        <Grid2 container spacing={3}>
          {education.map((edu, i) => (
            <Grid2 size={{ xs: 12, sm: 6 }} key={i}>
              <Card sx={{ borderRadius: 3, textAlign: 'center' }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography sx={{ fontSize: '2.5rem', mb: 1 }}>{edu.icon}</Typography>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#111827' }}>{edu.degree}</Typography>
                  <Typography variant="body2" sx={{ color: '#4f46e5', fontWeight: 500 }}>{edu.school}</Typography>
                  <Typography variant="caption" sx={{ color: '#9ca3af' }}>{edu.year}</Typography>
                </CardContent>
              </Card>
            </Grid2>
          ))}
        </Grid2>

        <SkillsGrid />

        <Box sx={{ bgcolor: '#f9fafb', borderRadius: 3, py: 6, textAlign: 'center', mt: 6 }}>
          <Typography variant="h4" sx={{ fontWeight: 800, color: '#111827', mb: 2 }}>Want to work together?</Typography>
          <Typography variant="body1" sx={{ color: '#6b7280', mb: 4 }}>
            I am always interested in hearing about new projects and opportunities.
          </Typography>
          <Button
            component={Link}
            href="/contact"
            variant="contained"
            size="large"
            sx={{ bgcolor: '#4f46e5', textTransform: 'none', fontWeight: 600, px: 4, py: 1.5, borderRadius: 2, '&:hover': { bgcolor: '#4338ca' } }}
          >
            Get in Touch
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
