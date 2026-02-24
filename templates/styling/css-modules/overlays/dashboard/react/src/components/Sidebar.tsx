import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';

const menuItems = [
  { icon: '📊', label: 'Overview', path: '/' },
  { icon: '📈', label: 'Analytics', path: '/analytics' },
  { icon: '👥', label: 'Users', path: '/users' },
  { icon: '⚙️', label: 'Settings', path: '/settings' },
];

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarLogo}>{'{{projectName}}'}</div>
      <nav className={styles.sidebarNav}>
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) => isActive ? styles.sidebarItemActive : styles.sidebarItem}
          >
            <span className={styles.sidebarIcon}>{item.icon}</span>
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
