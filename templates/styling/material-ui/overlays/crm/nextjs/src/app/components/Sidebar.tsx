'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Typography, Box, Avatar } from '@mui/material';

const navItems = [
  { href: '/', label: 'Dashboard', icon: '📊' },
  { href: '/contacts', label: 'Contacts', icon: '👤' },
  { href: '/deals', label: 'Deals', icon: '💼' },
  { href: '/settings', label: 'Settings', icon: '⚙️' },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': { width: 240, bgcolor: '#111827', color: '#ffffff', borderRight: 'none', display: 'flex', flexDirection: 'column' },
      }}
    >
      <Box sx={{ p: 2.5, display: 'flex', alignItems: 'center', gap: 1 }}>
        <Typography sx={{ fontSize: '1.3rem' }}>💼</Typography>
        <Typography variant="h6" sx={{ color: '#4f46e5', fontWeight: 700 }}>{'{{projectName}}'}</Typography>
      </Box>
      <List sx={{ px: 1.5, flex: 1 }}>
        {navItems.map((item) => (
          <ListItemButton
            key={item.href}
            component={Link}
            href={item.href}
            sx={{
              borderRadius: 2, mb: 0.5, color: '#9ca3af',
              '&:hover': { bgcolor: '#1f2937', color: '#ffffff' },
              ...(pathname === item.href && { bgcolor: '#4f46e5', color: '#ffffff', '&:hover': { bgcolor: '#4338ca' } }),
            }}
          >
            <ListItemIcon sx={{ minWidth: 36, fontSize: '1.1rem' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} primaryTypographyProps={{ fontSize: '0.95rem' }} />
          </ListItemButton>
        ))}
      </List>
      <Box sx={{ p: 2, borderTop: '1px solid #374151', display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <Avatar sx={{ width: 32, height: 32, bgcolor: '#4f46e5', fontSize: '0.9rem' }}>👤</Avatar>
        <Box>
          <Typography variant="body2" sx={{ color: '#ffffff', fontWeight: 500 }}>Sales Manager</Typography>
          <Typography variant="caption" sx={{ color: '#6b7280' }}>Team Lead</Typography>
        </Box>
      </Box>
    </Drawer>
  );
}
