'use client';

import { Box, Typography, Grid2 } from '@mui/material';
import { KPICards } from './components/KPICards';
import { ChartPlaceholder } from './components/ChartPlaceholder';
import { DataTable } from './components/DataTable';

export default function OverviewPage() {
  return (
    <Box>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 700, color: '#111827' }}>Overview</Typography>
        <Typography variant="body2" sx={{ color: '#6b7280' }}>Welcome back! Here is what is happening with your business.</Typography>
      </Box>
      <KPICards />
      <Grid2 container spacing={2} sx={{ mb: 3 }}>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <ChartPlaceholder title="Revenue Over Time" type="bar" />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <ChartPlaceholder title="Growth Trend" type="line" />
        </Grid2>
      </Grid2>
      <DataTable title="Recent Orders" limit={5} />
    </Box>
  );
}
