'use client';

import { Button, Typography } from 'antd';

const { Title, Text } = Typography;

export function CTA() {
  return (
    <section id="cta" style={{ background: '#f9fafb', padding: '80px 32px', textAlign: 'center' }}>
      <div style={{ maxWidth: 600, margin: '0 auto' }}>
        <Title level={2} style={{ fontSize: 40, marginBottom: 16 }}>Ready to Get Started?</Title>
        <Text type="secondary" style={{ fontSize: 18, display: 'block', marginBottom: 32 }}>
          Join thousands of developers who are building amazing products.
        </Text>
        <Button type="primary" size="large" style={{ height: 52, paddingInline: 40, fontSize: 18, fontWeight: 600 }}>
          Start Free Trial
        </Button>
        <Text type="secondary" style={{ display: 'block', marginTop: 12, fontSize: 14 }}>No credit card required</Text>
      </div>
    </section>
  );
}
