import { Table, Tag, Card } from 'antd';
import type { Contact } from '../data/contacts';

interface ContactsTableProps {
  contacts: Contact[];
}

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
  { title: 'Phone', dataIndex: 'phone', key: 'phone' },
];

function ContactsTable({ contacts }: ContactsTableProps) {
  return (
    <Card>
      <Table
        dataSource={contacts}
        columns={columns}
        rowKey="id"
        pagination={false}
        size="middle"
      />
    </Card>
  );
}

export default ContactsTable;
