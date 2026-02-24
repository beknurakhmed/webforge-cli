'use client';

import { Card, CardContent, Typography, Grid2, Box } from '@mui/material';

const stats = [
  { label: 'Total Contacts', value: '248', color: '#4f46e5', icon: '👥' },
  { label: 'Active Deals', value: '12', color: '#f59e0b', icon: '💼' },
  { label: 'Pipeline Value', value: '$142,500', color: '#10b981', icon: '💰' },
  { label: 'Won This Month', value: '$83,000', color: '#8b5cf6', icon: '🎉' },
];

export function StatsCards() {
  return (
    <Grid2 container spacing={2} sx={{ mb: 3 }}>
      {stats.map((stat, i) => (
        <Grid2 size={{ xs: 12, sm: 6, md: 3 }} key={i}>
          <Card sx={{ borderRadius: 3, borderTop: `3px solid ${stat.color}` }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                <Typography variant="body2" sx={{ color: '#6b7280', fontWeight: 500 }}>{stat.label}</Typography>
                <Typography sx={{ fontSize: '1.3rem' }}>{stat.icon}</Typography>
              </Box>
              <Typography variant="h4" sx={{ fontWeight: 700, color: '#111827' }}>{stat.value}</Typography>
            </CardContent>
          </Card>
        </Grid2>
      ))}
    </Grid2>
  );
}
