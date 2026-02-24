import { Typography, Table, Card, Tag } from 'antd';
import StatsCards from '../components/StatsCards';
import { contacts } from '../data/contacts';

const { Title } = Typography;

const statusColors: Record<string, string> = {
  Lead: 'orange',
  Prospect: 'blue',
  Customer: 'green',
  Churned: 'red',
};

const columns = [
  { title: 'Name', dataIndex: 'name', key: 'name', render: (name: string) => <strong>{name}</strong> },
  { title: 'Email', dataIndex: 'email', key: 'email' },
  { title: 'Company', dataIndex: 'company', key: 'company' },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status: string) => <Tag color={statusColors[status]}>{status}</Tag>,
  },
];

function DashboardHome() {
  const recentContacts = contacts.slice(0, 5);

  return (
    <div>
      <Title level={3}>Dashboard</Title>
      <StatsCards />
      <Title level={4} style={{ marginBottom: 16 }}>Recent Contacts</Title>
      <Card>
        <Table
          dataSource={recentContacts}
          columns={columns}
          rowKey="id"
          pagination={false}
          size="middle"
        />
      </Card>
    </div>
  );
}

export default DashboardHome;
