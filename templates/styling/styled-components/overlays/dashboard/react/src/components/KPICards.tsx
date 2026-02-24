import styled from 'styled-components';

const KPIGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const KPICard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid #e5e7eb;
`;

const KPILabel = styled.span`
  font-size: 0.85rem;
  color: #6b7280;
  font-weight: 500;
`;

const KPIValue = styled.div`
  font-size: 2rem;
  font-weight: 700;
  margin: 0.25rem 0;
  color: #111827;
`;

const KPIChange = styled.span<{ $positive: boolean }>`
  font-size: 0.8rem;
  color: ${props => props.$positive ? '#10b981' : '#ef4444'};
`;

const kpis = [
  { label: 'Total Revenue', value: '$48,250', change: '+12%', positive: true },
  { label: 'Active Users', value: '2,420', change: '+8%', positive: true },
  { label: 'Orders', value: '1,210', change: '-3%', positive: false },
  { label: 'Conversion', value: '3.2%', change: '+0.5%', positive: true },
];

export function KPICards() {
  return (
    <KPIGrid>
      {kpis.map((kpi, i) => (
        <KPICard key={i}>
          <KPILabel>{kpi.label}</KPILabel>
          <KPIValue>{kpi.value}</KPIValue>
          <KPIChange $positive={kpi.positive}>
            {kpi.change} from last month
          </KPIChange>
        </KPICard>
      ))}
    </KPIGrid>
  );
}
