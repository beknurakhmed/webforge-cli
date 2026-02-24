'use client';

import { useState } from 'react';
import { Box, Typography, Card, CardContent, TextField, Switch, FormControlLabel, Button, Stack, Grid2, MenuItem, Select, FormControl, InputLabel, Chip } from '@mui/material';

export default function SettingsPage() {
  const [companyName, setCompanyName] = useState('{{projectName}}');
  const [email, setEmail] = useState('admin@example.com');
  const [notifications, setNotifications] = useState(true);
  const [dealAlerts, setDealAlerts] = useState(true);

  return (
    <Box>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 700, color: '#111827' }}>Settings</Typography>
        <Typography variant="body2" sx={{ color: '#6b7280' }}>Manage your CRM preferences and configuration.</Typography>
      </Box>
      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Card sx={{ borderRadius: 3, mb: 2 }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, color: '#111827', mb: 2 }}>General Settings</Typography>
              <Stack spacing={2}>
                <TextField label="Company Name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} fullWidth size="small" sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }} />
                <TextField label="Admin Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth size="small" sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }} />
                <FormControl size="small" fullWidth>
                  <InputLabel>Currency</InputLabel>
                  <Select defaultValue="USD" label="Currency" sx={{ borderRadius: 2 }}>
                    <MenuItem value="USD">USD ($)</MenuItem>
                    <MenuItem value="EUR">EUR (&euro;)</MenuItem>
                    <MenuItem value="GBP">GBP (&pound;)</MenuItem>
                  </Select>
                </FormControl>
                <Button variant="contained" sx={{ bgcolor: '#4f46e5', textTransform: 'none', fontWeight: 600, alignSelf: 'flex-start', '&:hover': { bgcolor: '#4338ca' } }}>Save Changes</Button>
              </Stack>
            </CardContent>
          </Card>
          <Card sx={{ borderRadius: 3 }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, color: '#111827', mb: 2 }}>Pipeline Stages</Typography>
              <Stack spacing={1}>
                {['Qualification', 'Proposal', 'Negotiation', 'Closed Won', 'Closed Lost'].map((stage, i) => (
                  <Box key={stage} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Chip label={i + 1} size="small" sx={{ bgcolor: '#4f46e5', color: '#ffffff', fontWeight: 600, width: 28, height: 28 }} />
                    <Typography variant="body2" sx={{ color: '#374151' }}>{stage}</Typography>
                  </Box>
                ))}
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
                  <FormControlLabel control={<Switch checked={notifications} onChange={(e) => setNotifications(e.target.checked)} sx={{ '& .Mui-checked': { color: '#4f46e5' }, '& .Mui-checked + .MuiSwitch-track': { bgcolor: '#4f46e5' } }} />} label="Email Notifications" />
                  <Typography variant="caption" sx={{ color: '#6b7280', display: 'block', ml: 6 }}>Receive email alerts for new leads</Typography>
                </Box>
                <Box>
                  <FormControlLabel control={<Switch checked={dealAlerts} onChange={(e) => setDealAlerts(e.target.checked)} sx={{ '& .Mui-checked': { color: '#4f46e5' }, '& .Mui-checked + .MuiSwitch-track': { bgcolor: '#4f46e5' } }} />} label="Deal Alerts" />
                  <Typography variant="caption" sx={{ color: '#6b7280', display: 'block', ml: 6 }}>Get notified when deal stages change</Typography>
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
                <Button variant="contained" sx={{ bgcolor: '#4f46e5', textTransform: 'none', fontWeight: 600, alignSelf: 'flex-start', '&:hover': { bgcolor: '#4338ca' } }}>Update Password</Button>
              </Stack>
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>
    </Box>
  );
}
