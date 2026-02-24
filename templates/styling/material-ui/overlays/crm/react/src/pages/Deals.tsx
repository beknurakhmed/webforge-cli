import { Box, Typography, Card, CardContent, Grid2, Chip } from '@mui/material';

interface Deal {
  id: number;
  company: string;
  value: number;
  contact: string;
  stage: string;
}

const deals: Deal[] = [
  { id: 1, company: 'Acme Corp', value: 25000, contact: 'John Smith', stage: 'Qualified' },
  { id: 2, company: 'Globex Inc', value: 18000, contact: 'Sarah Johnson', stage: 'Prospect' },
  { id: 3, company: 'Wayne Enterprises', value: 45000, contact: 'Emily Chen', stage: 'Proposal' },
  { id: 4, company: 'Stark Industries', value: 32000, contact: 'Alex Turner', stage: 'Won' },
  { id: 5, company: 'Initech', value: 12000, contact: 'Mike Davis', stage: 'Qualified' },
  { id: 6, company: 'Oscorp', value: 28000, contact: 'David Brown', stage: 'Prospect' },
  { id: 7, company: 'LexCorp', value: 55000, contact: 'Rachel Green', stage: 'Proposal' },
  { id: 8, company: 'Umbrella Corp', value: 15000, contact: 'Lisa Wang', stage: 'Won' },
];

const stages = ['Prospect', 'Qualified', 'Proposal', 'Won'];

const stageColors: Record<string, string> = {
  Prospect: '#6b7280',
  Qualified: '#f59e0b',
  Proposal: '#4f46e5',
  Won: '#10b981',
};

function Deals() {
  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, color: '#111827', mb: 3 }}>
        Deals Pipeline
      </Typography>
      <Grid2 container spacing={2}>
        {stages.map((stage) => (
          <Grid2 size={{ xs: 12, sm: 6, md: 3 }} key={stage}>
            <Box sx={{ bgcolor: '#f3f4f6', borderRadius: 3, p: 2, minHeight: 400 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <Chip
                  label={stage}
                  size="small"
                  sx={{ bgcolor: stageColors[stage], color: '#ffffff', fontWeight: 600 }}
                />
                <Typography variant="caption" sx={{ color: '#6b7280' }}>
                  {deals.filter((d) => d.stage === stage).length}
                </Typography>
              </Box>
              {deals
                .filter((d) => d.stage === stage)
                .map((deal) => (
                  <Card key={deal.id} sx={{ borderRadius: 2, mb: 1.5 }}>
                    <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#111827' }}>
                        {deal.company}
                      </Typography>
                      <Typography variant="h6" sx={{ color: '#4f46e5', fontWeight: 700, my: 0.5 }}>
                        ${deal.value.toLocaleString()}
                      </Typography>
                      <Typography variant="caption" sx={{ color: '#6b7280' }}>
                        {deal.contact}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
            </Box>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
}

export default Deals;
