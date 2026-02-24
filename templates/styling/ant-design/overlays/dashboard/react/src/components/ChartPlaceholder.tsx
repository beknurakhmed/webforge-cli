import { Card, Typography } from 'antd';

const { Title } = Typography;

interface ChartPlaceholderProps {
  title: string;
  data?: number[];
}

export function ChartPlaceholder({ title, data }: ChartPlaceholderProps) {
  const bars = data || [40, 65, 45, 80, 55, 70, 90, 60, 75, 50, 85, 95];

  return (
    <Card>
      <Title level={5} style={{ marginBottom: 16 }}>{title}</Title>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 200, padding: '0 8px' }}>
        {bars.map((h, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: `${h}%`,
              background: 'linear-gradient(180deg, #4f46e5 0%, #818cf8 100%)',
              borderRadius: 4,
              transition: 'height 0.3s',
            }}
          />
        ))}
      </div>
    </Card>
  );
}
