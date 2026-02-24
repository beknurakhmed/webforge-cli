import { Table, Card, Tag, Button, Typography } from 'antd';

const { Title } = Typography;

interface Order {
  id: string;
  customer: string;
  email: string;
  amount: string;
  status: 'Completed' | 'Processing' | 'Cancelled';
}

const rows: Order[] = [
  { id: '#3210', customer: 'Olivia Martin', email: 'olivia@email.com', amount: '$42.00', status: 'Completed' },
  { id: '#3209', customer: 'Ava Johnson', email: 'ava@email.com', amount: '$74.99', status: 'Processing' },
  { id: '#3208', customer: 'Michael Brown', email: 'michael@email.com', amount: '$64.00', status: 'Completed' },
  { id: '#3207', customer: 'Lisa Anderson', email: 'lisa@email.com', amount: '$49.99', status: 'Cancelled' },
  { id: '#3206', customer: 'Thomas Wilson', email: 'thomas@email.com', amount: '$120.00', status: 'Completed' },
];

const statusColors: Record<string, string> = {
  Completed: 'success',
  Processing: 'processing',
  Cancelled: 'error',
};

const columns = [
  { title: 'Order', dataIndex: 'id', key: 'id' },
  { title: 'Customer', dataIndex: 'customer', key: 'customer' },
  { title: 'Email', dataIndex: 'email', key: 'email' },
  { title: 'Amount', dataIndex: 'amount', key: 'amount' },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status: string) => <Tag color={statusColors[status]}>{status}</Tag>,
  },
];

export function DataTable() {
  return (
    <Card
      title={<Title level={5} style={{ margin: 0 }}>Recent Orders</Title>}
      extra={<Button type="link">View All</Button>}
    >
      <Table
        dataSource={rows}
        columns={columns}
        rowKey="id"
        pagination={false}
        size="middle"
      />
    </Card>
  );
}
