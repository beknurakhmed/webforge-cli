import { Box, Typography, Card, CardContent, TextField, Button, Stack, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

function Settings() {
  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, color: '#111827', mb: 3 }}>
        Settings
      </Typography>
      <Card sx={{ borderRadius: 3, mb: 3 }}>
        <CardContent sx={{ p: 3 }}>
          <form onSubmit={(e) => e.preventDefault()}>
            <Stack spacing={2.5} sx={{ maxWidth: 400 }}>
              <TextField
                label="Company Name"
                defaultValue="My Company"
                fullWidth
                size="small"
                sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
              />
              <TextField
                label="Email Address"
                type="email"
                defaultValue="admin@company.com"
                fullWidth
                size="small"
                sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
              />
              <FormControl size="small" fullWidth>
                <InputLabel>Timezone</InputLabel>
                <Select defaultValue="UTC-5" label="Timezone" sx={{ borderRadius: 2 }}>
                  <MenuItem value="UTC-8">Pacific Time (UTC-8)</MenuItem>
                  <MenuItem value="UTC-7">Mountain Time (UTC-7)</MenuItem>
                  <MenuItem value="UTC-6">Central Time (UTC-6)</MenuItem>
                  <MenuItem value="UTC-5">Eastern Time (UTC-5)</MenuItem>
                  <MenuItem value="UTC+0">UTC</MenuItem>
                  <MenuItem value="UTC+1">Central European (UTC+1)</MenuItem>
                </Select>
              </FormControl>
              <Button
                type="submit"
                variant="contained"
                sx={{ bgcolor: '#4f46e5', textTransform: 'none', fontWeight: 600, alignSelf: 'flex-start', '&:hover': { bgcolor: '#4338ca' } }}
              >
                Save Changes
              </Button>
            </Stack>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Settings;
