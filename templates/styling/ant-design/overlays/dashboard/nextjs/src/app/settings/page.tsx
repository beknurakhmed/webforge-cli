'use client';

import { useState } from 'react';
import { Typography, Card, Form, Input, Select, Switch, Button, Row, Col } from 'antd';

const { Title, Text } = Typography;

export default function SettingsPage() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <Title level={3} style={{ margin: 0 }}>Settings</Title>
        <Text type="secondary">Manage your application preferences and configuration.</Text>
      </div>
      <Row gutter={[16, 16]}>
        <Col xs={24} lg={12}>
          <Card title="General" style={{ marginBottom: 16 }}>
            <Form layout="vertical">
              <Form.Item label="Site Name"><Input defaultValue={'{{projectName}}'} /></Form.Item>
              <Form.Item label="Admin Email"><Input type="email" defaultValue="admin@example.com" /></Form.Item>
              <Form.Item label="Language">
                <Select defaultValue="en">
                  <Select.Option value="en">English</Select.Option>
                  <Select.Option value="es">Spanish</Select.Option>
                  <Select.Option value="fr">French</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item label="Timezone">
                <Select defaultValue="UTC">
                  <Select.Option value="UTC">UTC</Select.Option>
                  <Select.Option value="EST">Eastern Time</Select.Option>
                  <Select.Option value="PST">Pacific Time</Select.Option>
                </Select>
              </Form.Item>
            </Form>
          </Card>
        </Col>
        <Col xs={24} lg={12}>
          <Card title="Notifications" style={{ marginBottom: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <div><Text strong>Email Notifications</Text><br /><Text type="secondary">Receive email updates about activity</Text></div>
              <Switch checked={notifications} onChange={setNotifications} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div><Text strong>Dark Mode</Text><br /><Text type="secondary">Use dark theme for the dashboard</Text></div>
              <Switch checked={darkMode} onChange={setDarkMode} />
            </div>
          </Card>
          <Card title="Security">
            <Form layout="vertical">
              <Form.Item label="Current Password"><Input.Password placeholder="Enter current password" /></Form.Item>
              <Form.Item label="New Password"><Input.Password placeholder="Enter new password" /></Form.Item>
              <Form.Item label="Confirm Password"><Input.Password placeholder="Confirm new password" /></Form.Item>
              <Button type="primary">Update Password</Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
