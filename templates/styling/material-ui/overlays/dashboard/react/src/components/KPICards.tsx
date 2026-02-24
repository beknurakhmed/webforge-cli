import { Card, CardContent, Typography, Grid2 } from '@mui/material';

const kpis = [
  { label: 'Total Revenue', value: '$48,250', change: '+12%', positive: true },
  { label: 'Active Users', value: '2,420', change: '+8%', positive: true },
  { label: 'Orders', value: '1,210', change: '-3%', positive: false },
  { label: 'Conversion', value: '3.2%', change: '+0.5%', positive: true },
];

export function KPICards() {
  return (
    <Grid2 container spacing={2} sx={{ mb: 3 }}>
      {kpis.map((kpi, i) => (
        <Grid2 size={{ xs: 12, sm: 6, md: 3 }} key={i}>
          <Card sx={{ borderRadius: 3 }}>
            <CardContent>
              <Typography variant="body2" sx={{ color: '#6b7280', fontWeight: 500 }}>
                {kpi.label}
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 700, color: '#111827', my: 0.5 }}>
                {kpi.value}
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: kpi.positive ? '#10b981' : '#ef4444', fontWeight: 500 }}
              >
                {kpi.change} from last month
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
      ))}
    </Grid2>
  );
}
