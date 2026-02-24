import { Outlet } from 'react-router-dom';
import BlogHeader from './BlogHeader';
import BlogFooter from './BlogFooter';
import styles from './Layout.module.css';

function Layout() {
  return (
    <div className={styles.blog}>
      <BlogHeader />
      <main className={styles.blogMain}>
        <Outlet />
      </main>
      <BlogFooter />
    </div>
  );
}

export default Layout;
