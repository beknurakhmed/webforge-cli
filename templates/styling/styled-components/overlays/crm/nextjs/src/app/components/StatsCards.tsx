'use client';

import styled from 'styled-components';

const StatsGrid = styled.div`display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.25rem; margin-bottom: 2rem;`;
const StatCard = styled.div`background: white; padding: 1.5rem; border-radius: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.08);`;
const StatHeader = styled.div`display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;`;
const StatIcon = styled.span`font-size: 1.5rem;`;
const StatChange = styled.span<{ $trend: 'up' | 'down' }>`
  font-size: 0.8rem; font-weight: 600; padding: 0.2rem 0.5rem; border-radius: 20px;
  color: ${props => props.$trend === 'up' ? '#059669' : '#dc2626'};
  background: ${props => props.$trend === 'up' ? '#d1fae5' : '#fee2e2'};
`;
const StatValue = styled.p`font-size: 1.75rem; font-weight: 800; color: #111827;`;
const StatTitle = styled.p`font-size: 0.85rem; color: #6b7280; margin-top: 0.25rem;`;

interface Stat { title: string; value: string; change: string; trend: 'up' | 'down'; icon: string; }

const stats: Stat[] = [
  { title: 'Total Contacts', value: '1,248', change: '+12.5%', trend: 'up', icon: '👥' },
  { title: 'Active Deals', value: '42', change: '+8.3%', trend: 'up', icon: '💼' },
  { title: 'Revenue Pipeline', value: '$284,500', change: '+23.1%', trend: 'up', icon: '💰' },
  { title: 'Conversion Rate', value: '24.8%', change: '-2.1%', trend: 'down', icon: '📈' },
];

export function StatsCards() {
  return (
    <StatsGrid>
      {stats.map((stat) => (
        <StatCard key={stat.title}>
          <StatHeader><StatIcon>{stat.icon}</StatIcon><StatChange $trend={stat.trend}>{stat.change}</StatChange></StatHeader>
          <StatValue>{stat.value}</StatValue>
          <StatTitle>{stat.title}</StatTitle>
        </StatCard>
      ))}
    </StatsGrid>
  );
}
