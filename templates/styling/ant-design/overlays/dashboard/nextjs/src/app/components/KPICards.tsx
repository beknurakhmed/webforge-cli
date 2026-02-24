'use client';

import { Card, Statistic, Row, Col, Tag } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

interface KPI {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
}

const kpis: KPI[] = [
  { title: 'Total Revenue', value: '$48,250', change: '+12.5%', trend: 'up' },
  { title: 'Active Users', value: '2,340', change: '+8.1%', trend: 'up' },
  { title: 'Orders', value: '1,120', change: '+23.4%', trend: 'up' },
  { title: 'Conversion Rate', value: '3.2%', change: '-1.8%', trend: 'down' },
];

export function KPICards() {
  return (
    <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
      {kpis.map((kpi) => (
        <Col xs={24} sm={12} lg={6} key={kpi.title}>
          <Card>
            <Statistic title={kpi.title} value={kpi.value} />
            <Tag color={kpi.trend === 'up' ? 'success' : 'error'} icon={kpi.trend === 'up' ? <ArrowUpOutlined /> : <ArrowDownOutlined />} style={{ marginTop: 8 }}>
              {kpi.change}
            </Tag>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
