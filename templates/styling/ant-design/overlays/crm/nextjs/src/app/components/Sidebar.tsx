'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Layout, Menu, Typography } from 'antd';
import { DashboardOutlined, UserOutlined, DollarOutlined, SettingOutlined } from '@ant-design/icons';

const { Sider } = Layout;
const { Text } = Typography;

const navItems = [
  { href: '/', label: 'Dashboard', icon: <DashboardOutlined /> },
  { href: '/contacts', label: 'Contacts', icon: <UserOutlined /> },
  { href: '/deals', label: 'Deals', icon: <DollarOutlined /> },
  { href: '/settings', label: 'Settings', icon: <SettingOutlined /> },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <Sider width={240} style={{ background: '#001529', minHeight: '100vh' }}>
      <div style={{ padding: '20px 24px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <Text strong style={{ color: '#fff', fontSize: 18 }}>{'{{projectName}}'}</Text>
      </div>
      <Menu
        mode="inline"
        theme="dark"
        selectedKeys={[pathname]}
        items={navItems.map((item) => ({
          key: item.href,
          icon: item.icon,
          label: <Link href={item.href}>{item.label}</Link>,
        }))}
      />
    </Sider>
  );
}
