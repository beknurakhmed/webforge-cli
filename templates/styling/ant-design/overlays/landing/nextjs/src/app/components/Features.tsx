'use client';

import { Card, Typography, Row, Col } from 'antd';

const { Title, Text, Paragraph } = Typography;

const features = [
  { icon: '⚡', title: 'Lightning Fast', description: 'Optimized for performance with lazy loading, code splitting, and modern build tools.' },
  { icon: '🎨', title: 'Beautiful Design', description: 'Clean, modern UI with responsive layouts that look great on any device.' },
  { icon: '🔒', title: 'Secure by Default', description: 'Built with security best practices including HTTPS, CSP headers, and input validation.' },
  { icon: '🧩', title: 'Modular Architecture', description: 'Component-based structure makes it easy to customize and extend functionality.' },
  { icon: '📱', title: 'Mobile First', description: 'Designed for mobile devices first, then scaled up for tablets and desktops.' },
  { icon: '🚀', title: 'Easy Deployment', description: 'Deploy anywhere — Vercel, Netlify, AWS, or your own server in minutes.' },
];

export function Features() {
  return (
    <section id="features" style={{ padding: '80px 32px', maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
      <Title level={2} style={{ fontSize: 40, marginBottom: 8 }}>Features</Title>
      <Text type="secondary" style={{ fontSize: 18, display: 'block', marginBottom: 48 }}>
        Everything you need to build a modern web application
      </Text>
      <Row gutter={[24, 24]}>
        {features.map((feature, index) => (
          <Col xs={24} sm={12} lg={8} key={index}>
            <Card hoverable style={{ height: '100%', textAlign: 'left' }}>
              <span style={{ fontSize: 32, display: 'block', marginBottom: 16 }}>{feature.icon}</span>
              <Title level={4} style={{ marginBottom: 8 }}>{feature.title}</Title>
              <Paragraph type="secondary" style={{ lineHeight: 1.6, marginBottom: 0 }}>{feature.description}</Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}
