import { Outlet } from 'react-router-dom';
import BlogHeader from './BlogHeader';
import BlogFooter from './BlogFooter';

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <BlogHeader />
      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-8 py-8 w-full box-border">
        <Outlet />
      </main>
      <BlogFooter />
    </div>
  );
}

export default Layout;
