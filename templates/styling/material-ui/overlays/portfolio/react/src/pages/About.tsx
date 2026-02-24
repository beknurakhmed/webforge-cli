import { Box, Typography, Container, Card, CardContent, Avatar, Chip } from '@mui/material';
import SkillsGrid from '../components/SkillsGrid';

const timeline = [
  { year: '2024 - Present', role: 'Senior Frontend Developer', company: 'Tech Corp', desc: 'Leading frontend architecture and mentoring junior developers.' },
  { year: '2022 - 2024', role: 'Frontend Developer', company: 'StartupXYZ', desc: 'Built and maintained multiple React applications from scratch.' },
  { year: '2020 - 2022', role: 'Junior Developer', company: 'Web Agency', desc: 'Developed responsive websites and learned modern frameworks.' },
];

function About() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h4" align="center" sx={{ fontWeight: 700, color: '#111827', mb: 1 }}>
        About Me
      </Typography>
      <Typography variant="subtitle1" align="center" sx={{ color: '#6b7280', mb: 4 }}>
        My journey as a developer
      </Typography>
      <Card sx={{ borderRadius: 3, mb: 4, maxWidth: 700, mx: 'auto' }}>
        <CardContent sx={{ display: 'flex', gap: 3, p: 3 }}>
          <Avatar sx={{ width: 64, height: 64, fontSize: '2rem', bgcolor: '#eef2ff' }}>
            👨‍💻
          </Avatar>
          <Typography variant="body1" sx={{ color: '#374151', lineHeight: 1.7 }}>
            I am a passionate software engineer with a love for building beautiful, performant
            web applications. With expertise in modern JavaScript frameworks and a keen eye
            for design, I bridge the gap between functionality and aesthetics.
          </Typography>
        </CardContent>
      </Card>
      <Typography variant="h5" sx={{ fontWeight: 600, color: '#111827', mb: 3 }}>
        Experience
      </Typography>
      <Box sx={{ mb: 6 }}>
        {timeline.map((item, i) => (
          <Card key={i} variant="outlined" sx={{ borderRadius: 3, mb: 2, borderLeft: '4px solid #4f46e5' }}>
            <CardContent sx={{ p: 2.5 }}>
              <Chip label={item.year} size="small" sx={{ bgcolor: '#eef2ff', color: '#4f46e5', fontWeight: 600, mb: 1 }} />
              <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#111827' }}>
                {item.role}
              </Typography>
              <Typography variant="body2" sx={{ color: '#4f46e5', fontWeight: 500, mb: 0.5 }}>
                {item.company}
              </Typography>
              <Typography variant="body2" sx={{ color: '#6b7280' }}>
                {item.desc}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
      <Typography variant="h5" sx={{ fontWeight: 600, color: '#111827', mb: 3 }}>
        Skills
      </Typography>
      <SkillsGrid />
    </Container>
  );
}

export default About;
