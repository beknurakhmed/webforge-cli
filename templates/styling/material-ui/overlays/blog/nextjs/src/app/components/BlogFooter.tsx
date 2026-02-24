'use client';

import Link from 'next/link';
import { Box, Container, Grid2, Typography, Stack, Divider } from '@mui/material';

export function BlogFooter() {
  return (
    <Box component="footer" sx={{ bgcolor: '#111827', color: '#d1d5db', pt: 6, pb: 3, mt: 6 }}>
      <Container maxWidth="lg">
        <Grid2 container spacing={4}>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
              <Typography sx={{ fontSize: '1.3rem' }}>📝</Typography>
              <Typography variant="h6" sx={{ fontWeight: 700, color: '#ffffff' }}>{'{{projectName}}'}</Typography>
            </Box>
            <Typography variant="body2" sx={{ color: '#9ca3af', lineHeight: 1.7 }}>
              Sharing insights, tutorials, and stories about technology, design, and the web.
            </Typography>
          </Grid2>
          <Grid2 size={{ xs: 6, md: 2 }}>
            <Typography variant="subtitle2" sx={{ color: '#ffffff', fontWeight: 600, mb: 1.5 }}>Categories</Typography>
            <Stack spacing={1}>
              {[
                { href: '/category/technology', label: 'Technology' },
                { href: '/category/design', label: 'Design' },
                { href: '/category/business', label: 'Business' },
                { href: '/category/tutorial', label: 'Tutorials' },
              ].map((link) => (
                <Link key={link.href} href={link.href} style={{ textDecoration: 'none' }}>
                  <Typography variant="body2" sx={{ color: '#9ca3af', '&:hover': { color: '#ffffff' }, cursor: 'pointer' }}>
                    {link.label}
                  </Typography>
                </Link>
              ))}
            </Stack>
          </Grid2>
          <Grid2 size={{ xs: 6, md: 2 }}>
            <Typography variant="subtitle2" sx={{ color: '#ffffff', fontWeight: 600, mb: 1.5 }}>Links</Typography>
            <Stack spacing={1}>
              {[
                { href: '/about', label: 'About' },
                { href: '/', label: 'Home' },
              ].map((link) => (
                <Link key={link.label} href={link.href} style={{ textDecoration: 'none' }}>
                  <Typography variant="body2" sx={{ color: '#9ca3af', '&:hover': { color: '#ffffff' }, cursor: 'pointer' }}>
                    {link.label}
                  </Typography>
                </Link>
              ))}
              <Typography variant="body2" sx={{ color: '#9ca3af' }}>RSS Feed</Typography>
              <Typography variant="body2" sx={{ color: '#9ca3af' }}>Sitemap</Typography>
            </Stack>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <Typography variant="subtitle2" sx={{ color: '#ffffff', fontWeight: 600, mb: 1.5 }}>Connect</Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              {['🐦', '📘', '💼', '📷'].map((icon, i) => (
                <Typography key={i} sx={{ fontSize: '1.3rem', cursor: 'pointer', '&:hover': { opacity: 0.8 } }}>
                  {icon}
                </Typography>
              ))}
            </Box>
          </Grid2>
        </Grid2>
        <Divider sx={{ borderColor: '#374151', my: 3 }} />
        <Typography variant="body2" sx={{ color: '#6b7280', textAlign: 'center' }}>
          &copy; 2025 {'{{projectName}}'}. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
