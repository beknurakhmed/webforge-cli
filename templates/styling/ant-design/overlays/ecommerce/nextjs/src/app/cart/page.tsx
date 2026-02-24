'use client';

import Link from 'next/link';
import { Button, Typography, Card, Divider, Row, Col, Space, InputNumber } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useCart } from '../components/CartProvider';

const { Title, Text } = Typography;

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: 64 }}>
        <div style={{ fontSize: 64, marginBottom: 16 }}>🛒</div>
        <Title level={3}>Your cart is empty</Title>
        <Text type="secondary" style={{ display: 'block', marginBottom: 24 }}>Looks like you have not added any items to your cart yet.</Text>
        <Link href="/"><Button type="primary" size="large">Continue Shopping</Button></Link>
      </div>
    );
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <Title level={2} style={{ margin: 0 }}>Shopping Cart</Title>
        <Button onClick={clearCart}>Clear Cart</Button>
      </div>
      <Row gutter={[32, 24]}>
        <Col xs={24} lg={16}>
          <Space direction="vertical" size={16} style={{ width: '100%' }}>
            {items.map((item) => (
              <Card key={item.id} size="small">
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <span style={{ fontSize: 40 }}>{item.image}</span>
                  <div style={{ flex: 1 }}>
                    <Text strong>{item.name}</Text>
                    <div><Text type="secondary">{item.category}</Text></div>
                    <Text style={{ color: '#4f46e5' }}>${item.price.toFixed(2)}</Text>
                  </div>
                  <InputNumber min={1} value={item.quantity} onChange={(val) => updateQuantity(item.id, val || 1)} />
                  <Text strong style={{ minWidth: 80, textAlign: 'right' }}>${(item.price * item.quantity).toFixed(2)}</Text>
                  <Button danger icon={<DeleteOutlined />} onClick={() => removeFromCart(item.id)} />
                </div>
              </Card>
            ))}
          </Space>
        </Col>
        <Col xs={24} lg={8}>
          <Card title="Order Summary">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
              <Text>Subtotal</Text><Text>${totalPrice.toFixed(2)}</Text>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
              <Text>Shipping</Text><Text>{totalPrice > 50 ? 'Free' : '$9.99'}</Text>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
              <Text>Tax</Text><Text>${(totalPrice * 0.08).toFixed(2)}</Text>
            </div>
            <Divider />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 24 }}>
              <Text strong style={{ fontSize: 18 }}>Total</Text>
              <Text strong style={{ fontSize: 18 }}>${(totalPrice + (totalPrice > 50 ? 0 : 9.99) + totalPrice * 0.08).toFixed(2)}</Text>
            </div>
            <Button type="primary" block size="large">Proceed to Checkout</Button>
            <Link href="/" style={{ display: 'block', textAlign: 'center', marginTop: 12, color: '#4f46e5' }}>Continue Shopping</Link>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
