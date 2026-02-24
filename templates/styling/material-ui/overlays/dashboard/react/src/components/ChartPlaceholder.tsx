import { Card, CardContent, Typography, Box } from '@mui/material';

interface ChartPlaceholderProps {
  title: string;
  data?: number[];
}

export function ChartPlaceholder({ title, data }: ChartPlaceholderProps) {
  const bars = data || [40, 65, 45, 80, 55, 70, 90, 60, 75, 50, 85, 95];

  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: 600, color: '#111827', mb: 2 }}>
          {title}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'flex-end', height: 200, gap: '8px' }}>
          {bars.map((h, i) => (
            <Box
              key={i}
              sx={{
                flex: 1,
                height: `${h}%`,
                background: 'linear-gradient(to top, #4f46e5, #818cf8)',
                borderRadius: '4px 4px 0 0',
                transition: 'height 0.3s',
                minWidth: 12,
              }}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
