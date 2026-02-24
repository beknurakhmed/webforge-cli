'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Typography, Space } from 'antd';

const { Text } = Typography;

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 32px', maxWidth: 1200, margin: '0 auto', width: '100%' }}>
      <Link href="/" style={{ textDecoration: 'none' }}>
        <Text strong style={{ fontSize: 20, color: '#4f46e5' }}>{'{{projectName}}'}</Text>
      </Link>
      <Space size="large">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} style={{ color: pathname === item.href ? '#4f46e5' : '#374151', textDecoration: 'none', fontWeight: 500 }}>
            {item.label}
          </Link>
        ))}
      </Space>
    </nav>
  );
}
