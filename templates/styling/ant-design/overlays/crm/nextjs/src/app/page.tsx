'use client';

import { Typography, Card, Space, Row, Col } from 'antd';
import { StatsCards } from './components/StatsCards';
import { ContactsTable } from './components/ContactsTable';

const { Title, Text } = Typography;

const recentActivities = [
  { action: 'New deal created', detail: 'TechCorp Inc. - Enterprise Plan', time: '2 hours ago', icon: '💼' },
  { action: 'Contact updated', detail: 'Sarah Chen - Status changed to Customer', time: '4 hours ago', icon: '👤' },
  { action: 'Deal closed', detail: 'GlobalNet Ltd. - Premium Package', time: '1 day ago', icon: '🎉' },
  { action: 'New contact added', detail: 'Emily Brown - StartupXYZ', time: '1 day ago', icon: '➕' },
  { action: 'Meeting scheduled', detail: 'James Wilson - Product Demo', time: '2 days ago', icon: '📅' },
];

export default function CRMDashboard() {
  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <Title level={3} style={{ margin: 0 }}>Dashboard</Title>
        <Text type="secondary">Welcome back! Here is your sales overview.</Text>
      </div>
      <StatsCards />
      <Row gutter={[16, 16]}>
        <Col xs={24} lg={14}>
          <ContactsTable limit={4} />
        </Col>
        <Col xs={24} lg={10}>
          <Card title={<Title level={5} style={{ margin: 0 }}>Recent Activity</Title>}>
            <Space direction="vertical" size={16} style={{ width: '100%' }}>
              {recentActivities.map((activity, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <span style={{ fontSize: 20 }}>{activity.icon}</span>
                  <div>
                    <Text strong>{activity.action}</Text>
                    <br />
                    <Text type="secondary" style={{ fontSize: 13 }}>{activity.detail}</Text>
                    <br />
                    <Text type="secondary" style={{ fontSize: 12 }}>{activity.time}</Text>
                  </div>
                </div>
              ))}
            </Space>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
