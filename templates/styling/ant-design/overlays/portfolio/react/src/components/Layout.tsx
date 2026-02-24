import { Outlet } from 'react-router-dom';
import { Layout as AntLayout } from 'antd';
import Navbar from './Navbar';
import PortfolioFooter from './PortfolioFooter';

function Layout() {
  return (
    <AntLayout style={{ minHeight: '100vh', background: '#fff' }}>
      <Navbar />
      <AntLayout.Content>
        <Outlet />
      </AntLayout.Content>
      <PortfolioFooter />
    </AntLayout>
  );
}

export default Layout;
