'use client';

import { useState } from 'react';
import { Box, Typography, Container, Grid2, Card, CardContent, TextField, Button, MenuItem, Select, FormControl, InputLabel, Alert, Stack } from '@mui/material';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" sx={{ fontWeight: 800, color: '#111827', mb: 1 }}>Get in Touch</Typography>
        <Typography variant="body1" sx={{ color: '#6b7280' }}>
          Have a project in mind or just want to say hello? I would love to hear from you.
        </Typography>
      </Box>

      <Grid2 container spacing={3}>
        <Grid2 size={{ xs: 12, md: 7 }}>
          <Card sx={{ borderRadius: 3 }}>
            <CardContent sx={{ p: 4 }}>
              {submitted ? (
                <Box sx={{ textAlign: 'center', py: 4 }}>
                  <Typography sx={{ fontSize: '3rem', mb: 2 }}>✅</Typography>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: '#111827', mb: 1 }}>Message Sent!</Typography>
                  <Typography variant="body1" sx={{ color: '#6b7280', mb: 3 }}>
                    Thank you for reaching out. I will get back to you as soon as possible.
                  </Typography>
                  <Button
                    variant="contained"
                    onClick={() => setSubmitted(false)}
                    sx={{ bgcolor: '#4f46e5', textTransform: 'none', fontWeight: 600, borderRadius: 2, '&:hover': { bgcolor: '#4338ca' } }}
                  >
                    Send Another
                  </Button>
                </Box>
              ) : (
                <Box component="form" onSubmit={handleSubmit}>
                  <Stack spacing={2.5}>
                    <TextField
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      fullWidth
                      sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                    />
                    <TextField
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      fullWidth
                      sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                    />
                    <FormControl fullWidth>
                      <InputLabel>Subject</InputLabel>
                      <Select
                        name="subject"
                        value={formData.subject}
                        label="Subject"
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                        sx={{ borderRadius: 2 }}
                      >
                        <MenuItem value="">Select a subject</MenuItem>
                        <MenuItem value="project">Project Inquiry</MenuItem>
                        <MenuItem value="collaboration">Collaboration</MenuItem>
                        <MenuItem value="freelance">Freelance Work</MenuItem>
                        <MenuItem value="other">Other</MenuItem>
                      </Select>
                    </FormControl>
                    <TextField
                      label="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      required
                      fullWidth
                      multiline
                      rows={5}
                      sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      sx={{ bgcolor: '#4f46e5', textTransform: 'none', fontWeight: 600, py: 1.5, borderRadius: 2, '&:hover': { bgcolor: '#4338ca' } }}
                    >
                      Send Message
                    </Button>
                  </Stack>
                </Box>
              )}
            </CardContent>
          </Card>
        </Grid2>

        <Grid2 size={{ xs: 12, md: 5 }}>
          <Card sx={{ borderRadius: 3, mb: 2 }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, color: '#111827', mb: 2 }}>Contact Information</Typography>
              <Stack spacing={2}>
                {[
                  { icon: '📧', label: 'Email', value: "hello@{{projectName}}.com" },
                  { icon: '📍', label: 'Location', value: 'San Francisco, CA' },
                  { icon: '🕐', label: 'Availability', value: 'Open for freelance projects' },
                ].map((info) => (
                  <Box key={info.label} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Typography sx={{ fontSize: '1.3rem' }}>{info.icon}</Typography>
                    <Box>
                      <Typography variant="caption" sx={{ color: '#9ca3af', display: 'block' }}>{info.label}</Typography>
                      <Typography variant="body2" sx={{ fontWeight: 500, color: '#111827' }}>{info.value}</Typography>
                    </Box>
                  </Box>
                ))}
              </Stack>
            </CardContent>
          </Card>

          <Card sx={{ borderRadius: 3 }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, color: '#111827', mb: 2 }}>Social Links</Typography>
              <Grid2 container spacing={1.5}>
                {[
                  { icon: '💼', label: 'LinkedIn' },
                  { icon: '📂', label: 'GitHub' },
                  { icon: '🐦', label: 'Twitter' },
                  { icon: '📸', label: 'Dribbble' },
                ].map((social) => (
                  <Grid2 size={{ xs: 6 }} key={social.label}>
                    <Card variant="outlined" sx={{ borderRadius: 2, textAlign: 'center', cursor: 'pointer', transition: 'all 0.2s', '&:hover': { borderColor: '#4f46e5', bgcolor: '#eef2ff' } }}>
                      <CardContent sx={{ p: 1.5, '&:last-child': { pb: 1.5 } }}>
                        <Typography sx={{ fontSize: '1.3rem', mb: 0.5 }}>{social.icon}</Typography>
                        <Typography variant="caption" sx={{ fontWeight: 500, color: '#374151' }}>{social.label}</Typography>
                      </CardContent>
                    </Card>
                  </Grid2>
                ))}
              </Grid2>
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>
    </Container>
  );
}
