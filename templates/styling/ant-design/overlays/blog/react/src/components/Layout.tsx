import { Outlet } from 'react-router-dom';
import { Layout as AntLayout } from 'antd';
import BlogHeader from './BlogHeader';
import BlogFooter from './BlogFooter';

function Layout() {
  return (
    <AntLayout style={{ minHeight: '100vh', background: '#fff' }}>
      <BlogHeader />
      <AntLayout.Content style={{ maxWidth: 1200, margin: '0 auto', padding: '32px', width: '100%' }}>
        <Outlet />
      </AntLayout.Content>
      <BlogFooter />
    </AntLayout>
  );
}

export default Layout;
