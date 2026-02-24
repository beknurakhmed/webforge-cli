import { Box, Typography, Card, CardContent, Avatar, List, ListItem, ListItemText } from '@mui/material';

function About() {
  return (
    <Box sx={{ maxWidth: 720, mx: 'auto' }}>
      <Typography variant="h4" sx={{ fontWeight: 700, color: '#111827', mb: 2 }}>
        About This Blog
      </Typography>
      <Typography variant="body1" sx={{ color: '#374151', lineHeight: 1.7, mb: 4 }}>
        A blog dedicated to modern web development, covering topics from frontend frameworks
        to backend architectures and everything in between.
      </Typography>
      <Card sx={{ borderRadius: 3, mb: 4 }}>
        <CardContent sx={{ display: 'flex', gap: 3, p: 3 }}>
          <Avatar sx={{ width: 64, height: 64, fontSize: '2rem', bgcolor: '#eef2ff' }}>
            ✍️
          </Avatar>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600, color: '#111827' }}>
              Jane Developer
            </Typography>
            <Typography variant="body2" sx={{ color: '#4f46e5', fontWeight: 500, mb: 1 }}>
              Senior Software Engineer
            </Typography>
            <Typography variant="body2" sx={{ color: '#6b7280', lineHeight: 1.6 }}>
              With over 8 years of experience building web applications, I write about
              the tools, techniques, and practices that help developers build better software.
            </Typography>
          </Box>
        </CardContent>
      </Card>
      <Typography variant="h5" sx={{ fontWeight: 600, color: '#111827', mb: 1 }}>
        Get in Touch
      </Typography>
      <Typography variant="body2" sx={{ color: '#6b7280', mb: 2 }}>
        Have a question or want to collaborate? Reach out anytime.
      </Typography>
      <List disablePadding>
        <ListItem disableGutters>
          <ListItemText primary="Email: hello@devblog.com" primaryTypographyProps={{ variant: 'body2', color: '#374151' }} />
        </ListItem>
        <ListItem disableGutters>
          <ListItemText primary="GitHub: @janedev" primaryTypographyProps={{ variant: 'body2', color: '#374151' }} />
        </ListItem>
        <ListItem disableGutters>
          <ListItemText primary="Twitter: @janedev" primaryTypographyProps={{ variant: 'body2', color: '#374151' }} />
        </ListItem>
      </List>
    </Box>
  );
}

export default About;
