'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Layout, Menu, Typography } from 'antd';
import { DashboardOutlined, BarChartOutlined, TeamOutlined, SettingOutlined } from '@ant-design/icons';

const { Sider } = Layout;
const { Text } = Typography;

const navItems = [
  { href: '/', label: 'Overview', icon: <DashboardOutlined /> },
  { href: '/analytics', label: 'Analytics', icon: <BarChartOutlined /> },
  { href: '/users', label: 'Users', icon: <TeamOutlined /> },
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
      <div style={{ position: 'absolute', bottom: 24, left: 24, display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#4f46e5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>👤</div>
        <div>
          <Text style={{ color: '#fff', fontSize: 13, display: 'block' }}>Admin User</Text>
          <Text style={{ color: 'rgba(255,255,255,0.5)', fontSize: 11 }}>Administrator</Text>
        </div>
      </div>
    </Sider>
  );
}
