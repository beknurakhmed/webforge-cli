'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Sidebar.module.css';

const navItems = [
  { href: '/', label: 'Overview', icon: '📊' },
  { href: '/analytics', label: 'Analytics', icon: '📈' },
  { href: '/users', label: 'Users', icon: '👥' },
  { href: '/settings', label: 'Settings', icon: '⚙️' },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <span className={styles.sidebarLogo}>📊</span>
        <span className={styles.sidebarTitle}>{'{{projectName}}'}</span>
      </div>
      <nav className={styles.sidebarNav}>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={pathname === item.href ? styles.sidebarLinkActive : styles.sidebarLink}
          >
            <span className={styles.sidebarIcon}>{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
      <div className={styles.sidebarFooter}>
        <div className={styles.userInfo}>
          <div className={styles.userAvatar}>👤</div>
          <div>
            <p className={styles.userName}>Admin User</p>
            <p className={styles.userRole}>Administrator</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
