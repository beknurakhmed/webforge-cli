'use client';

import { Typography, Space, Divider } from 'antd';

const { Text, Link } = Typography;

export function Footer() {
  return (
    <footer style={{ background: '#fafafa', padding: '32px', textAlign: 'center' }}>
      <Space size="large" style={{ marginBottom: 16 }}>
        <Link href="#" target="_blank">GitHub</Link>
        <Link href="#">LinkedIn</Link>
        <Link href="#">Twitter</Link>
      </Space>
      <Divider />
      <Text type="secondary">&copy; 2025 {'{{projectName}}'}. All rights reserved.</Text>
    </footer>
  );
}
