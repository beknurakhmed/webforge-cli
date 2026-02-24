import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './Navbar';
import PortfolioFooter from './PortfolioFooter';

const PortfolioWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

function Layout() {
  return (
    <PortfolioWrapper>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <PortfolioFooter />
    </PortfolioWrapper>
  );
}

export default Layout;
