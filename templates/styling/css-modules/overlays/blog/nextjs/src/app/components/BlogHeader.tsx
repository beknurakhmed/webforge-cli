'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './BlogHeader.module.css';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/category/technology', label: 'Technology' },
  { href: '/category/design', label: 'Design' },
  { href: '/about', label: 'About' },
];

export function BlogHeader() {
  const pathname = usePathname();

  return (
    <header className={styles.blogHeader}>
      <div className={styles.headerContainer}>
        <Link href="/" className={styles.blogLogo}>
          <span className={styles.logoIcon}>📝</span>
          <span>{'{{projectName}}'}</span>
        </Link>
        <nav className={styles.blogNav}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? styles.navLinkActive : styles.navLink}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
