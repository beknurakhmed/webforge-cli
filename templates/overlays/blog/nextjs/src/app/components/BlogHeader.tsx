'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/category/technology', label: 'Technology' },
  { href: '/category/design', label: 'Design' },
  { href: '/about', label: 'About' },
];

export function BlogHeader() {
  const pathname = usePathname();

  return (
    <header className="blog-header">
      <div className="header-container">
        <Link href="/" className="blog-logo">
          <span className="logo-icon">📝</span>
          <span>{'{{projectName}}'}</span>
        </Link>
        <nav className="blog-nav">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link ${pathname === item.href ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
