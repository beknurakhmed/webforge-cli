import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

function Navbar() {
  return (
    <AppBar position="sticky" color="default" elevation={0} sx={{ borderBottom: '1px solid #e5e7eb', bgcolor: '#ffffff' }}>
      <Toolbar sx={{ maxWidth: 1200, mx: 'auto', width: '100%' }}>
        <Typography
          variant="h6"
          component={NavLink}
          to="/"
          sx={{ color: '#4f46e5', fontWeight: 700, textDecoration: 'none', flexGrow: 1 }}
        >
          {'{{projectName}}'}
        </Typography>
        <Box sx={{ display: 'flex', gap: 0.5 }}>
          {navItems.map((item) => (
            <Button
              key={item.to}
              component={NavLink}
              to={item.to}
              end={item.to === '/'}
              sx={{
                color: '#374151',
                fontWeight: 500,
                textTransform: 'none',
                '&.active': { color: '#4f46e5' },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
