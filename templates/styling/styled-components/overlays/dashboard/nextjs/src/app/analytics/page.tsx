'use client';

import styled from 'styled-components';
import { ChartPlaceholder } from '../components/ChartPlaceholder';

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

const KPIChange = styled.span<{ $up: boolean }>`
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.2rem 0.5rem;
  border-radius: 20px;
  color: ${props => props.$up ? '#059669' : '#dc2626'};
  background: ${props => props.$up ? '#d1fae5' : '#fee2e2'};
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

const ChartsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.25rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TableCard = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  margin-bottom: 2rem;
`;

const TableTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #111827;
  padding: 1.25rem 1.5rem 0;
  margin-bottom: 1rem;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th {
    text-align: left;
    padding: 0.75rem 1.5rem;
    font-size: 0.75rem;
    font-weight: 600;
    color: #6b7280;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border-bottom: 1px solid #e5e7eb;
    background: #f3f4f6;
  }

  td {
    padding: 0.875rem 1.5rem;
    font-size: 0.9rem;
    border-bottom: 1px solid #e5e7eb;
  }

  tbody tr:hover {
    background: #f9fafb;
  }
`;

const PageId = styled.td`
  font-weight: 600;
  color: #4f46e5;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: #f3f4f6;
  border-radius: 4px;
  overflow: hidden;
`;

const ProgressFill = styled.div<{ $width: number }>`
  height: 100%;
  background: #4f46e5;
  border-radius: 4px;
  transition: width 0.3s;
  width: ${props => props.$width}%;
`;

const metrics = [
  { label: 'Page Views', value: '124,892', change: '+14.2%', icon: '👁️', up: true },
  { label: 'Bounce Rate', value: '32.1%', change: '-2.4%', icon: '📉', up: false },
  { label: 'Avg. Session', value: '4m 32s', change: '+8.7%', icon: '⏱️', up: true },
  { label: 'New Visitors', value: '8,432', change: '+18.9%', icon: '🆕', up: true },
];

const topPages = [
  { page: '/home', views: '24,521', percentage: 32 },
  { page: '/products', views: '18,432', percentage: 24 },
  { page: '/about', views: '12,841', percentage: 17 },
  { page: '/blog', views: '9,234', percentage: 12 },
  { page: '/contact', views: '6,128', percentage: 8 },
  { page: '/pricing', views: '5,432', percentage: 7 },
];

export default function AnalyticsPage() {
  return (
    <div>
      <PageHeader>
        <h1>Analytics</h1>
        <p>Track your website performance and user engagement.</p>
      </PageHeader>

      <KPIGrid>
        {metrics.map((m) => (
          <KPICard key={m.label}>
            <KPIHeader>
              <KPIIcon>{m.icon}</KPIIcon>
              <KPIChange $up={m.up}>{m.change}</KPIChange>
            </KPIHeader>
            <KPIValue>{m.value}</KPIValue>
            <KPITitle>{m.label}</KPITitle>
          </KPICard>
        ))}
      </KPIGrid>

      <ChartsGrid>
        <ChartPlaceholder title="Traffic Sources" type="pie" />
        <ChartPlaceholder title="Visitor Trend" type="line" />
      </ChartsGrid>

      <TableCard>
        <TableTitle>Top Pages</TableTitle>
        <div style={{ overflowX: 'auto' }}>
          <StyledTable>
            <thead>
              <tr>
                <th>Page</th>
                <th>Views</th>
                <th>Share</th>
                <th>Progress</th>
              </tr>
            </thead>
            <tbody>
              {topPages.map((page) => (
                <tr key={page.page}>
                  <PageId>{page.page}</PageId>
                  <td>{page.views}</td>
                  <td>{page.percentage}%</td>
                  <td>
                    <ProgressBar>
                      <ProgressFill $width={page.percentage} />
                    </ProgressBar>
                  </td>
                </tr>
              ))}
            </tbody>
          </StyledTable>
        </div>
      </TableCard>
    </div>
  );
}
