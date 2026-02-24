'use client';

import styled from 'styled-components';
import { KPICards } from './components/KPICards';
import { ChartPlaceholder } from './components/ChartPlaceholder';
import { DataTable } from './components/DataTable';

const PageHeader = styled.div`
  margin-bottom: 2rem;

  h1 {
    font-size: 1.75rem;
    color: #111827;
    font-weight: 700;
  }

  p {
    color: #6b7280;
    margin-top: 0.25rem;
  }
`;

const ChartsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.25rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export default function OverviewPage() {
  return (
    <div>
      <PageHeader>
        <h1>Overview</h1>
        <p>Welcome back! Here is what is happening with your business.</p>
      </PageHeader>
      <KPICards />
      <ChartsGrid>
        <ChartPlaceholder title="Revenue Over Time" type="bar" />
        <ChartPlaceholder title="Growth Trend" type="line" />
      </ChartsGrid>
      <DataTable title="Recent Orders" limit={5} />
    </div>
  );
}
