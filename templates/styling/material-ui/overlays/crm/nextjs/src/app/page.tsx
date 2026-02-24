'use client';

import { Box, Typography, Grid2, Card, CardContent, Stack } from '@mui/material';
import { StatsCards } from './components/StatsCards';
import { ContactsTable } from './components/ContactsTable';

const recentActivities = [
  { action: 'New deal created', detail: 'TechCorp Inc. - Enterprise Plan', time: '2 hours ago', icon: '💼' },
  { action: 'Contact updated', detail: 'Sarah Chen - Status changed to Customer', time: '4 hours ago', icon: '👤' },
  { action: 'Deal closed', detail: 'GlobalNet Ltd. - Premium Package', time: '1 day ago', icon: '🎉' },
  { action: 'New contact added', detail: 'Emily Brown - StartupXYZ', time: '1 day ago', icon: '➕' },
  { action: 'Meeting scheduled', detail: 'James Wilson - Product Demo', time: '2 days ago', icon: '📅' },
];

export default function CRMDashboard() {
  return (
    <Box>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 700, color: '#111827' }}>Dashboard</Typography>
        <Typography variant="body2" sx={{ color: '#6b7280' }}>Welcome back! Here is your sales overview.</Typography>
      </Box>
      <StatsCards />
      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 12, md: 7 }}>
          <ContactsTable limit={4} />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 5 }}>
          <Card sx={{ borderRadius: 3 }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, color: '#111827', mb: 2 }}>Recent Activity</Typography>
              <Stack spacing={2}>
                {recentActivities.map((activity, i) => (
                  <Box key={i} sx={{ display: 'flex', gap: 1.5 }}>
                    <Typography sx={{ fontSize: '1.3rem' }}>{activity.icon}</Typography>
                    <Box>
                      <Typography variant="body2" sx={{ fontWeight: 500, color: '#111827' }}>{activity.action}</Typography>
                      <Typography variant="caption" sx={{ color: '#6b7280' }}>{activity.detail}</Typography>
                      <Typography variant="caption" display="block" sx={{ color: '#9ca3af' }}>{activity.time}</Typography>
                    </Box>
                  </Box>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>
    </Box>
  );
}
