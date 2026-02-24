'use client';

import { Typography, Row, Col } from 'antd';
import { KPICards } from './components/KPICards';
import { ChartPlaceholder } from './components/ChartPlaceholder';
import { DataTable } from './components/DataTable';

const { Title, Text } = Typography;

export default function OverviewPage() {
  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <Title level={3} style={{ margin: 0 }}>Overview</Title>
        <Text type="secondary">Welcome back! Here is what is happening with your business.</Text>
      </div>
      <KPICards />
      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        <Col xs={24} lg={12}>
          <ChartPlaceholder title="Revenue Over Time" type="bar" />
        </Col>
        <Col xs={24} lg={12}>
          <ChartPlaceholder title="Growth Trend" type="line" />
        </Col>
      </Row>
      <DataTable title="Recent Orders" limit={5} />
    </div>
  );
}
