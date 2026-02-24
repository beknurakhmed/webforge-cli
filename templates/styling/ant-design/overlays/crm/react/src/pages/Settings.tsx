import { Typography, Card, Form, Input, Select, Button } from 'antd';

const { Title } = Typography;

function Settings() {
  return (
    <div>
      <Title level={3}>Settings</Title>
      <Card style={{ maxWidth: 600 }}>
        <Form layout="vertical" onFinish={(e) => e.preventDefault()}>
          <Form.Item label="Company Name">
            <Input defaultValue="My Company" />
          </Form.Item>
          <Form.Item label="Email Address">
            <Input type="email" defaultValue="admin@company.com" />
          </Form.Item>
          <Form.Item label="Timezone">
            <Select defaultValue="UTC-5">
              <Select.Option value="UTC-8">Pacific Time (UTC-8)</Select.Option>
              <Select.Option value="UTC-7">Mountain Time (UTC-7)</Select.Option>
              <Select.Option value="UTC-6">Central Time (UTC-6)</Select.Option>
              <Select.Option value="UTC-5">Eastern Time (UTC-5)</Select.Option>
              <Select.Option value="UTC+0">UTC</Select.Option>
              <Select.Option value="UTC+1">Central European (UTC+1)</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">Save Changes</Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default Settings;
