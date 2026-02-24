import { Box, Typography } from '@mui/material';

function BlogFooter() {
  return (
    <Box component="footer" sx={{ bgcolor: '#111827', color: '#6b7280', py: 3, textAlign: 'center', mt: 'auto' }}>
      <Typography variant="body2">
        &copy; 2025 {'{{projectName}}'}. Built with passion for the web.
      </Typography>
    </Box>
  );
}

export default BlogFooter;
