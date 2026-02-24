'use client';

import Link from 'next/link';
import { Typography, Button, Row, Col, Space } from 'antd';
import { ProjectCard, Project } from './components/ProjectCard';
import { SkillsGrid } from './components/SkillsGrid';

const { Title, Text, Paragraph } = Typography;

const projects: Project[] = [
  { id: 1, title: 'E-Commerce Platform', description: 'A full-featured online store with cart, checkout, and payment integration.', tech: ['React', 'Node.js', 'PostgreSQL'], image: '🛒', category: 'Web App', link: '#', featured: true },
  { id: 2, title: 'Task Management Dashboard', description: 'Real-time collaborative task management tool with drag-and-drop.', tech: ['Next.js', 'TypeScript', 'MongoDB'], image: '📋', category: 'SaaS', link: '#', featured: true },
  { id: 3, title: 'Weather Analytics App', description: 'Interactive weather visualization app with historical data analysis.', tech: ['React', 'D3.js', 'Python'], image: '🌤️', category: 'Data Viz', link: '#', featured: true },
];

export default function HomePage() {
  return (
    <div>
      <section style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: '#fff', padding: '80px 32px', textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <Text style={{ color: 'rgba(255,255,255,0.8)', fontSize: 18, display: 'block', marginBottom: 8 }}>Hello, I am</Text>
          <Title level={1} style={{ color: '#fff', fontSize: 48, marginBottom: 8 }}>{'{{projectName}}'}</Title>
          <Text style={{ color: 'rgba(255,255,255,0.9)', fontSize: 20, display: 'block', marginBottom: 16 }}>Full-Stack Developer & Designer</Text>
          <Paragraph style={{ color: 'rgba(255,255,255,0.8)', fontSize: 16, maxWidth: 600, margin: '0 auto 32px' }}>
            I build modern web applications with clean code and thoughtful design. Passionate about creating digital experiences that make a real impact.
          </Paragraph>
          <Space size="middle">
            <Link href="/projects"><Button type="primary" size="large" style={{ height: 48, paddingInline: 32 }}>View Projects</Button></Link>
            <Link href="/contact"><Button ghost size="large" style={{ height: 48, paddingInline: 32 }}>Get in Touch</Button></Link>
          </Space>
        </div>
      </section>
      <section style={{ padding: '64px 32px', maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
        <Title level={2}>Featured Projects</Title>
        <Text type="secondary" style={{ display: 'block', marginBottom: 32 }}>A selection of my recent work and side projects</Text>
        <Row gutter={[24, 24]}>
          {projects.map((project) => (
            <Col xs={24} sm={12} lg={8} key={project.id}><ProjectCard project={project} /></Col>
          ))}
        </Row>
        <div style={{ marginTop: 32 }}>
          <Link href="/projects"><Button size="large">View All Projects</Button></Link>
        </div>
      </section>
      <SkillsGrid />
      <section style={{ background: '#f9fafb', padding: '64px 32px', textAlign: 'center' }}>
        <Title level={2}>Let us Work Together</Title>
        <Paragraph type="secondary" style={{ fontSize: 16 }}>Have a project in mind? I am always open to discussing new opportunities.</Paragraph>
        <Link href="/contact"><Button type="primary" size="large" style={{ height: 48, paddingInline: 32 }}>Start a Conversation</Button></Link>
      </section>
    </div>
  );
}
