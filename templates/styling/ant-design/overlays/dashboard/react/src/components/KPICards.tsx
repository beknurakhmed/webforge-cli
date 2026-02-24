import { Card, Statistic, Row, Col, Tag } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

const kpis = [
  { label: 'Total Revenue', value: '$48,250', change: '+12%', positive: true },
  { label: 'Active Users', value: '2,420', change: '+8%', positive: true },
  { label: 'Orders', value: '1,210', change: '-3%', positive: false },
  { label: 'Conversion', value: '3.2%', change: '+0.5%', positive: true },
];

export function KPICards() {
  return (
    <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
      {kpis.map((kpi, i) => (
        <Col xs={24} sm={12} lg={6} key={i}>
          <Card>
            <Statistic title={kpi.label} value={kpi.value} />
            <Tag
              color={kpi.positive ? 'success' : 'error'}
              icon={kpi.positive ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
              style={{ marginTop: 8 }}
            >
              {kpi.change} from last month
            </Tag>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
