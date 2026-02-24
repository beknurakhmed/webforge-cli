'use client';

import Link from 'next/link';
import { Badge, Typography, Space } from 'antd';
import { useCart } from './CartProvider';

const { Text } = Typography;

export function Header() {
  const { totalItems } = useCart();

  return (
    <header style={{ background: '#fff', borderBottom: '1px solid #f0f0f0', padding: '0 32px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: 1200, margin: '0 auto', width: '100%' }}>
      <Link href="/" style={{ textDecoration: 'none' }}>
        <Text strong style={{ fontSize: 20, color: '#4f46e5' }}>{'{{projectName}}'}</Text>
      </Link>
      <Space size="large">
        <Link href="/" style={{ color: '#374151', textDecoration: 'none', fontWeight: 500 }}>Home</Link>
        <Link href="/cart" style={{ color: '#374151', textDecoration: 'none', fontWeight: 500 }}>
          <Badge count={totalItems} size="small" offset={[6, -2]}>
            <span style={{ fontSize: 16 }}>Cart</span>
          </Badge>
        </Link>
      </Space>
    </header>
  );
}
