import styled from 'styled-components';
import { KPICards } from '../components/KPICards';
import { ChartPlaceholder } from '../components/ChartPlaceholder';
import { DataTable } from '../components/DataTable';

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  h1 {
    font-size: 1.75rem;
    font-weight: 700;
    color: #111827;
    margin: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const SearchInput = styled.input`
  padding: 0.5rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 0.9rem;
`;

const UserAvatar = styled.div`
  width: 36px;
  height: 36px;
  background: #4f46e5;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.9rem;
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

export function Overview() {
  return (
    <div>
      <PageHeader>
        <h1>Dashboard</h1>
        <HeaderActions>
          <SearchInput type="text" placeholder="Search..." />
          <UserAvatar>B</UserAvatar>
        </HeaderActions>
      </PageHeader>
      <KPICards />
      <DashboardGrid>
        <ChartPlaceholder title="Revenue Overview" />
        <ChartPlaceholder title="User Growth" />
      </DashboardGrid>
      <DataTable />
    </div>
  );
}
