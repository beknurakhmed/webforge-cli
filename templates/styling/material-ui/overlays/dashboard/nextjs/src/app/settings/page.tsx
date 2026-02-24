'use client';

import { useState } from 'react';
import { Box, Typography, Card, CardContent, TextField, Switch, FormControlLabel, Button, Stack, Grid2, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

export default function SettingsPage() {
  const [siteName, setSiteName] = useState('{{projectName}}');
  const [email, setEmail] = useState('admin@example.com');
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');
  const [timezone, setTimezone] = useState('UTC');

  return (
    <Box>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 700, color: '#111827' }}>Settings</Typography>
        <Typography variant="body2" sx={{ color: '#6b7280' }}>Manage your application preferences and configuration.</Typography>
      </Box>
      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Card sx={{ borderRadius: 3 }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, color: '#111827', mb: 2 }}>General</Typography>
              <Stack spacing={2}>
                <TextField label="Site Name" value={siteName} onChange={(e) => setSiteName(e.target.value)} fullWidth size="small" sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }} />
                <TextField label="Admin Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth size="small" sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }} />
                <FormControl size="small" fullWidth>
                  <InputLabel>Language</InputLabel>
                  <Select value={language} onChange={(e) => setLanguage(e.target.value)} label="Language" sx={{ borderRadius: 2 }}>
                    <MenuItem value="en">English</MenuItem>
                    <MenuItem value="es">Spanish</MenuItem>
                    <MenuItem value="fr">French</MenuItem>
                    <MenuItem value="de">German</MenuItem>
                  </Select>
                </FormControl>
                <FormControl size="small" fullWidth>
                  <InputLabel>Timezone</InputLabel>
                  <Select value={timezone} onChange={(e) => setTimezone(e.target.value)} label="Timezone" sx={{ borderRadius: 2 }}>
                    <MenuItem value="UTC">UTC</MenuItem>
                    <MenuItem value="EST">Eastern Time</MenuItem>
                    <MenuItem value="PST">Pacific Time</MenuItem>
                    <MenuItem value="CET">Central European</MenuItem>
                  </Select>
                </FormControl>
              </Stack>
            </CardContent>
          </Card>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Card sx={{ borderRadius: 3, mb: 2 }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, color: '#111827', mb: 2 }}>Notifications</Typography>
              <Stack spacing={1}>
                <Box>
                  <FormControlLabel
                    control={<Switch checked={notifications} onChange={(e) => setNotifications(e.target.checked)} sx={{ '& .Mui-checked': { color: '#4f46e5' }, '& .Mui-checked + .MuiSwitch-track': { bgcolor: '#4f46e5' } }} />}
                    label="Email Notifications"
                  />
                  <Typography variant="caption" sx={{ color: '#6b7280', display: 'block', ml: 6 }}>Receive email updates about activity</Typography>
                </Box>
                <Box>
                  <FormControlLabel
                    control={<Switch checked={darkMode} onChange={(e) => setDarkMode(e.target.checked)} sx={{ '& .Mui-checked': { color: '#4f46e5' }, '& .Mui-checked + .MuiSwitch-track': { bgcolor: '#4f46e5' } }} />}
                    label="Dark Mode"
                  />
                  <Typography variant="caption" sx={{ color: '#6b7280', display: 'block', ml: 6 }}>Use dark theme for the dashboard</Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>
          <Card sx={{ borderRadius: 3 }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, color: '#111827', mb: 2 }}>Security</Typography>
              <Stack spacing={2}>
                <TextField label="Current Password" type="password" placeholder="Enter current password" fullWidth size="small" sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }} />
                <TextField label="New Password" type="password" placeholder="Enter new password" fullWidth size="small" sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }} />
                <TextField label="Confirm Password" type="password" placeholder="Confirm new password" fullWidth size="small" sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }} />
                <Button variant="contained" sx={{ bgcolor: '#4f46e5', textTransform: 'none', fontWeight: 600, alignSelf: 'flex-start', '&:hover': { bgcolor: '#4338ca' } }}>Update Password</Button>
              </Stack>
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>
    </Box>
  );
}
