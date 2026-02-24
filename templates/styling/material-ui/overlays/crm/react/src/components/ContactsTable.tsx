import {
  Card, Table, TableHead, TableBody, TableRow, TableCell, Chip, Typography,
} from '@mui/material';
import type { Contact } from '../data/contacts';

interface ContactsTableProps {
  contacts: Contact[];
}

const statusColors: Record<string, { bg: string; color: string }> = {
  Lead: { bg: '#fef3c7', color: '#92400e' },
  Prospect: { bg: '#dbeafe', color: '#1e40af' },
  Customer: { bg: '#d1fae5', color: '#065f46' },
  Churned: { bg: '#fee2e2', color: '#991b1b' },
};

function ContactsTable({ contacts }: ContactsTableProps) {
  return (
    <Card sx={{ borderRadius: 3, overflow: 'hidden' }}>
      <Table>
        <TableHead>
          <TableRow sx={{ bgcolor: '#f9fafb' }}>
            <TableCell sx={{ color: '#6b7280', fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Name</TableCell>
            <TableCell sx={{ color: '#6b7280', fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email</TableCell>
            <TableCell sx={{ color: '#6b7280', fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Company</TableCell>
            <TableCell sx={{ color: '#6b7280', fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Status</TableCell>
            <TableCell sx={{ color: '#6b7280', fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contacts.map((c) => (
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
              <TableCell sx={{ color: '#374151' }}>{c.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}

export default ContactsTable;
