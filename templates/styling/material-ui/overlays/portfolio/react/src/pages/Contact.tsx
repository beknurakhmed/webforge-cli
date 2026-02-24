import { Box, Typography, Container, TextField, Button, Card, CardContent, Grid2, Stack } from '@mui/material';

function Contact() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h4" align="center" sx={{ fontWeight: 700, color: '#111827', mb: 1 }}>
        Get In Touch
      </Typography>
      <Typography variant="subtitle1" align="center" sx={{ color: '#6b7280', mb: 4 }}>
        Have a project in mind? Let's work together.
      </Typography>
      <Grid2 container spacing={4}>
        <Grid2 size={{ xs: 12, md: 7 }}>
          <Card sx={{ borderRadius: 3 }}>
            <CardContent sx={{ p: 3 }}>
              <form onSubmit={(e) => e.preventDefault()}>
                <Stack spacing={2}>
                  <Grid2 container spacing={2}>
                    <Grid2 size={{ xs: 12, sm: 6 }}>
                      <TextField
                        label="Name"
                        placeholder="Your name"
                        fullWidth
                        size="small"
                        sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                      />
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 6 }}>
                      <TextField
                        label="Email"
                        type="email"
                        placeholder="your@email.com"
                        fullWidth
                        size="small"
                        sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                      />
                    </Grid2>
                  </Grid2>
                  <TextField
                    label="Subject"
                    placeholder="Project inquiry"
                    fullWidth
                    size="small"
                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                  />
                  <TextField
                    label="Message"
                    placeholder="Tell me about your project..."
                    fullWidth
                    multiline
                    rows={5}
                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ bgcolor: '#4f46e5', textTransform: 'none', fontWeight: 600, alignSelf: 'flex-start', '&:hover': { bgcolor: '#4338ca' } }}
                  >
                    Send Message
                  </Button>
                </Stack>
              </form>
            </CardContent>
          </Card>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 5 }}>
          <Card sx={{ borderRadius: 3, height: '100%' }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, color: '#111827', mb: 2 }}>
                Contact Info
              </Typography>
              <Stack spacing={2}>
                <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                  <Typography sx={{ fontSize: '1.5rem' }}>📧</Typography>
                  <Typography variant="body2" sx={{ color: '#374151' }}>hello@developer.com</Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                  <Typography sx={{ fontSize: '1.5rem' }}>📍</Typography>
                  <Typography variant="body2" sx={{ color: '#374151' }}>San Francisco, CA</Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                  <Typography sx={{ fontSize: '1.5rem' }}>🔗</Typography>
                  <Typography variant="body2" sx={{ color: '#374151' }}>github.com/developer</Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>
    </Container>
  );
}

export default Contact;
