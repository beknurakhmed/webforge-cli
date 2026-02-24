import styled from 'styled-components';
import { contacts } from '../data/contacts';

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StatCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.25rem;
  border: 1px solid #e5e7eb;
  position: relative;
  overflow: hidden;
`;

const StatIndicator = styled.div<{ $color: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: ${props => props.$color};
`;

const StatLabel = styled.span`
  font-size: 0.8rem;
  color: #6b7280;
`;

const StatValue = styled.div`
  font-size: 1.75rem;
  font-weight: 700;
  color: #111827;
`;

const stats = [
  { label: 'Total Contacts', value: contacts.length, color: '#4f46e5' },
  { label: 'Leads', value: contacts.filter((c) => c.status === 'Lead').length, color: '#f59e0b' },
  { label: 'Customers', value: contacts.filter((c) => c.status === 'Customer').length, color: '#10b981' },
  { label: 'Churned', value: contacts.filter((c) => c.status === 'Churned').length, color: '#ef4444' },
];

function StatsCards() {
  return (
    <StatsGrid>
      {stats.map((stat, i) => (
        <StatCard key={i}>
          <StatIndicator $color={stat.color} />
          <StatLabel>{stat.label}</StatLabel>
          <StatValue>{stat.value}</StatValue>
        </StatCard>
      ))}
    </StatsGrid>
  );
}

export default StatsCards;
