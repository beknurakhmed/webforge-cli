'use client';

import { Box, Typography, Grid2, Card, CardContent, Chip, LinearProgress } from '@mui/material';

interface Skill {
  name: string;
  level: number;
  icon: string;
  category: string;
}

const skills: Skill[] = [
  { name: 'React', level: 95, icon: '⚛️', category: 'Frontend' },
  { name: 'TypeScript', level: 90, icon: '📘', category: 'Languages' },
  { name: 'Node.js', level: 88, icon: '🟢', category: 'Backend' },
  { name: 'Next.js', level: 92, icon: '▲', category: 'Frontend' },
  { name: 'CSS/Sass', level: 90, icon: '🎨', category: 'Frontend' },
  { name: 'Python', level: 80, icon: '🐍', category: 'Languages' },
  { name: 'PostgreSQL', level: 82, icon: '🐘', category: 'Backend' },
  { name: 'Docker', level: 75, icon: '🐳', category: 'DevOps' },
  { name: 'AWS', level: 78, icon: '☁️', category: 'DevOps' },
  { name: 'Git', level: 93, icon: '📂', category: 'Tools' },
  { name: 'Figma', level: 85, icon: '🖌️', category: 'Design' },
  { name: 'GraphQL', level: 80, icon: '📊', category: 'Backend' },
];

export function SkillsGrid() {
  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ fontWeight: 800, color: '#111827', textAlign: 'center', mb: 1 }}>
        Skills & Technologies
      </Typography>
      <Typography variant="body1" sx={{ color: '#6b7280', textAlign: 'center', mb: 4 }}>
        Tools and technologies I work with on a daily basis
      </Typography>
      <Grid2 container spacing={2}>
        {skills.map((skill) => (
          <Grid2 size={{ xs: 6, sm: 4, md: 3 }} key={skill.name}>
            <Card variant="outlined" sx={{ borderRadius: 3, height: '100%' }}>
              <CardContent sx={{ p: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                  <Typography sx={{ fontSize: '1.3rem' }}>{skill.icon}</Typography>
                  <Chip label={skill.category} size="small" sx={{ bgcolor: '#f3f4f6', color: '#6b7280', fontWeight: 500, height: 22, fontSize: '0.7rem' }} />
                </Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#111827', mb: 0.5 }}>{skill.name}</Typography>
                <LinearProgress
                  variant="determinate"
                  value={skill.level}
                  sx={{ height: 6, borderRadius: 3, bgcolor: '#e5e7eb', mb: 0.5, '& .MuiLinearProgress-bar': { bgcolor: '#4f46e5', borderRadius: 3 } }}
                />
                <Typography variant="caption" sx={{ color: '#6b7280' }}>{skill.level}%</Typography>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
}
