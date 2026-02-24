'use client';

import { Box, Typography, Card, CardContent, Grid2, Table, TableHead, TableBody, TableRow, TableCell, LinearProgress } from '@mui/material';
import { ChartPlaceholder } from '../components/ChartPlaceholder';

const metrics = [
  { label: 'Page Views', value: '124,892', change: '+14.2%', icon: '👁️' },
  { label: 'Bounce Rate', value: '32.1%', change: '-2.4%', icon: '📉' },
  { label: 'Avg. Session', value: '4m 32s', change: '+8.7%', icon: '⏱️' },
  { label: 'New Visitors', value: '8,432', change: '+18.9%', icon: '🆕' },
];

const topPages = [
  { page: '/home', views: '24,521', percentage: 32 },
  { page: '/products', views: '18,432', percentage: 24 },
  { page: '/about', views: '12,841', percentage: 17 },
  { page: '/blog', views: '9,234', percentage: 12 },
  { page: '/contact', views: '6,128', percentage: 8 },
  { page: '/pricing', views: '5,432', percentage: 7 },
];

export default function AnalyticsPage() {
  return (
    <Box>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 700, color: '#111827' }}>Analytics</Typography>
        <Typography variant="body2" sx={{ color: '#6b7280' }}>Track your website performance and user engagement.</Typography>
      </Box>
      <Grid2 container spacing={2} sx={{ mb: 3 }}>
        {metrics.map((m, i) => (
          <Grid2 size={{ xs: 12, sm: 6, md: 3 }} key={i}>
            <Card sx={{ borderRadius: 3 }}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography sx={{ fontSize: '1.3rem' }}>{m.icon}</Typography>
                  <Typography variant="caption" sx={{ color: m.change.startsWith('+') ? '#10b981' : '#ef4444', fontWeight: 500 }}>{m.change}</Typography>
                </Box>
                <Typography variant="h5" sx={{ fontWeight: 700, color: '#111827' }}>{m.value}</Typography>
                <Typography variant="body2" sx={{ color: '#6b7280' }}>{m.label}</Typography>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
      <Grid2 container spacing={2} sx={{ mb: 3 }}>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <ChartPlaceholder title="Traffic Sources" type="pie" />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <ChartPlaceholder title="Visitor Trend" type="line" />
        </Grid2>
      </Grid2>
      <Card sx={{ borderRadius: 3, overflow: 'hidden' }}>
        <Box sx={{ px: 3, py: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, color: '#111827' }}>Top Pages</Typography>
        </Box>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: '#f9fafb' }}>
              <TableCell sx={{ color: '#6b7280', fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase' }}>Page</TableCell>
              <TableCell sx={{ color: '#6b7280', fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase' }}>Views</TableCell>
              <TableCell sx={{ color: '#6b7280', fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase' }}>Share</TableCell>
              <TableCell sx={{ color: '#6b7280', fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase', width: 200 }}>Progress</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {topPages.map((page) => (
              <TableRow key={page.page} sx={{ '&:hover': { bgcolor: '#f9fafb' } }}>
                <TableCell sx={{ color: '#4f46e5', fontWeight: 500 }}>{page.page}</TableCell>
                <TableCell sx={{ color: '#374151' }}>{page.views}</TableCell>
                <TableCell sx={{ color: '#374151' }}>{page.percentage}%</TableCell>
                <TableCell>
                  <LinearProgress
                    variant="determinate"
                    value={page.percentage}
                    sx={{ height: 8, borderRadius: 4, bgcolor: '#e5e7eb', '& .MuiLinearProgress-bar': { bgcolor: '#4f46e5', borderRadius: 4 } }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </Box>
  );
}
