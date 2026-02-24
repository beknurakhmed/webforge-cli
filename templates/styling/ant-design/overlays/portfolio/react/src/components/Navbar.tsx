import { NavLink } from 'react-router-dom';
import { Typography, Space } from 'antd';

const { Text } = Typography;

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 32px', maxWidth: 1200, margin: '0 auto', width: '100%' }}>
      <NavLink to="/" style={{ textDecoration: 'none' }}>
        <Text strong style={{ fontSize: 20, color: '#4f46e5' }}>{'{{projectName}}'}</Text>
      </NavLink>
      <Space size="large">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            style={({ isActive }) => ({ color: isActive ? '#4f46e5' : '#374151', textDecoration: 'none', fontWeight: 500 })}
          >
            {item.label}
          </NavLink>
        ))}
      </Space>
    </nav>
  );
}

export default Navbar;
