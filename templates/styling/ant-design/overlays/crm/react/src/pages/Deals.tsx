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
  { id: 1, company: 'Acme Corp', value: 25000, contact: 'John Smith', stage: 'Qualified' },
  { id: 2, company: 'Globex Inc', value: 18000, contact: 'Sarah Johnson', stage: 'Prospect' },
  { id: 3, company: 'Wayne Enterprises', value: 45000, contact: 'Emily Chen', stage: 'Proposal' },
  { id: 4, company: 'Stark Industries', value: 32000, contact: 'Alex Turner', stage: 'Won' },
  { id: 5, company: 'Initech', value: 12000, contact: 'Mike Davis', stage: 'Qualified' },
  { id: 6, company: 'Oscorp', value: 28000, contact: 'David Brown', stage: 'Prospect' },
  { id: 7, company: 'LexCorp', value: 55000, contact: 'Rachel Green', stage: 'Proposal' },
  { id: 8, company: 'Umbrella Corp', value: 15000, contact: 'Lisa Wang', stage: 'Won' },
];

const stages = ['Prospect', 'Qualified', 'Proposal', 'Won'];

const stageColors: Record<string, string> = {
  Prospect: 'blue',
  Qualified: 'orange',
  Proposal: 'purple',
  Won: 'green',
};

function Deals() {
  return (
    <div>
      <Title level={3}>Deals Pipeline</Title>
      <Row gutter={[16, 16]}>
        {stages.map((stage) => (
          <Col xs={24} sm={12} lg={6} key={stage}>
            <Card title={<Tag color={stageColors[stage]}>{stage}</Tag>} style={{ minHeight: 300 }}>
              <Space direction="vertical" size={12} style={{ width: '100%' }}>
                {deals
                  .filter((d) => d.stage === stage)
                  .map((deal) => (
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

export default Deals;
