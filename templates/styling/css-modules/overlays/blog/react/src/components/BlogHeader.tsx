import { NavLink } from 'react-router-dom';
import styles from './BlogHeader.module.css';

function BlogHeader() {
  return (
    <header className={styles.blogHeader}>
      <div className={styles.headerContent}>
        <NavLink to="/" className={styles.blogTitle}>{'{{projectName}}'}</NavLink>
        <nav className={styles.blogNav}>
          <NavLink to="/" end className={({ isActive }) => isActive ? styles.navLinkActive : styles.navLink}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? styles.navLinkActive : styles.navLink}>
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default BlogHeader;
