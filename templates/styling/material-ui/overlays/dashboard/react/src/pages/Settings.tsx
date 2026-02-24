import { useState } from 'react';
import { Box, Typography, Card, CardContent, TextField, Switch, FormControlLabel, Button, Stack } from '@mui/material';

export function Settings() {
  const [name, setName] = useState('Brian Admin');
  const [email, setEmail] = useState('brian@example.com');
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, color: '#111827', mb: 3 }}>
        Settings
      </Typography>
      <Card sx={{ borderRadius: 3, mb: 2 }}>
        <CardContent sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, color: '#111827', mb: 2 }}>
            Profile
          </Typography>
          <Stack spacing={2} sx={{ maxWidth: 400 }}>
            <TextField
              label="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              size="small"
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
            />
            <TextField
              label="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              size="small"
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
            />
          </Stack>
        </CardContent>
      </Card>
      <Card sx={{ borderRadius: 3, mb: 3 }}>
        <CardContent sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, color: '#111827', mb: 2 }}>
            Preferences
          </Typography>
          <Stack spacing={1}>
            <FormControlLabel
              control={
                <Switch
                  checked={darkMode}
                  onChange={(e) => setDarkMode(e.target.checked)}
                  sx={{ '& .Mui-checked': { color: '#4f46e5' }, '& .Mui-checked + .MuiSwitch-track': { bgcolor: '#4f46e5' } }}
                />
              }
              label="Dark Mode"
              sx={{ color: '#374151' }}
            />
            <FormControlLabel
              control={
                <Switch
                  checked={notifications}
                  onChange={(e) => setNotifications(e.target.checked)}
                  sx={{ '& .Mui-checked': { color: '#4f46e5' }, '& .Mui-checked + .MuiSwitch-track': { bgcolor: '#4f46e5' } }}
                />
              }
              label="Email Notifications"
              sx={{ color: '#374151' }}
            />
          </Stack>
        </CardContent>
      </Card>
      <Button
        variant="contained"
        sx={{ bgcolor: '#4f46e5', textTransform: 'none', fontWeight: 600, '&:hover': { bgcolor: '#4338ca' } }}
      >
        Save Changes
      </Button>
    </Box>
  );
}
