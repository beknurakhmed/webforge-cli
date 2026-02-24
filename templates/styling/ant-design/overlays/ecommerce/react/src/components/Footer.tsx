import { Typography, Space, Row, Col, Divider } from 'antd';

const { Title, Text, Link } = Typography;

export function Footer() {
  return (
    <footer style={{ background: '#111827', color: '#d1d5db', padding: '64px 32px 32px' }}>
      <Row style={{ maxWidth: 1200, margin: '0 auto' }} gutter={[64, 32]}>
        <Col xs={24} md={8}>
          <Title level={4} style={{ color: '#fff' }}>{'{{projectName}}'}</Title>
          <Text style={{ color: '#d1d5db' }}>Your one-stop shop for quality products.</Text>
        </Col>
        <Col xs={12} md={8}>
          <Text strong style={{ color: '#fff', fontSize: 12, textTransform: 'uppercase', letterSpacing: 1, display: 'block', marginBottom: 12 }}>Shop</Text>
          <Space direction="vertical" size={4}>
            <Link href="#" style={{ color: '#9ca3af' }}>All Products</Link>
            <Link href="#" style={{ color: '#9ca3af' }}>New Arrivals</Link>
            <Link href="#" style={{ color: '#9ca3af' }}>Sale</Link>
          </Space>
        </Col>
        <Col xs={12} md={8}>
          <Text strong style={{ color: '#fff', fontSize: 12, textTransform: 'uppercase', letterSpacing: 1, display: 'block', marginBottom: 12 }}>Support</Text>
          <Space direction="vertical" size={4}>
            <Link href="#" style={{ color: '#9ca3af' }}>FAQ</Link>
            <Link href="#" style={{ color: '#9ca3af' }}>Shipping</Link>
            <Link href="#" style={{ color: '#9ca3af' }}>Returns</Link>
          </Space>
        </Col>
      </Row>
      <Divider style={{ borderColor: '#374151', marginTop: 48 }} />
      <div style={{ textAlign: 'center' }}>
        <Text style={{ color: '#6b7280', fontSize: 14 }}>
          &copy; {new Date().getFullYear()} {'{{projectName}}'}. All rights reserved.
        </Text>
      </div>
    </footer>
  );
}
