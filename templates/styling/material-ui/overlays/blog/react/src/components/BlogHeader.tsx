import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

function BlogHeader() {
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
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button
            component={NavLink}
            to="/"
            end
            sx={{
              color: '#6b7280',
              fontWeight: 500,
              textTransform: 'none',
              '&.active': { color: '#4f46e5' },
            }}
          >
            Home
          </Button>
          <Button
            component={NavLink}
            to="/about"
            sx={{
              color: '#6b7280',
              fontWeight: 500,
              textTransform: 'none',
              '&.active': { color: '#4f46e5' },
            }}
          >
            About
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default BlogHeader;
