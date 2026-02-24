'use client';

import { Typography, Card, Tag, Row, Col, Space } from 'antd';

const { Title, Text } = Typography;

interface Deal {
  id: number;
  company: string;
  value: number;
  contact: string;
  stage: string;
}

const deals: Deal[] = [
  { id: 1, company: 'TechCorp Inc.', value: 45000, contact: 'Sarah Chen', stage: 'Qualified' },
  { id: 2, company: 'Innovate.io', value: 28000, contact: 'James Wilson', stage: 'Prospect' },
  { id: 3, company: 'DesignLab Co.', value: 15000, contact: 'Maria Garcia', stage: 'Proposal' },
  { id: 4, company: 'GlobalNet Ltd.', value: 62000, contact: 'Robert Kim', stage: 'Won' },
  { id: 5, company: 'StartupXYZ', value: 18500, contact: 'Emily Brown', stage: 'Qualified' },
  { id: 6, company: 'Enterprise Solutions', value: 8200, contact: 'Michael Davis', stage: 'Prospect' },
];

const stages = ['Prospect', 'Qualified', 'Proposal', 'Won'];
const stageColors: Record<string, string> = { Prospect: 'blue', Qualified: 'orange', Proposal: 'purple', Won: 'green' };

export default function DealsPage() {
  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <Title level={3} style={{ margin: 0 }}>Deals Pipeline</Title>
        <Text type="secondary">Track your deals across all stages.</Text>
      </div>
      <Row gutter={[16, 16]}>
        {stages.map((stage) => (
          <Col xs={24} sm={12} lg={6} key={stage}>
            <Card title={<Tag color={stageColors[stage]}>{stage}</Tag>} style={{ minHeight: 300 }}>
              <Space direction="vertical" size={12} style={{ width: '100%' }}>
                {deals.filter((d) => d.stage === stage).map((deal) => (
                  <Card key={deal.id} size="small" style={{ background: '#fafafa' }}>
                    <Title level={5} style={{ margin: 0, marginBottom: 4 }}>{deal.company}</Title>
                    <Text type="success" strong>${deal.value.toLocaleString()}</Text>
                    <br />
                    <Text type="secondary" style={{ fontSize: 12 }}>{deal.contact}</Text>
                  </Card>
                ))}
              </Space>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
