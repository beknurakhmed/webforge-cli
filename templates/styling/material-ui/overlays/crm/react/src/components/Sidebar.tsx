import { NavLink } from 'react-router-dom';
import {
  Drawer, List, ListItemButton, ListItemIcon, ListItemText, Typography, Box,
} from '@mui/material';

const navItems = [
  { to: '/', label: 'Dashboard', icon: '📊' },
  { to: '/contacts', label: 'Contacts', icon: '👤' },
  { to: '/deals', label: 'Deals', icon: '💼' },
  { to: '/settings', label: 'Settings', icon: '⚙️' },
];

function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          bgcolor: '#111827',
          color: '#ffffff',
          borderRight: 'none',
        },
      }}
    >
      <Box sx={{ p: 2.5 }}>
        <Typography variant="h6" sx={{ color: '#4f46e5', fontWeight: 700 }}>
          {'{{projectName}}'}
        </Typography>
      </Box>
      <List sx={{ px: 1.5 }}>
        {navItems.map((item) => (
          <ListItemButton
            key={item.to}
            component={NavLink}
            to={item.to}
            end={item.to === '/'}
            sx={{
              borderRadius: 2,
              mb: 0.5,
              color: '#9ca3af',
              '&:hover': { bgcolor: '#1f2937', color: '#ffffff' },
              '&.active': { bgcolor: '#4f46e5', color: '#ffffff' },
            }}
          >
            <ListItemIcon sx={{ minWidth: 36, fontSize: '1.1rem' }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.label} primaryTypographyProps={{ fontSize: '0.95rem' }} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
}

export default Sidebar;
