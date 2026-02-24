import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Sidebar } from './Sidebar';

const DashboardLayout = styled.div`
  display: flex;
  min-height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const DashboardMain = styled.main`
  flex: 1;
  background: #f9fafb;
  padding: 24px;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export function Layout() {
  return (
    <DashboardLayout>
      <Sidebar />
      <DashboardMain>
        <Outlet />
      </DashboardMain>
    </DashboardLayout>
  );
}
