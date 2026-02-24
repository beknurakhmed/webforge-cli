'use client';

import { Card, Tag, Typography, Row, Col, Space } from 'antd';

const { Title } = Typography;

const skills = [
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
  { category: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'Redis'] },
  { category: 'DevOps', items: ['Docker', 'AWS', 'CI/CD', 'Linux'] },
  { category: 'Tools', items: ['Git', 'VS Code', 'Figma', 'Jira'] },
];

export function SkillsGrid() {
  return (
    <section style={{ padding: '64px 32px', maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
      <Title level={2}>Skills & Technologies</Title>
      <Row gutter={[16, 16]} style={{ marginTop: 32 }}>
        {skills.map((group, i) => (
          <Col xs={24} sm={12} lg={6} key={i}>
            <Card>
              <Title level={5} style={{ marginBottom: 12 }}>{group.category}</Title>
              <Space wrap>
                {group.items.map((skill, j) => (
                  <Tag key={j} color="blue">{skill}</Tag>
                ))}
              </Space>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}
