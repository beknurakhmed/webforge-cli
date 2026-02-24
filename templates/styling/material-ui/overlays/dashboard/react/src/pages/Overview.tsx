import { Box, Typography, TextField, Avatar, Grid2 } from '@mui/material';
import { KPICards } from '../components/KPICards';
import { ChartPlaceholder } from '../components/ChartPlaceholder';
import { DataTable } from '../components/DataTable';

export function Overview() {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 700, color: '#111827' }}>
          Dashboard
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <TextField size="small" placeholder="Search..." sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }} />
          <Avatar sx={{ bgcolor: '#4f46e5', width: 36, height: 36, fontSize: '0.9rem', fontWeight: 600 }}>B</Avatar>
        </Box>
      </Box>
      <KPICards />
      <Grid2 container spacing={2} sx={{ mb: 3 }}>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <ChartPlaceholder title="Revenue Overview" />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <ChartPlaceholder title="User Growth" />
        </Grid2>
      </Grid2>
      <DataTable />
    </Box>
  );
}
