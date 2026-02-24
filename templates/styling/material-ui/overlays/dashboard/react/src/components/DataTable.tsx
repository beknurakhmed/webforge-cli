import {
  Card, Box, Typography, Button, Table, TableHead, TableBody, TableRow, TableCell, Chip,
} from '@mui/material';

interface Order {
  id: string;
  customer: string;
  email: string;
  amount: string;
  status: 'Completed' | 'Processing' | 'Cancelled';
}

const rows: Order[] = [
  { id: '#3210', customer: 'Olivia Martin', email: 'olivia@email.com', amount: '$42.00', status: 'Completed' },
  { id: '#3209', customer: 'Ava Johnson', email: 'ava@email.com', amount: '$74.99', status: 'Processing' },
  { id: '#3208', customer: 'Michael Brown', email: 'michael@email.com', amount: '$64.00', status: 'Completed' },
  { id: '#3207', customer: 'Lisa Anderson', email: 'lisa@email.com', amount: '$49.99', status: 'Cancelled' },
  { id: '#3206', customer: 'Thomas Wilson', email: 'thomas@email.com', amount: '$120.00', status: 'Completed' },
];

const statusColors: Record<string, { bg: string; color: string }> = {
  Completed: { bg: '#d1fae5', color: '#065f46' },
  Processing: { bg: '#dbeafe', color: '#1e40af' },
  Cancelled: { bg: '#fee2e2', color: '#991b1b' },
};

export function DataTable() {
  return (
    <Card sx={{ borderRadius: 3, overflow: 'hidden' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 3, py: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 600, color: '#111827' }}>
          Recent Orders
        </Typography>
        <Button variant="outlined" size="small" sx={{ textTransform: 'none', color: '#374151', borderColor: '#d1d5db' }}>
          View All
        </Button>
      </Box>
      <Table>
        <TableHead>
          <TableRow sx={{ bgcolor: '#f9fafb' }}>
            <TableCell sx={{ color: '#6b7280', fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Order</TableCell>
            <TableCell sx={{ color: '#6b7280', fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Customer</TableCell>
            <TableCell sx={{ color: '#6b7280', fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email</TableCell>
            <TableCell sx={{ color: '#6b7280', fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Amount</TableCell>
            <TableCell sx={{ color: '#6b7280', fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow key={i} sx={{ '&:hover': { bgcolor: '#f9fafb' } }}>
              <TableCell sx={{ color: '#374151' }}>{row.id}</TableCell>
              <TableCell sx={{ color: '#374151' }}>{row.customer}</TableCell>
              <TableCell sx={{ color: '#374151' }}>{row.email}</TableCell>
              <TableCell sx={{ color: '#374151' }}>{row.amount}</TableCell>
              <TableCell>
                <Chip
                  label={row.status}
                  size="small"
                  sx={{ bgcolor: statusColors[row.status].bg, color: statusColors[row.status].color, fontWeight: 500 }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
