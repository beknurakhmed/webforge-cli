import { NavLink, useLocation } from 'react-router-dom';
import { Layout, Menu, Typography } from 'antd';
import { DashboardOutlined, UserOutlined, DollarOutlined, SettingOutlined } from '@ant-design/icons';

const { Sider } = Layout;
const { Text } = Typography;

const navItems = [
  { to: '/', label: 'Dashboard', icon: <DashboardOutlined /> },
  { to: '/contacts', label: 'Contacts', icon: <UserOutlined /> },
  { to: '/deals', label: 'Deals', icon: <DollarOutlined /> },
  { to: '/settings', label: 'Settings', icon: <SettingOutlined /> },
];

function Sidebar() {
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
        items={navItems.map((item) => ({
          key: item.to,
          icon: item.icon,
          label: <NavLink to={item.to}>{item.label}</NavLink>,
        }))}
      />
    </Sider>
  );
}

export default Sidebar;
