'use client';

import { Card, Typography } from 'antd';

const { Title } = Typography;

interface ChartPlaceholderProps {
  title: string;
  type?: 'bar' | 'line';
}

export function ChartPlaceholder({ title, type = 'bar' }: ChartPlaceholderProps) {
  const bars = [40, 65, 45, 80, 55, 70, 60, 85, 50, 75, 90, 68];

  return (
    <Card>
      <Title level={5} style={{ marginBottom: 16 }}>{title}</Title>
      {type === 'bar' ? (
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 200 }}>
          {bars.map((h, i) => (
            <div key={i} style={{ flex: 1, height: `${h}%`, background: 'linear-gradient(180deg, #4f46e5 0%, #818cf8 100%)', borderRadius: 4 }} />
          ))}
        </div>
      ) : (
        <svg viewBox="0 0 400 150" style={{ width: '100%', height: 200 }}>
          <polyline fill="none" stroke="#4f46e5" strokeWidth="2.5" points="0,120 35,90 70,100 105,50 140,70 175,30 210,45 245,20 280,55 315,40 350,25 385,10" />
          <polyline fill="rgba(79,70,229,0.1)" stroke="none" points="0,150 0,120 35,90 70,100 105,50 140,70 175,30 210,45 245,20 280,55 315,40 350,25 385,10 385,150" />
        </svg>
      )}
    </Card>
  );
}
