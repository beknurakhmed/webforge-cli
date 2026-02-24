import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from './Sidebar';

const CRMWrapper = styled.div`
  display: flex;
  min-height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CRMMain = styled.main`
  flex: 1;
  background: #f9fafb;
  padding: 2rem;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

function Layout() {
  return (
    <CRMWrapper>
      <Sidebar />
      <CRMMain>
        <Outlet />
      </CRMMain>
    </CRMWrapper>
  );
}

export default Layout;
