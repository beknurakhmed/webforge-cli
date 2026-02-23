import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import PortfolioFooter from './PortfolioFooter';

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <PortfolioFooter />
    </div>
  );
}

export default Layout;
