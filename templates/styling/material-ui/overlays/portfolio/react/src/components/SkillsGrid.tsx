import { Box, Typography, Chip, Grid2, Card, CardContent } from '@mui/material';
import { skills } from '../data/projects';

function SkillsGrid() {
  return (
    <Grid2 container spacing={2}>
      {skills.map((group, i) => (
        <Grid2 size={{ xs: 12, sm: 6, md: 3 }} key={i}>
          <Card variant="outlined" sx={{ borderRadius: 3, height: '100%' }}>
            <CardContent>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#111827', mb: 1 }}>
                {group.category}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {group.items.map((skill, j) => (
                  <Chip
                    key={j}
                    label={skill}
                    size="small"
                    sx={{ bgcolor: '#eef2ff', color: '#4f46e5', fontWeight: 500 }}
                  />
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid2>
      ))}
    </Grid2>
  );
}

export default SkillsGrid;
