import { Card, Statistic, Row, Col } from 'antd';
import { contacts } from '../data/contacts';

const stats = [
  { label: 'Total Contacts', value: contacts.length, color: '#4f46e5' },
  { label: 'Leads', value: contacts.filter((c) => c.status === 'Lead').length, color: '#f59e0b' },
  { label: 'Customers', value: contacts.filter((c) => c.status === 'Customer').length, color: '#10b981' },
  { label: 'Churned', value: contacts.filter((c) => c.status === 'Churned').length, color: '#ef4444' },
];

function StatsCards() {
  return (
    <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
      {stats.map((stat, i) => (
        <Col xs={24} sm={12} lg={6} key={i}>
          <Card>
            <Statistic
              title={stat.label}
              value={stat.value}
              valueStyle={{ color: stat.color }}
            />
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default StatsCards;
