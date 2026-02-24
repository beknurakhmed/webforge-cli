import { Card, CardContent, Typography, Grid2, Box } from '@mui/material';
import { contacts } from '../data/contacts';

const stats = [
  { label: 'Total Contacts', value: contacts.length, color: '#4f46e5' },
  { label: 'Leads', value: contacts.filter((c) => c.status === 'Lead').length, color: '#f59e0b' },
  { label: 'Customers', value: contacts.filter((c) => c.status === 'Customer').length, color: '#10b981' },
  { label: 'Churned', value: contacts.filter((c) => c.status === 'Churned').length, color: '#ef4444' },
];

function StatsCards() {
  return (
    <Grid2 container spacing={2} sx={{ mb: 3 }}>
      {stats.map((stat, i) => (
        <Grid2 size={{ xs: 12, sm: 6, md: 3 }} key={i}>
          <Card sx={{ borderRadius: 3 }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: stat.color }} />
                <Typography variant="body2" sx={{ color: '#6b7280', fontWeight: 500 }}>
                  {stat.label}
                </Typography>
              </Box>
              <Typography variant="h4" sx={{ fontWeight: 700, color: '#111827' }}>
                {stat.value}
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
      ))}
    </Grid2>
  );
}

export default StatsCards;
