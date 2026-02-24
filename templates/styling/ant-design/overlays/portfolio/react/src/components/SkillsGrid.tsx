import { Card, Tag, Typography, Row, Col, Space } from 'antd';
import { skills } from '../data/projects';

const { Title } = Typography;

function SkillsGrid() {
  return (
    <Row gutter={[16, 16]}>
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
  );
}

export default SkillsGrid;
