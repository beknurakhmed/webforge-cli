import { useState } from 'react';
import { Typography, Card, Form, Input, Switch, Button, Divider } from 'antd';

const { Title } = Typography;

export function Settings() {
  const [name, setName] = useState('Brian Admin');
  const [email, setEmail] = useState('brian@example.com');
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <div>
      <Title level={3}>Settings</Title>
      <Card title="Profile" style={{ marginBottom: 24 }}>
        <Form layout="vertical" style={{ maxWidth: 480 }}>
          <Form.Item label="Full Name">
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Item>
          <Form.Item label="Email Address">
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Item>
        </Form>
      </Card>
      <Card title="Preferences" style={{ marginBottom: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <span>Dark Mode</span>
          <Switch checked={darkMode} onChange={setDarkMode} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>Email Notifications</span>
          <Switch checked={notifications} onChange={setNotifications} />
        </div>
      </Card>
      <Button type="primary" size="large">Save Changes</Button>
    </div>
  );
}
