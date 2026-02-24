'use client';

import { Box, Typography, Grid2, Card, CardContent, Chip } from '@mui/material';

interface Deal { id: number; company: string; value: number; contact: string; stage: string; }

const deals: Deal[] = [
  { id: 1, company: 'TechCorp Inc.', value: 45000, contact: 'Sarah Chen', stage: 'Prospect' },
  { id: 2, company: 'Innovate.io', value: 28000, contact: 'James Wilson', stage: 'Proposal' },
  { id: 3, company: 'DesignLab Co.', value: 15000, contact: 'Maria Garcia', stage: 'Qualified' },
  { id: 4, company: 'GlobalNet Ltd.', value: 62000, contact: 'Robert Kim', stage: 'Won' },
  { id: 5, company: 'StartupXYZ', value: 18500, contact: 'Emily Brown', stage: 'Proposal' },
  { id: 6, company: 'Oscorp Labs', value: 34000, contact: 'Michael Davis', stage: 'Prospect' },
  { id: 7, company: 'LexCorp', value: 55000, contact: 'Rachel Green', stage: 'Qualified' },
  { id: 8, company: 'Umbrella Co.', value: 21000, contact: 'Lisa Wang', stage: 'Won' },
];

const stages = ['Prospect', 'Qualified', 'Proposal', 'Won'];
const stageColors: Record<string, string> = { Prospect: '#6b7280', Qualified: '#f59e0b', Proposal: '#4f46e5', Won: '#10b981' };

export default function DealsPage() {
  const pipelineTotal = deals.filter((d) => d.stage !== 'Won').reduce((sum, d) => sum + d.value, 0);

  return (
    <Box>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 700, color: '#111827' }}>Deals Pipeline</Typography>
        <Typography variant="body2" sx={{ color: '#6b7280' }}>Pipeline value: ${pipelineTotal.toLocaleString()}</Typography>
      </Box>
      <Grid2 container spacing={2}>
        {stages.map((stage) => {
          const stageDeals = deals.filter((d) => d.stage === stage);
          const stageTotal = stageDeals.reduce((sum, d) => sum + d.value, 0);
          return (
            <Grid2 size={{ xs: 12, sm: 6, md: 3 }} key={stage}>
              <Box sx={{ bgcolor: '#f3f4f6', borderRadius: 3, p: 2, minHeight: 400 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                  <Chip label={stage} size="small" sx={{ bgcolor: stageColors[stage], color: '#ffffff', fontWeight: 600 }} />
                  <Typography variant="caption" sx={{ color: '#6b7280' }}>{stageDeals.length}</Typography>
                </Box>
                <Typography variant="body2" sx={{ color: '#6b7280', mb: 2 }}>${stageTotal.toLocaleString()}</Typography>
                {stageDeals.map((deal) => (
                  <Card key={deal.id} sx={{ borderRadius: 2, mb: 1.5 }}>
                    <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#111827' }}>{deal.company}</Typography>
                      <Typography variant="h6" sx={{ color: '#4f46e5', fontWeight: 700, my: 0.5 }}>${deal.value.toLocaleString()}</Typography>
                      <Typography variant="caption" sx={{ color: '#6b7280' }}>👤 {deal.contact}</Typography>
                    </CardContent>
                  </Card>
                ))}
              </Box>
            </Grid2>
          );
        })}
      </Grid2>
    </Box>
  );
}
