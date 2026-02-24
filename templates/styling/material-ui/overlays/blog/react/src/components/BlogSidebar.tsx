import { Link } from 'react-router-dom';
import { Box, Typography, Chip, TextField, Button, Stack } from '@mui/material';
import { categories } from '../data/posts';

function BlogSidebar() {
  return (
    <Box component="aside" sx={{ width: 280, flexShrink: 0 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" sx={{ fontWeight: 600, color: '#111827', mb: 1.5 }}>
          Categories
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {categories.map((cat) => (
            <Chip
              key={cat}
              label={cat}
              component={Link}
              to={`/category/${cat.toLowerCase()}`}
              clickable
              sx={{
                bgcolor: '#eef2ff',
                color: '#4f46e5',
                fontWeight: 500,
                '&:hover': { bgcolor: '#4f46e5', color: '#ffffff' },
              }}
            />
          ))}
        </Box>
      </Box>
      <Box>
        <Typography variant="h6" sx={{ fontWeight: 600, color: '#111827', mb: 1 }}>
          Newsletter
        </Typography>
        <Typography variant="body2" sx={{ color: '#6b7280', mb: 1.5 }}>
          Subscribe to get the latest posts delivered to your inbox.
        </Typography>
        <Stack spacing={1}>
          <TextField
            type="email"
            placeholder="your@email.com"
            size="small"
            fullWidth
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
          />
          <Button
            variant="contained"
            fullWidth
            sx={{ bgcolor: '#4f46e5', textTransform: 'none', fontWeight: 600, '&:hover': { bgcolor: '#4338ca' } }}
          >
            Subscribe
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default BlogSidebar;
