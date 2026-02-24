import { useState } from 'react';
import { Typography, Button, Row, Col, Space } from 'antd';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const { Title, Text } = Typography;

const allCategories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];

function Projects() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <section style={{ padding: '64px 32px', maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
      <Title level={2}>All Projects</Title>
      <Text type="secondary" style={{ display: 'block', marginBottom: 24 }}>Browse my complete portfolio</Text>
      <Space wrap style={{ marginBottom: 32 }}>
        {allCategories.map((cat) => (
          <Button
            key={cat}
            type={active === cat ? 'primary' : 'default'}
            onClick={() => setActive(cat)}
          >
            {cat}
          </Button>
        ))}
      </Space>
      <Row gutter={[24, 24]}>
        {filtered.map((project) => (
          <Col xs={24} sm={12} lg={8} key={project.id}>
            <ProjectCard project={project} />
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default Projects;
