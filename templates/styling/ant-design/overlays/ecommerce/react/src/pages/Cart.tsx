import { Link } from 'react-router-dom';
import { Button, Typography, Card, Divider, Row, Col, Space } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { CartItem } from '../data/products';

const { Title, Text } = Typography;

interface CartProps {
  cart: CartItem[];
  removeFromCart: (id: number) => void;
}

export function Cart({ cart, removeFromCart }: CartProps) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: 64 }}>
        <Title level={3}>Shopping Cart</Title>
        <Text type="secondary" style={{ display: 'block', marginBottom: 24, fontSize: 16 }}>Your cart is empty</Text>
        <Link to="/"><Button type="primary" size="large">Continue Shopping</Button></Link>
      </div>
    );
  }

  return (
    <div>
      <Title level={2}>Shopping Cart ({cart.length} items)</Title>
      <Row gutter={[32, 24]}>
        <Col xs={24} lg={16}>
          <Space direction="vertical" size={16} style={{ width: '100%' }}>
            {cart.map((item) => (
              <Card key={item.id} size="small">
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <span style={{ fontSize: 40 }}>{item.image}</span>
                  <div style={{ flex: 1 }}>
                    <Link to={`/product/${item.id}`}><Text strong>{item.name}</Text></Link>
                    <div><Text type="secondary">Qty: {item.quantity}</Text></div>
                  </div>
                  <Text strong style={{ fontSize: 16 }}>${(item.price * item.quantity).toFixed(2)}</Text>
                  <Button danger icon={<DeleteOutlined />} onClick={() => removeFromCart(item.id)}>
                    Remove
                  </Button>
                </div>
              </Card>
            ))}
          </Space>
        </Col>
        <Col xs={24} lg={8}>
          <Card title="Order Summary">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
              <Text>Subtotal</Text><Text>${total.toFixed(2)}</Text>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
              <Text>Shipping</Text><Text>Free</Text>
            </div>
            <Divider />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 24 }}>
              <Text strong style={{ fontSize: 18 }}>Total</Text>
              <Text strong style={{ fontSize: 18 }}>${total.toFixed(2)}</Text>
            </div>
            <Button type="primary" block size="large">Checkout</Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
