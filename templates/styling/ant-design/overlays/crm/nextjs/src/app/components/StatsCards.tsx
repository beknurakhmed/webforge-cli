'use client';

import { Card, Statistic, Row, Col, Tag } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

const stats = [
  { title: 'Total Contacts', value: '1,248', change: '+12.5%', up: true },
  { title: 'Active Deals', value: '42', change: '+8.3%', up: true },
  { title: 'Revenue Pipeline', value: '$284,500', change: '+23.1%', up: true },
  { title: 'Conversion Rate', value: '24.8%', change: '-2.1%', up: false },
];

export function StatsCards() {
  return (
    <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
      {stats.map((stat) => (
        <Col xs={24} sm={12} lg={6} key={stat.title}>
          <Card>
            <Statistic title={stat.title} value={stat.value} />
            <Tag color={stat.up ? 'success' : 'error'} icon={stat.up ? <ArrowUpOutlined /> : <ArrowDownOutlined />} style={{ marginTop: 8 }}>{stat.change}</Tag>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
