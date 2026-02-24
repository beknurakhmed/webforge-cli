import { Card, Tag, Typography, Space } from 'antd';
import type { Project } from '../data/projects';

const { Title, Paragraph } = Typography;

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card hoverable>
      <div style={{ fontSize: 48, textAlign: 'center', marginBottom: 16 }}>{project.image}</div>
      <Title level={4} style={{ marginBottom: 8 }}>{project.title}</Title>
      <Paragraph type="secondary">{project.description}</Paragraph>
      <Space wrap>
        {project.tags.map((tag, j) => (
          <Tag key={j} color="blue">{tag}</Tag>
        ))}
      </Space>
    </Card>
  );
}

export default ProjectCard;
