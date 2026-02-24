import { NavLink } from 'react-router-dom';
import { Layout, Menu, Typography } from 'antd';
import { DashboardOutlined, BarChartOutlined, TeamOutlined, SettingOutlined } from '@ant-design/icons';
import { useLocation } from 'react-router-dom';

const { Sider } = Layout;
const { Text } = Typography;

const menuItems = [
  { key: '/', icon: <DashboardOutlined />, label: 'Overview', path: '/' },
  { key: '/analytics', icon: <BarChartOutlined />, label: 'Analytics', path: '/analytics' },
  { key: '/users', icon: <TeamOutlined />, label: 'Users', path: '/users' },
  { key: '/settings', icon: <SettingOutlined />, label: 'Settings', path: '/settings' },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <Sider width={240} style={{ background: '#001529', minHeight: '100vh' }}>
      <div style={{ padding: '20px 24px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <Text strong style={{ color: '#fff', fontSize: 18 }}>{'{{projectName}}'}</Text>
      </div>
      <Menu
        mode="inline"
        theme="dark"
        selectedKeys={[location.pathname]}
        items={menuItems.map((item) => ({
          key: item.key,
          icon: item.icon,
          label: <NavLink to={item.path}>{item.label}</NavLink>,
        }))}
      />
    </Sider>
  );
}
