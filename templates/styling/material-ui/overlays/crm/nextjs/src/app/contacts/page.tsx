'use client';

import { useState } from 'react';
import { Box, Typography, Card, Table, TableHead, TableBody, TableRow, TableCell, Chip, TextField, Button, Stack } from '@mui/material';

interface Contact {
  id: number;
  name: string;
  email: string;
  company: string;
  phone: string;
  status: 'Lead' | 'Prospect' | 'Customer' | 'Inactive';
  value: string;
  avatar: string;
  lastContact: string;
}

const contacts: Contact[] = [
  { id: 1, name: 'Sarah Chen', email: 'sarah@techcorp.com', company: 'TechCorp Inc.', phone: '+1 (555) 123-4567', status: 'Customer', value: '$45,000', avatar: '👩', lastContact: '2025-01-15' },
  { id: 2, name: 'James Wilson', email: 'james@innovate.io', company: 'Innovate.io', phone: '+1 (555) 234-5678', status: 'Prospect', value: '$28,000', avatar: '👨', lastContact: '2025-01-14' },
  { id: 3, name: 'Maria Garcia', email: 'maria@designlab.co', company: 'DesignLab Co.', phone: '+1 (555) 345-6789', status: 'Lead', value: '$15,000', avatar: '👩', lastContact: '2025-01-13' },
  { id: 4, name: 'Robert Kim', email: 'robert@globalnet.com', company: 'GlobalNet Ltd.', phone: '+1 (555) 456-7890', status: 'Customer', value: '$62,000', avatar: '👨', lastContact: '2025-01-12' },
  { id: 5, name: 'Emily Brown', email: 'emily@startupxyz.com', company: 'StartupXYZ', phone: '+1 (555) 567-8901', status: 'Prospect', value: '$18,500', avatar: '👩', lastContact: '2025-01-11' },
  { id: 6, name: 'Michael Davis', email: 'michael@enterprise.com', company: 'Enterprise Solutions', phone: '+1 (555) 678-9012', status: 'Inactive', value: '$8,200', avatar: '👨', lastContact: '2024-12-20' },
];

const statusColors: Record<string, { bg: string; color: string }> = {
  Lead: { bg: '#fef3c7', color: '#92400e' },
  Prospect: { bg: '#dbeafe', color: '#1e40af' },
  Customer: { bg: '#d1fae5', color: '#065f46' },
  Inactive: { bg: '#fee2e2', color: '#991b1b' },
};

export default function ContactsPage() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const filtered = contacts.filter((c) => {
    const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.company.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === 'All' || c.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <Box>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 700, color: '#111827' }}>Contacts</Typography>
        <Typography variant="body2" sx={{ color: '#6b7280' }}>Manage your contacts and customer relationships.</Typography>
      </Box>
      <Card sx={{ borderRadius: 3, overflow: 'hidden' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 3, py: 2, flexWrap: 'wrap', gap: 2 }}>
          <TextField size="small" placeholder="Search contacts..." value={search} onChange={(e) => setSearch(e.target.value)} sx={{ width: 260, '& .MuiOutlinedInput-root': { borderRadius: 2 } }} />
          <Stack direction="row" spacing={0.5}>
            {['All', 'Lead', 'Prospect', 'Customer', 'Inactive'].map((status) => (
              <Button key={status} size="small" variant={statusFilter === status ? 'contained' : 'outlined'} onClick={() => setStatusFilter(status)}
                sx={{ textTransform: 'none', fontWeight: 500, borderRadius: 2, ...(statusFilter === status ? { bgcolor: '#4f46e5', '&:hover': { bgcolor: '#4338ca' } } : { color: '#374151', borderColor: '#d1d5db' }) }}>
                {status}
              </Button>
            ))}
          </Stack>
        </Box>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: '#f9fafb' }}>
              <TableCell sx={{ color: '#6b7280', fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase' }}>Name</TableCell>
              <TableCell sx={{ color: '#6b7280', fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase' }}>Company</TableCell>
              <TableCell sx={{ color: '#6b7280', fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase' }}>Email</TableCell>
              <TableCell sx={{ color: '#6b7280', fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase' }}>Status</TableCell>
              <TableCell sx={{ color: '#6b7280', fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase' }}>Value</TableCell>
              <TableCell sx={{ color: '#6b7280', fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase' }}>Last Contact</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filtered.map((c) => (
              <TableRow key={c.id} sx={{ '&:hover': { bgcolor: '#f9fafb' } }}>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography sx={{ fontSize: '1.3rem' }}>{c.avatar}</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 500, color: '#111827' }}>{c.name}</Typography>
                  </Box>
                </TableCell>
                <TableCell sx={{ color: '#374151' }}>{c.company}</TableCell>
                <TableCell sx={{ color: '#374151' }}>{c.email}</TableCell>
                <TableCell><Chip label={c.status} size="small" sx={{ bgcolor: statusColors[c.status]?.bg, color: statusColors[c.status]?.color, fontWeight: 500 }} /></TableCell>
                <TableCell sx={{ fontWeight: 600, color: '#111827' }}>{c.value}</TableCell>
                <TableCell sx={{ color: '#6b7280' }}>{c.lastContact}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {filtered.length === 0 && (
          <Box sx={{ py: 4, textAlign: 'center' }}>
            <Typography variant="body2" sx={{ color: '#6b7280' }}>No contacts found matching your criteria.</Typography>
          </Box>
        )}
      </Card>
    </Box>
  );
}
