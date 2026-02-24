import { Outlet } from 'react-router-dom';
import { Layout as AntLayout } from 'antd';
import { Sidebar } from './Sidebar';

export function Layout() {
  return (
    <AntLayout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <AntLayout.Content style={{ padding: 24, background: '#f5f5f5' }}>
        <Outlet />
      </AntLayout.Content>
    </AntLayout>
  );
}
