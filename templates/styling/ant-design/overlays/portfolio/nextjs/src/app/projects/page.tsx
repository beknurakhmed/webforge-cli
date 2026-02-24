'use client';

import { useState } from 'react';
import { Typography, Button, Row, Col, Space } from 'antd';
import { ProjectCard, Project } from '../components/ProjectCard';

const { Title, Text } = Typography;

const projects: Project[] = [
  { id: 1, title: 'E-Commerce Platform', description: 'A full-featured online store with cart, checkout, and payment integration.', tech: ['React', 'Node.js', 'PostgreSQL'], image: '🛒', category: 'Web App', link: '#', featured: true },
  { id: 2, title: 'Task Management Dashboard', description: 'Real-time collaborative task management tool with drag-and-drop.', tech: ['Next.js', 'TypeScript', 'MongoDB'], image: '📋', category: 'SaaS', link: '#', featured: true },
  { id: 3, title: 'Weather Analytics App', description: 'Interactive weather visualization app with historical data analysis.', tech: ['React', 'D3.js', 'Python'], image: '🌤️', category: 'Data Viz', link: '#', featured: true },
  { id: 4, title: 'Social Media Mobile App', description: 'Cross-platform social app with real-time messaging and stories.', tech: ['React Native', 'Firebase', 'Redux'], image: '📱', category: 'Mobile', link: '#', featured: false },
  { id: 5, title: 'AI Content Generator', description: 'AI-powered tool for generating marketing copy and blog posts.', tech: ['Python', 'OpenAI', 'FastAPI'], image: '🤖', category: 'AI/ML', link: '#', featured: false },
  { id: 6, title: 'Portfolio Website Builder', description: 'Drag-and-drop portfolio builder with customizable themes.', tech: ['Vue.js', 'Node.js', 'AWS'], image: '🎨', category: 'Web App', link: '#', featured: false },
];

const allCategories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];

export default function ProjectsPage() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <section style={{ padding: '64px 32px', maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
      <Title level={2}>All Projects</Title>
      <Text type="secondary" style={{ display: 'block', marginBottom: 24 }}>Browse my complete portfolio</Text>
      <Space wrap style={{ marginBottom: 32 }}>
        {allCategories.map((cat) => (
          <Button key={cat} type={active === cat ? 'primary' : 'default'} onClick={() => setActive(cat)}>{cat}</Button>
        ))}
      </Space>
      <Row gutter={[24, 24]}>
        {filtered.map((project) => (
          <Col xs={24} sm={12} lg={8} key={project.id}><ProjectCard project={project} /></Col>
        ))}
      </Row>
    </section>
  );
}
