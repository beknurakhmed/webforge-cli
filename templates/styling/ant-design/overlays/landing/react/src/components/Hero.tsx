import { Button, Typography, Space, Row, Col } from 'antd';

const { Title, Text } = Typography;

export function Hero() {
  return (
    <header style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: '#fff', paddingBottom: 64 }}>
      <Row justify="space-between" align="middle" style={{ maxWidth: 1200, margin: '0 auto', padding: '16px 32px' }}>
        <Text strong style={{ fontSize: 24, color: '#fff' }}>{'{{projectName}}'}</Text>
        <Space size="large">
          <a href="#features" style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 500 }}>Features</a>
          <a href="#cta" style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 500 }}>Pricing</a>
          <a href="#contact" style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 500 }}>Contact</a>
        </Space>
      </Row>
      <div style={{ textAlign: 'center', padding: '64px 32px', maxWidth: 800, margin: '0 auto' }}>
        <Title level={1} style={{ color: '#fff', fontSize: 56, fontWeight: 800, lineHeight: 1.1, marginBottom: 24 }}>
          Build Something Amazing
        </Title>
        <Text style={{ color: 'rgba(255,255,255,0.9)', fontSize: 20, display: 'block', marginBottom: 32, lineHeight: 1.6 }}>
          A modern landing page template to kickstart your next project. Fast, responsive, and ready for production.
        </Text>
        <Space size="middle">
          <Button type="primary" size="large" style={{ height: 48, paddingInline: 32, fontWeight: 600 }}>
            Get Started
          </Button>
          <Button ghost size="large" style={{ height: 48, paddingInline: 32, fontWeight: 600 }}>
            Learn More
          </Button>
        </Space>
      </div>
    </header>
  );
}
