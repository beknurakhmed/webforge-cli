'use client';

import { useState } from 'react';
import { Box, Typography, Card, Table, TableHead, TableBody, TableRow, TableCell, Chip, TextField, Button, Stack } from '@mui/material';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'Active' | 'Inactive';
  joined: string;
  avatar: string;
}

const users: User[] = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', status: 'Active', joined: '2024-06-15', avatar: '👩' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Editor', status: 'Active', joined: '2024-07-22', avatar: '👨' },
  { id: 3, name: 'Carol Davis', email: 'carol@example.com', role: 'Viewer', status: 'Active', joined: '2024-08-10', avatar: '👩' },
  { id: 4, name: 'David Wilson', email: 'david@example.com', role: 'Editor', status: 'Inactive', joined: '2024-09-05', avatar: '👨' },
  { id: 5, name: 'Eva Martinez', email: 'eva@example.com', role: 'Admin', status: 'Active', joined: '2024-10-18', avatar: '👩' },
  { id: 6, name: 'Frank Brown', email: 'frank@example.com', role: 'Viewer', status: 'Active', joined: '2024-11-02', avatar: '👨' },
  { id: 7, name: 'Grace Lee', email: 'grace@example.com', role: 'Editor', status: 'Inactive', joined: '2024-11-20', avatar: '👩' },
  { id: 8, name: 'Henry Taylor', email: 'henry@example.com', role: 'Viewer', status: 'Active', joined: '2025-01-08', avatar: '👨' },
];

export default function UsersPage() {
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('All');

  const filtered = users.filter((u) => {
    const matchesSearch = u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase());
    const matchesRole = roleFilter === 'All' || u.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  return (
    <Box>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 700, color: '#111827' }}>Users</Typography>
        <Typography variant="body2" sx={{ color: '#6b7280' }}>Manage your team members and their permissions.</Typography>
      </Box>
      <Card sx={{ borderRadius: 3, overflow: 'hidden' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 3, py: 2, flexWrap: 'wrap', gap: 2 }}>
          <TextField size="small" placeholder="Search users..." value={search} onChange={(e) => setSearch(e.target.value)} sx={{ width: 250, '& .MuiOutlinedInput-root': { borderRadius: 2 } }} />
          <Stack direction="row" spacing={0.5}>
            {['All', 'Admin', 'Editor', 'Viewer'].map((role) => (
              <Button
                key={role}
                size="small"
                variant={roleFilter === role ? 'contained' : 'outlined'}
                onClick={() => setRoleFilter(role)}
                sx={{
                  textTransform: 'none',
                  fontWeight: 500,
                  borderRadius: 2,
                  ...(roleFilter === role
                    ? { bgcolor: '#4f46e5', '&:hover': { bgcolor: '#4338ca' } }
                    : { color: '#374151', borderColor: '#d1d5db' }),
                }}
              >
                {role}
              </Button>
            ))}
          </Stack>
        </Box>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: '#f9fafb' }}>
              <TableCell sx={{ color: '#6b7280', fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase' }}>User</TableCell>
              <TableCell sx={{ color: '#6b7280', fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase' }}>Email</TableCell>
              <TableCell sx={{ color: '#6b7280', fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase' }}>Role</TableCell>
              <TableCell sx={{ color: '#6b7280', fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase' }}>Status</TableCell>
              <TableCell sx={{ color: '#6b7280', fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase' }}>Joined</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filtered.map((user) => (
              <TableRow key={user.id} sx={{ '&:hover': { bgcolor: '#f9fafb' } }}>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography sx={{ fontSize: '1.4rem' }}>{user.avatar}</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 500, color: '#111827' }}>{user.name}</Typography>
                  </Box>
                </TableCell>
                <TableCell sx={{ color: '#374151' }}>{user.email}</TableCell>
                <TableCell><Chip label={user.role} size="small" sx={{ bgcolor: '#ede9fe', color: '#4f46e5', fontWeight: 500 }} /></TableCell>
                <TableCell>
                  <Chip label={user.status} size="small" sx={{ bgcolor: user.status === 'Active' ? '#d1fae5' : '#fee2e2', color: user.status === 'Active' ? '#065f46' : '#991b1b', fontWeight: 500 }} />
                </TableCell>
                <TableCell sx={{ color: '#6b7280' }}>{user.joined}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </Box>
  );
}
