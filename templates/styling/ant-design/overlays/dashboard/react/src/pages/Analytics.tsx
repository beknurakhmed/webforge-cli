import { Typography, Card, Statistic, Row, Col } from 'antd';
import { ChartPlaceholder } from '../components/ChartPlaceholder';

const { Title } = Typography;

const metrics = [
  { label: 'Page Views', value: '124,892', change: '+14%' },
  { label: 'Bounce Rate', value: '42.3%', change: '-2.1%' },
  { label: 'Avg. Session', value: '4m 32s', change: '+8%' },
  { label: 'Conversions', value: '1,847', change: '+5.3%' },
];

export function Analytics() {
  return (
    <div>
      <Title level={3}>Analytics</Title>
      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        {metrics.map((m, i) => (
          <Col xs={24} sm={12} lg={6} key={i}>
            <Card>
              <Statistic title={m.label} value={m.value} suffix={<span style={{ fontSize: 14, color: m.change.startsWith('+') ? '#52c41a' : '#ff4d4f' }}>{m.change}</span>} />
            </Card>
          </Col>
        ))}
      </Row>
      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        <Col xs={24} lg={12}>
          <ChartPlaceholder title="Traffic Sources" data={[30, 55, 80, 45, 70, 60, 85, 50, 65, 75, 90, 40]} />
        </Col>
        <Col xs={24} lg={12}>
          <ChartPlaceholder title="Conversion Funnel" data={[95, 80, 60, 45, 30, 20, 15, 12, 10, 8, 6, 5]} />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col xs={24} lg={12}>
          <ChartPlaceholder title="Revenue by Channel" data={[70, 50, 85, 40, 60, 75, 55, 90, 45, 65, 80, 70]} />
        </Col>
        <Col xs={24} lg={12}>
          <ChartPlaceholder title="User Engagement" data={[20, 35, 50, 65, 45, 70, 55, 80, 60, 75, 85, 90]} />
        </Col>
      </Row>
    </div>
  );
}
