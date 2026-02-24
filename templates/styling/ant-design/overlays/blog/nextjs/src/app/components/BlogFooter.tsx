'use client';

import Link from 'next/link';
import { Typography, Row, Col, Space, Divider } from 'antd';

const { Title, Text } = Typography;

export function BlogFooter() {
  return (
    <footer style={{ background: '#111827', color: '#d1d5db', padding: '64px 32px 32px' }}>
      <Row style={{ maxWidth: 1200, margin: '0 auto' }} gutter={[64, 32]}>
        <Col xs={24} md={8}>
          <Title level={4} style={{ color: '#fff' }}>{'{{projectName}}'}</Title>
          <Text style={{ color: '#d1d5db' }}>Sharing insights, tutorials, and stories about technology, design, and the web.</Text>
        </Col>
        <Col xs={8} md={5}>
          <Text strong style={{ color: '#fff', fontSize: 12, textTransform: 'uppercase', display: 'block', marginBottom: 12 }}>Categories</Text>
          <Space direction="vertical" size={4}>
            <Link href="/category/technology" style={{ color: '#9ca3af' }}>Technology</Link>
            <Link href="/category/design" style={{ color: '#9ca3af' }}>Design</Link>
            <Link href="/category/tutorial" style={{ color: '#9ca3af' }}>Tutorials</Link>
          </Space>
        </Col>
        <Col xs={8} md={5}>
          <Text strong style={{ color: '#fff', fontSize: 12, textTransform: 'uppercase', display: 'block', marginBottom: 12 }}>Links</Text>
          <Space direction="vertical" size={4}>
            <Link href="/about" style={{ color: '#9ca3af' }}>About</Link>
            <Link href="/" style={{ color: '#9ca3af' }}>Home</Link>
          </Space>
        </Col>
        <Col xs={8} md={6}>
          <Text strong style={{ color: '#fff', fontSize: 12, textTransform: 'uppercase', display: 'block', marginBottom: 12 }}>Connect</Text>
          <Space size="middle" style={{ fontSize: 20 }}>
            <span>🐦</span><span>📘</span><span>💼</span>
          </Space>
        </Col>
      </Row>
      <Divider style={{ borderColor: '#374151', marginTop: 48 }} />
      <div style={{ textAlign: 'center' }}>
        <Text style={{ color: '#6b7280' }}>&copy; 2025 {'{{projectName}}'}. All rights reserved.</Text>
      </div>
    </footer>
  );
}
