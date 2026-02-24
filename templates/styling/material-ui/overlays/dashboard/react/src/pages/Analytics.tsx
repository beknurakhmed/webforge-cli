import { Box, Typography, Card, CardContent, Grid2 } from '@mui/material';
import { ChartPlaceholder } from '../components/ChartPlaceholder';

const metrics = [
  { label: 'Page Views', value: '124,892', change: '+14%' },
  { label: 'Bounce Rate', value: '42.3%', change: '-2.1%' },
  { label: 'Avg. Session', value: '4m 32s', change: '+8%' },
  { label: 'Conversions', value: '1,847', change: '+5.3%' },
];

export function Analytics() {
  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, color: '#111827', mb: 3 }}>
        Analytics
      </Typography>
      <Grid2 container spacing={2} sx={{ mb: 3 }}>
        {metrics.map((m, i) => (
          <Grid2 size={{ xs: 12, sm: 6, md: 3 }} key={i}>
            <Card sx={{ borderRadius: 3 }}>
              <CardContent>
                <Typography variant="body2" sx={{ color: '#6b7280', fontWeight: 500 }}>
                  {m.label}
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 700, color: '#111827', my: 0.5 }}>
                  {m.value}
                </Typography>
                <Typography variant="caption" sx={{ color: '#10b981', fontWeight: 500 }}>
                  {m.change}
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
      <Grid2 container spacing={2} sx={{ mb: 3 }}>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <ChartPlaceholder title="Traffic Sources" data={[30, 55, 80, 45, 70, 60, 85, 50, 65, 75, 90, 40]} />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <ChartPlaceholder title="Conversion Funnel" data={[95, 80, 60, 45, 30, 20, 15, 12, 10, 8, 6, 5]} />
        </Grid2>
      </Grid2>
      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <ChartPlaceholder title="Revenue by Channel" data={[70, 50, 85, 40, 60, 75, 55, 90, 45, 65, 80, 70]} />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <ChartPlaceholder title="User Engagement" data={[20, 35, 50, 65, 45, 70, 55, 80, 60, 75, 85, 90]} />
        </Grid2>
      </Grid2>
    </Box>
  );
}
