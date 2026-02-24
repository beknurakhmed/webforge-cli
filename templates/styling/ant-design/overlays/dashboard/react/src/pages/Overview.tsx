import { Typography, Input, Avatar, Row, Col, Space } from 'antd';
import { KPICards } from '../components/KPICards';
import { ChartPlaceholder } from '../components/ChartPlaceholder';
import { DataTable } from '../components/DataTable';

const { Title } = Typography;

export function Overview() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <Title level={3} style={{ margin: 0 }}>Dashboard</Title>
        <Space>
          <Input.Search placeholder="Search..." style={{ width: 240 }} />
          <Avatar style={{ backgroundColor: '#4f46e5' }}>B</Avatar>
        </Space>
      </div>
      <KPICards />
      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        <Col xs={24} lg={12}>
          <ChartPlaceholder title="Revenue Overview" />
        </Col>
        <Col xs={24} lg={12}>
          <ChartPlaceholder title="User Growth" />
        </Col>
      </Row>
      <DataTable />
    </div>
  );
}
