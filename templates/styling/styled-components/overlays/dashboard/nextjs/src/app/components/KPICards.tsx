'use client';

import styled from 'styled-components';

const KPIGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.25rem;
  margin-bottom: 2rem;
`;

const KPICard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
`;

const KPIHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const KPIIcon = styled.span`
  font-size: 1.5rem;
`;

const KPIChange = styled.span<{ $trend: 'up' | 'down' }>`
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.2rem 0.5rem;
  border-radius: 20px;
  color: ${props => props.$trend === 'up' ? '#059669' : '#dc2626'};
  background: ${props => props.$trend === 'up' ? '#d1fae5' : '#fee2e2'};
`;

const KPIValue = styled.p`
  font-size: 1.75rem;
  font-weight: 800;
  color: #111827;
`;

const KPITitle = styled.p`
  font-size: 0.85rem;
  color: #6b7280;
  margin-top: 0.25rem;
`;

interface KPI {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: string;
}

const kpis: KPI[] = [
  { title: 'Total Revenue', value: '$48,250', change: '+12.5%', trend: 'up', icon: '💰' },
  { title: 'Active Users', value: '2,340', change: '+8.1%', trend: 'up', icon: '👥' },
  { title: 'Orders', value: '1,120', change: '+23.4%', trend: 'up', icon: '📦' },
  { title: 'Conversion Rate', value: '3.2%', change: '-1.8%', trend: 'down', icon: '📈' },
];

export function KPICards() {
  return (
    <KPIGrid>
      {kpis.map((kpi) => (
        <KPICard key={kpi.title}>
          <KPIHeader>
            <KPIIcon>{kpi.icon}</KPIIcon>
            <KPIChange $trend={kpi.trend}>{kpi.change}</KPIChange>
          </KPIHeader>
          <KPIValue>{kpi.value}</KPIValue>
          <KPITitle>{kpi.title}</KPITitle>
        </KPICard>
      ))}
    </KPIGrid>
  );
}
