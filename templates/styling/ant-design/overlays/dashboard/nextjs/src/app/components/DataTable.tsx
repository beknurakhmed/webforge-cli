'use client';

import { Table, Card, Tag, Typography } from 'antd';

const { Title } = Typography;

interface Order {
  id: string;
  customer: string;
  product: string;
  amount: string;
  status: 'Completed' | 'Pending' | 'Processing' | 'Cancelled';
  date: string;
}

const orders: Order[] = [
  { id: 'ORD-001', customer: 'Alice Johnson', product: 'Wireless Headphones', amount: '$79.99', status: 'Completed', date: '2025-01-15' },
  { id: 'ORD-002', customer: 'Bob Smith', product: 'Smart Watch', amount: '$199.99', status: 'Processing', date: '2025-01-15' },
  { id: 'ORD-003', customer: 'Carol Davis', product: 'Running Shoes', amount: '$129.99', status: 'Pending', date: '2025-01-14' },
  { id: 'ORD-004', customer: 'David Wilson', product: 'Backpack', amount: '$59.99', status: 'Completed', date: '2025-01-14' },
  { id: 'ORD-005', customer: 'Eva Martinez', product: 'Coffee Maker', amount: '$89.99', status: 'Cancelled', date: '2025-01-13' },
];

const statusColors: Record<string, string> = { Completed: 'success', Processing: 'processing', Pending: 'warning', Cancelled: 'error' };

interface DataTableProps {
  title?: string;
  limit?: number;
}

export function DataTable({ title = 'Recent Orders', limit }: DataTableProps) {
  const displayOrders = limit ? orders.slice(0, limit) : orders;

  const columns = [
    { title: 'Order ID', dataIndex: 'id', key: 'id' },
    { title: 'Customer', dataIndex: 'customer', key: 'customer' },
    { title: 'Product', dataIndex: 'product', key: 'product' },
    { title: 'Amount', dataIndex: 'amount', key: 'amount' },
    { title: 'Status', dataIndex: 'status', key: 'status', render: (status: string) => <Tag color={statusColors[status]}>{status}</Tag> },
    { title: 'Date', dataIndex: 'date', key: 'date' },
  ];

  return (
    <Card title={<Title level={5} style={{ margin: 0 }}>{title}</Title>}>
      <Table dataSource={displayOrders} columns={columns} rowKey="id" pagination={false} size="middle" />
    </Card>
  );
}
