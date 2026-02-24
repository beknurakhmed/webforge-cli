import { NavLink } from 'react-router-dom';
import { Typography, Space } from 'antd';

const { Text } = Typography;

function BlogHeader() {
  return (
    <header style={{ background: '#fff', borderBottom: '1px solid #f0f0f0', padding: '0 32px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: 1200, margin: '0 auto', width: '100%' }}>
      <NavLink to="/" style={{ textDecoration: 'none' }}>
        <Text strong style={{ fontSize: 20, color: '#4f46e5' }}>{'{{projectName}}'}</Text>
      </NavLink>
      <Space size="large">
        <NavLink to="/" end style={({ isActive }) => ({ color: isActive ? '#4f46e5' : '#374151', textDecoration: 'none', fontWeight: 500 })}>
          Home
        </NavLink>
        <NavLink to="/about" style={({ isActive }) => ({ color: isActive ? '#4f46e5' : '#374151', textDecoration: 'none', fontWeight: 500 })}>
          About
        </NavLink>
      </Space>
    </header>
  );
}

export default BlogHeader;
