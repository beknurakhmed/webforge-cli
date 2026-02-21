import { Outlet } from 'react-router-dom';
import BlogHeader from './BlogHeader';
import BlogFooter from './BlogFooter';

function Layout() {
  return (
    <div className="blog">
      <BlogHeader />
      <main className="blog-main">
        <Outlet />
      </main>
      <BlogFooter />
    </div>
  );
}

export default Layout;
