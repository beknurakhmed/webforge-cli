'use client';

import { Card, Tag, Typography, Space } from 'antd';

const { Title, Paragraph } = Typography;

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  category: string;
  link: string;
  featured: boolean;
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card hoverable>
      <div style={{ fontSize: 48, textAlign: 'center', marginBottom: 16 }}>{project.image}</div>
      <Title level={4} style={{ marginBottom: 8 }}>{project.title}</Title>
      <Paragraph type="secondary">{project.description}</Paragraph>
      <Space wrap>
        {project.tech.map((tag, j) => (
          <Tag key={j} color="blue">{tag}</Tag>
        ))}
      </Space>
    </Card>
  );
}
