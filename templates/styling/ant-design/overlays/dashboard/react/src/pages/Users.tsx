import { Typography, Table, Card, Tag, Avatar, Button, Badge } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const { Title } = Typography;

interface User {
  avatar: string;
  name: string;
  email: string;
  role: string;
  status: 'Active' | 'Inactive';
}

const users: User[] = [
  { avatar: '👩', name: 'Sarah Chen', email: 'sarah@email.com', role: 'Admin', status: 'Active' },
  { avatar: '👨', name: 'James Miller', email: 'james@email.com', role: 'Editor', status: 'Active' },
  { avatar: '👩', name: 'Emily Davis', email: 'emily@email.com', role: 'Viewer', status: 'Inactive' },
  { avatar: '👨', name: 'Robert Wilson', email: 'robert@email.com', role: 'Editor', status: 'Active' },
  { avatar: '👩', name: 'Maria Garcia', email: 'maria@email.com', role: 'Admin', status: 'Active' },
  { avatar: '👨', name: 'David Lee', email: 'david@email.com', role: 'Viewer', status: 'Inactive' },
  { avatar: '👩', name: 'Anna Taylor', email: 'anna@email.com', role: 'Editor', status: 'Active' },
];

const columns = [
  {
    title: 'User',
    key: 'user',
    render: (_: unknown, record: User) => (
      <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <Avatar>{record.avatar}</Avatar>
        {record.name}
      </span>
    ),
  },
  { title: 'Email', dataIndex: 'email', key: 'email' },
  {
    title: 'Role',
    dataIndex: 'role',
    key: 'role',
    render: (role: string) => <Tag color="blue">{role}</Tag>,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status: string) => (
      <Badge status={status === 'Active' ? 'success' : 'default'} text={status} />
    ),
  },
];

export function Users() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <Title level={3} style={{ margin: 0 }}>Users</Title>
        <Button type="primary" icon={<PlusOutlined />}>Add User</Button>
      </div>
      <Card>
        <Table dataSource={users} columns={columns} rowKey="email" pagination={false} />
      </Card>
    </div>
  );
}
