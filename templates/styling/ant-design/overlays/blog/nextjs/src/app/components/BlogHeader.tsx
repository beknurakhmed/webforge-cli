'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Typography, Space } from 'antd';

const { Text } = Typography;

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/category/technology', label: 'Technology' },
  { href: '/category/design', label: 'Design' },
  { href: '/about', label: 'About' },
];

export function BlogHeader() {
  const pathname = usePathname();

  return (
    <header style={{ background: '#fff', borderBottom: '1px solid #f0f0f0', padding: '0 32px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: 1200, margin: '0 auto', width: '100%' }}>
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
    </header>
  );
}
