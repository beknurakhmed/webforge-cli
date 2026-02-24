import { NavLink } from 'react-router-dom';
import { Badge, Typography, Space } from 'antd';
import { CartItem } from '../data/products';

const { Text } = Typography;

interface HeaderProps {
  cart: CartItem[];
}

export function Header({ cart }: HeaderProps) {
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header style={{ background: '#fff', borderBottom: '1px solid #f0f0f0', padding: '0 32px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: 1200, margin: '0 auto', width: '100%' }}>
      <NavLink to="/" style={{ textDecoration: 'none' }}>
        <Text strong style={{ fontSize: 20, color: '#4f46e5' }}>{'{{projectName}}'}</Text>
      </NavLink>
      <Space size="large">
        <NavLink to="/" style={({ isActive }) => ({ color: isActive ? '#4f46e5' : '#374151', textDecoration: 'none', fontWeight: 500 })} end>
          Home
        </NavLink>
        <NavLink to="/cart" style={({ isActive }) => ({ color: isActive ? '#4f46e5' : '#374151', textDecoration: 'none', fontWeight: 500 })}>
          <Badge count={cartCount} size="small" offset={[6, -2]}>
            <span style={{ fontSize: 16 }}>Cart</span>
          </Badge>
        </NavLink>
      </Space>
    </header>
  );
}
