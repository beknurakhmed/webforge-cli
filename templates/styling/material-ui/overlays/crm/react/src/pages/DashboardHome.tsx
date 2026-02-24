import { Box, Typography, Card, Table, TableHead, TableBody, TableRow, TableCell, Chip } from '@mui/material';
import StatsCards from '../components/StatsCards';
import { contacts } from '../data/contacts';

const statusColors: Record<string, { bg: string; color: string }> = {
  Lead: { bg: '#fef3c7', color: '#92400e' },
  Prospect: { bg: '#dbeafe', color: '#1e40af' },
  Customer: { bg: '#d1fae5', color: '#065f46' },
  Churned: { bg: '#fee2e2', color: '#991b1b' },
};

function DashboardHome() {
  const recentContacts = contacts.slice(0, 5);

  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, color: '#111827', mb: 3 }}>
        Dashboard
      </Typography>
      <StatsCards />
      <Typography variant="h6" sx={{ fontWeight: 600, color: '#111827', mb: 2 }}>
        Recent Contacts
      </Typography>
      <Card sx={{ borderRadius: 3, overflow: 'hidden' }}>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: '#f9fafb' }}>
              <TableCell sx={{ color: '#6b7280', fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Name</TableCell>
              <TableCell sx={{ color: '#6b7280', fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email</TableCell>
              <TableCell sx={{ color: '#6b7280', fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Company</TableCell>
              <TableCell sx={{ color: '#6b7280', fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {recentContacts.map((c) => (
              <TableRow key={c.id} sx={{ '&:hover': { bgcolor: '#f9fafb' } }}>
                <TableCell>
                  <Typography variant="body2" sx={{ fontWeight: 500, color: '#111827' }}>{c.name}</Typography>
                </TableCell>
                <TableCell sx={{ color: '#374151' }}>{c.email}</TableCell>
                <TableCell sx={{ color: '#374151' }}>{c.company}</TableCell>
                <TableCell>
                  <Chip
                    label={c.status}
                    size="small"
                    sx={{
                      bgcolor: statusColors[c.status]?.bg,
                      color: statusColors[c.status]?.color,
                      fontWeight: 500,
                    }}
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

export default DashboardHome;
