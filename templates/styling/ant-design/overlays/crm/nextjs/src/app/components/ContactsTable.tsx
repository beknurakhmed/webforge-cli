'use client';

import { Table, Card, Tag, Avatar, Typography } from 'antd';

const { Title } = Typography;

interface Contact {
  id: number;
  name: string;
  email: string;
  company: string;
  phone: string;
  status: 'Lead' | 'Prospect' | 'Customer' | 'Inactive';
  value: string;
  avatar: string;
}

const contacts: Contact[] = [
  { id: 1, name: 'Sarah Chen', email: 'sarah@techcorp.com', company: 'TechCorp Inc.', phone: '+1 (555) 123-4567', status: 'Customer', value: '$45,000', avatar: '👩' },
  { id: 2, name: 'James Wilson', email: 'james@innovate.io', company: 'Innovate.io', phone: '+1 (555) 234-5678', status: 'Prospect', value: '$28,000', avatar: '👨' },
  { id: 3, name: 'Maria Garcia', email: 'maria@designlab.co', company: 'DesignLab Co.', phone: '+1 (555) 345-6789', status: 'Lead', value: '$15,000', avatar: '👩' },
  { id: 4, name: 'Robert Kim', email: 'robert@globalnet.com', company: 'GlobalNet Ltd.', phone: '+1 (555) 456-7890', status: 'Customer', value: '$62,000', avatar: '👨' },
  { id: 5, name: 'Emily Brown', email: 'emily@startupxyz.com', company: 'StartupXYZ', phone: '+1 (555) 567-8901', status: 'Prospect', value: '$18,500', avatar: '👩' },
  { id: 6, name: 'Michael Davis', email: 'michael@enterprise.com', company: 'Enterprise Solutions', phone: '+1 (555) 678-9012', status: 'Inactive', value: '$8,200', avatar: '👨' },
];

const statusColors: Record<string, string> = { Lead: 'orange', Prospect: 'blue', Customer: 'green', Inactive: 'default' };

interface ContactsTableProps {
  limit?: number;
}

export function ContactsTable({ limit }: ContactsTableProps) {
  const displayContacts = limit ? contacts.slice(0, limit) : contacts;

  const columns = [
    { title: 'Name', key: 'name', render: (_: unknown, record: Contact) => (<span style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Avatar>{record.avatar}</Avatar><div><strong>{record.name}</strong><br /><span style={{ color: '#999', fontSize: 12 }}>{record.phone}</span></div></span>) },
    { title: 'Company', dataIndex: 'company', key: 'company' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Status', dataIndex: 'status', key: 'status', render: (status: string) => <Tag color={statusColors[status]}>{status}</Tag> },
    { title: 'Value', dataIndex: 'value', key: 'value' },
  ];

  return (
    <Card title={<Title level={5} style={{ margin: 0 }}>{limit ? 'Recent Contacts' : 'All Contacts'}</Title>}>
      <Table dataSource={displayContacts} columns={columns} rowKey="id" pagination={false} size="middle" />
    </Card>
  );
}
