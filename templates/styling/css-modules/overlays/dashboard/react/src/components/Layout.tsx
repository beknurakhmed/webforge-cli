import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import styles from './Layout.module.css';

export function Layout() {
  return (
    <div className={styles.dashboardLayout}>
      <Sidebar />
      <main className={styles.dashboardMain}>
        <Outlet />
      </main>
    </div>
  );
}
