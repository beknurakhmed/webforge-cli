import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

function Layout() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar />
      <main className="flex-1 bg-gray-50 p-4 md:p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
