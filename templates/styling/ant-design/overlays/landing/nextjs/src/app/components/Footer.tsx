'use client';

import { Typography, Space, Row, Col, Divider } from 'antd';

const { Title, Text, Link } = Typography;

export function Footer() {
  return (
    <footer style={{ background: '#111827', color: '#d1d5db', padding: '64px 32px 32px' }}>
      <Row style={{ maxWidth: 1200, margin: '0 auto' }} gutter={[64, 32]}>
        <Col xs={24} md={8}>
          <Title level={4} style={{ color: '#fff', marginBottom: 8 }}>{'{{projectName}}'}</Title>
          <Text style={{ color: '#d1d5db' }}>Building the future of the web, one project at a time.</Text>
        </Col>
        <Col xs={24} md={16}>
          <Row gutter={[64, 24]}>
            <Col xs={8}>
              <Text strong style={{ color: '#fff', fontSize: 12, textTransform: 'uppercase', letterSpacing: 1, display: 'block', marginBottom: 12 }}>Product</Text>
              <Space direction="vertical" size={4}>
                <Link href="#features" style={{ color: '#9ca3af' }}>Features</Link>
                <Link href="#cta" style={{ color: '#9ca3af' }}>Pricing</Link>
                <Link href="#" style={{ color: '#9ca3af' }}>Documentation</Link>
              </Space>
            </Col>
            <Col xs={8}>
              <Text strong style={{ color: '#fff', fontSize: 12, textTransform: 'uppercase', letterSpacing: 1, display: 'block', marginBottom: 12 }}>Company</Text>
              <Space direction="vertical" size={4}>
                <Link href="#" style={{ color: '#9ca3af' }}>About</Link>
                <Link href="#" style={{ color: '#9ca3af' }}>Blog</Link>
                <Link href="#contact" style={{ color: '#9ca3af' }}>Contact</Link>
              </Space>
            </Col>
            <Col xs={8}>
              <Text strong style={{ color: '#fff', fontSize: 12, textTransform: 'uppercase', letterSpacing: 1, display: 'block', marginBottom: 12 }}>Legal</Text>
              <Space direction="vertical" size={4}>
                <Link href="#" style={{ color: '#9ca3af' }}>Privacy Policy</Link>
                <Link href="#" style={{ color: '#9ca3af' }}>Terms of Service</Link>
              </Space>
            </Col>
          </Row>
        </Col>
      </Row>
      <Divider style={{ borderColor: '#374151', marginTop: 48 }} />
      <div style={{ textAlign: 'center' }}>
        <Text style={{ color: '#6b7280', fontSize: 14 }}>&copy; 2025 {'{{projectName}}'}. All rights reserved.</Text>
      </div>
    </footer>
  );
}
