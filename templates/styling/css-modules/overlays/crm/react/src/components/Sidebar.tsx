import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';

const navItems = [
  { to: '/', label: 'Dashboard', icon: '📊' },
  { to: '/contacts', label: 'Contacts', icon: '👤' },
  { to: '/deals', label: 'Deals', icon: '💼' },
  { to: '/settings', label: 'Settings', icon: '⚙️' },
];

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarLogo}>{'{{projectName}}'}</div>
      <nav className={styles.sidebarNav}>
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) => isActive ? styles.sidebarLinkActive : styles.sidebarLink}
          >
            <span className={styles.sidebarIcon}>{item.icon}</span>
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
