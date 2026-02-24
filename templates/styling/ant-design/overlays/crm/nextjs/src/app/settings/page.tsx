'use client';

import { Typography, Card, Form, Input, Select, Button } from 'antd';

const { Title, Text } = Typography;

export default function SettingsPage() {
  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <Title level={3} style={{ margin: 0 }}>Settings</Title>
        <Text type="secondary">Configure your CRM preferences.</Text>
      </div>
      <Card style={{ maxWidth: 600 }}>
        <Form layout="vertical">
          <Form.Item label="Company Name"><Input defaultValue="My Company" /></Form.Item>
          <Form.Item label="Email Address"><Input type="email" defaultValue="admin@company.com" /></Form.Item>
          <Form.Item label="Timezone">
            <Select defaultValue="UTC-5">
              <Select.Option value="UTC-8">Pacific Time (UTC-8)</Select.Option>
              <Select.Option value="UTC-5">Eastern Time (UTC-5)</Select.Option>
              <Select.Option value="UTC+0">UTC</Select.Option>
              <Select.Option value="UTC+1">Central European (UTC+1)</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item><Button type="primary">Save Changes</Button></Form.Item>
        </Form>
      </Card>
    </div>
  );
}
