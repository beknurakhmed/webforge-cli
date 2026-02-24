'use client';

import { Card, Box, Typography, Table, TableHead, TableBody, TableRow, TableCell, Chip } from '@mui/material';

interface ContactsTableProps {
  limit?: number;
}

const contacts = [
  { id: 1, name: 'Sarah Chen', company: 'TechCorp Inc.', status: 'Customer', value: '$45,000', avatar: '👩' },
  { id: 2, name: 'James Wilson', company: 'Innovate.io', status: 'Prospect', value: '$28,000', avatar: '👨' },
  { id: 3, name: 'Maria Garcia', company: 'DesignLab Co.', status: 'Lead', value: '$15,000', avatar: '👩' },
  { id: 4, name: 'Robert Kim', company: 'GlobalNet Ltd.', status: 'Customer', value: '$62,000', avatar: '👨' },
  { id: 5, name: 'Emily Brown', company: 'StartupXYZ', status: 'Prospect', value: '$18,500', avatar: '👩' },
  { id: 6, name: 'Michael Davis', company: 'Enterprise Solutions', status: 'Inactive', value: '$8,200', avatar: '👨' },
];

const statusColors: Record<string, { bg: string; color: string }> = {
  Lead: { bg: '#fef3c7', color: '#92400e' },
  Prospect: { bg: '#dbeafe', color: '#1e40af' },
  Customer: { bg: '#d1fae5', color: '#065f46' },
  Inactive: { bg: '#fee2e2', color: '#991b1b' },
};

export function ContactsTable({ limit }: ContactsTableProps) {
  const data = limit ? contacts.slice(0, limit) : contacts;

  return (
    <Card sx={{ borderRadius: 3, overflow: 'hidden' }}>
      <Box sx={{ px: 3, py: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 600, color: '#111827' }}>Recent Contacts</Typography>
      </Box>
      <Table>
        <TableHead>
          <TableRow sx={{ bgcolor: '#f9fafb' }}>
            <TableCell sx={{ color: '#6b7280', fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase' }}>Name</TableCell>
            <TableCell sx={{ color: '#6b7280', fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase' }}>Company</TableCell>
            <TableCell sx={{ color: '#6b7280', fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase' }}>Status</TableCell>
            <TableCell sx={{ color: '#6b7280', fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase' }}>Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((c) => (
            <TableRow key={c.id} sx={{ '&:hover': { bgcolor: '#f9fafb' } }}>
              <TableCell>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography sx={{ fontSize: '1.3rem' }}>{c.avatar}</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 500, color: '#111827' }}>{c.name}</Typography>
                </Box>
              </TableCell>
              <TableCell sx={{ color: '#374151' }}>{c.company}</TableCell>
              <TableCell>
                <Chip label={c.status} size="small" sx={{ bgcolor: statusColors[c.status]?.bg, color: statusColors[c.status]?.color, fontWeight: 500 }} />
              </TableCell>
              <TableCell sx={{ fontWeight: 600, color: '#111827' }}>{c.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
