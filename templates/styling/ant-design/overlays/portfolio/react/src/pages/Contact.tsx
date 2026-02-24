import { Typography, Card, Form, Input, Button, Row, Col, Space } from 'antd';

const { Title, Text, Paragraph } = Typography;
const { TextArea } = Input;

function Contact() {
  return (
    <div style={{ padding: '64px 32px', maxWidth: 1000, margin: '0 auto' }}>
      <Title level={2} style={{ textAlign: 'center' }}>Get In Touch</Title>
      <Text type="secondary" style={{ display: 'block', textAlign: 'center', marginBottom: 32 }}>
        Have a project in mind? Let's work together.
      </Text>
      <Row gutter={[48, 32]}>
        <Col xs={24} md={14}>
          <Card>
            <Form layout="vertical" onFinish={(e) => e}>
              <Row gutter={16}>
                <Col xs={24} sm={12}>
                  <Form.Item label="Name">
                    <Input placeholder="Your name" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12}>
                  <Form.Item label="Email">
                    <Input type="email" placeholder="your@email.com" />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item label="Subject">
                <Input placeholder="Project inquiry" />
              </Form.Item>
              <Form.Item label="Message">
                <TextArea rows={5} placeholder="Tell me about your project..." />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" size="large">Send Message</Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
        <Col xs={24} md={10}>
          <Card title="Contact Info">
            <Space direction="vertical" size={16}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <span style={{ fontSize: 20 }}>📧</span>
                <Text>hello@developer.com</Text>
              </div>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <span style={{ fontSize: 20 }}>📍</span>
                <Text>San Francisco, CA</Text>
              </div>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <span style={{ fontSize: 20 }}>🔗</span>
                <Text>github.com/developer</Text>
              </div>
            </Space>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Contact;
