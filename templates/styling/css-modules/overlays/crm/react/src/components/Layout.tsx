import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import styles from './Layout.module.css';

function Layout() {
  return (
    <div className={styles.crm}>
      <Sidebar />
      <main className={styles.crmMain}>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
