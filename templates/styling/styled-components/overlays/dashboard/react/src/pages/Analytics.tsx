import styled from 'styled-components';
import { ChartPlaceholder } from '../components/ChartPlaceholder';

const PageTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  color: #111827;
  margin: 0 0 1.5rem;
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const MetricCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.25rem;
  border: 1px solid #e5e7eb;
`;

const MetricLabel = styled.span`
  font-size: 0.8rem;
  color: #6b7280;
  font-weight: 500;
`;

const MetricValue = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin: 0.25rem 0;
`;

const MetricChange = styled.span`
  font-size: 0.8rem;
  color: #10b981;
  font-weight: 500;
`;

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const metrics = [
  { label: 'Page Views', value: '124,892', change: '+14%' },
  { label: 'Bounce Rate', value: '42.3%', change: '-2.1%' },
  { label: 'Avg. Session', value: '4m 32s', change: '+8%' },
  { label: 'Conversions', value: '1,847', change: '+5.3%' },
];

export function Analytics() {
  return (
    <div>
      <PageTitle>Analytics</PageTitle>
      <MetricsGrid>
        {metrics.map((m, i) => (
          <MetricCard key={i}>
            <MetricLabel>{m.label}</MetricLabel>
            <MetricValue>{m.value}</MetricValue>
            <MetricChange>{m.change}</MetricChange>
          </MetricCard>
        ))}
      </MetricsGrid>
      <DashboardGrid>
        <ChartPlaceholder title="Traffic Sources" data={[30, 55, 80, 45, 70, 60, 85, 50, 65, 75, 90, 40]} />
        <ChartPlaceholder title="Conversion Funnel" data={[95, 80, 60, 45, 30, 20, 15, 12, 10, 8, 6, 5]} />
      </DashboardGrid>
      <DashboardGrid>
        <ChartPlaceholder title="Revenue by Channel" data={[70, 50, 85, 40, 60, 75, 55, 90, 45, 65, 80, 70]} />
        <ChartPlaceholder title="User Engagement" data={[20, 35, 50, 65, 45, 70, 55, 80, 60, 75, 85, 90]} />
      </DashboardGrid>
    </div>
  );
}
