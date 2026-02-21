import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

function Layout() {
  return (
    <div className="crm">
      <Sidebar />
      <main className="crm-main">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
