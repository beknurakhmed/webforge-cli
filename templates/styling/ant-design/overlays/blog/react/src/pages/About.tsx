import { Typography, Card, Avatar, Space, Divider } from 'antd';

const { Title, Text, Paragraph } = Typography;

function About() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto' }}>
      <Title level={2}>About This Blog</Title>
      <Paragraph type="secondary" style={{ fontSize: 16, marginBottom: 32 }}>
        A blog dedicated to modern web development, covering topics from frontend frameworks
        to backend architectures and everything in between.
      </Paragraph>
      <Card style={{ marginBottom: 32 }}>
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          <Avatar size={80} style={{ fontSize: 40, backgroundColor: '#f0f0f0' }}>✍️</Avatar>
          <div>
            <Title level={3} style={{ margin: 0 }}>Jane Developer</Title>
            <Text type="secondary">Senior Software Engineer</Text>
            <Paragraph style={{ marginTop: 8, marginBottom: 0 }}>
              With over 8 years of experience building web applications, I write about
              the tools, techniques, and practices that help developers build better software.
            </Paragraph>
          </div>
        </div>
      </Card>
      <Divider />
      <Title level={3}>Get in Touch</Title>
      <Paragraph type="secondary">Have a question or want to collaborate? Reach out anytime.</Paragraph>
      <Space direction="vertical">
        <Text>Email: hello@devblog.com</Text>
        <Text>GitHub: @janedev</Text>
        <Text>Twitter: @janedev</Text>
      </Space>
    </div>
  );
}

export default About;
