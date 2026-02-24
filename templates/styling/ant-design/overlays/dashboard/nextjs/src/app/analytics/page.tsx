'use client';

import { Typography, Card, Statistic, Row, Col, Table, Progress, Tag } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { ChartPlaceholder } from '../components/ChartPlaceholder';

const { Title, Text } = Typography;

const metrics = [
  { label: 'Page Views', value: '124,892', change: '+14.2%', up: true },
  { label: 'Bounce Rate', value: '32.1%', change: '-2.4%', up: false },
  { label: 'Avg. Session', value: '4m 32s', change: '+8.7%', up: true },
  { label: 'New Visitors', value: '8,432', change: '+18.9%', up: true },
];

const topPages = [
  { page: '/home', views: '24,521', percentage: 32 },
  { page: '/products', views: '18,432', percentage: 24 },
  { page: '/about', views: '12,841', percentage: 17 },
  { page: '/blog', views: '9,234', percentage: 12 },
  { page: '/contact', views: '6,128', percentage: 8 },
];

export default function AnalyticsPage() {
  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <Title level={3} style={{ margin: 0 }}>Analytics</Title>
        <Text type="secondary">Track your website performance and user engagement.</Text>
      </div>
      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        {metrics.map((m) => (
          <Col xs={24} sm={12} lg={6} key={m.label}>
            <Card>
              <Statistic title={m.label} value={m.value} />
              <Tag color={m.up ? 'success' : 'error'} icon={m.up ? <ArrowUpOutlined /> : <ArrowDownOutlined />} style={{ marginTop: 8 }}>{m.change}</Tag>
            </Card>
          </Col>
        ))}
      </Row>
      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        <Col xs={24} lg={12}><ChartPlaceholder title="Traffic Sources" type="bar" /></Col>
        <Col xs={24} lg={12}><ChartPlaceholder title="Visitor Trend" type="line" /></Col>
      </Row>
      <Card title={<Title level={5} style={{ margin: 0 }}>Top Pages</Title>}>
        <Table
          dataSource={topPages}
          rowKey="page"
          pagination={false}
          size="middle"
          columns={[
            { title: 'Page', dataIndex: 'page', key: 'page' },
            { title: 'Views', dataIndex: 'views', key: 'views' },
            { title: 'Share', dataIndex: 'percentage', key: 'percentage', render: (val: number) => `${val}%` },
            { title: 'Progress', key: 'progress', render: (_: unknown, record: { percentage: number }) => <Progress percent={record.percentage} showInfo={false} strokeColor="#4f46e5" /> },
          ]}
        />
      </Card>
    </div>
  );
}
