import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import PortfolioFooter from './PortfolioFooter';

function Layout() {
  return (
    <div className="portfolio">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <PortfolioFooter />
    </div>
  );
}

export default Layout;
