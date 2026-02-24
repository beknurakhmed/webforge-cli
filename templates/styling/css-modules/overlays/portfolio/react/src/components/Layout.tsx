import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import PortfolioFooter from './PortfolioFooter';
import styles from './Layout.module.css';

function Layout() {
  return (
    <div className={styles.portfolio}>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <PortfolioFooter />
    </div>
  );
}

export default Layout;
