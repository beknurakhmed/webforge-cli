'use client';

import { useState } from 'react';
import { Typography, Table, Card, Tag, Avatar, Button, Badge, Input, Space } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
const { Search } = Input;

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'Active' | 'Inactive';
  joined: string;
  avatar: string;
}

const users: User[] = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', status: 'Active', joined: '2024-06-15', avatar: '👩' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Editor', status: 'Active', joined: '2024-07-22', avatar: '👨' },
  { id: 3, name: 'Carol Davis', email: 'carol@example.com', role: 'Viewer', status: 'Active', joined: '2024-08-10', avatar: '👩' },
  { id: 4, name: 'David Wilson', email: 'david@example.com', role: 'Editor', status: 'Inactive', joined: '2024-09-05', avatar: '👨' },
  { id: 5, name: 'Eva Martinez', email: 'eva@example.com', role: 'Admin', status: 'Active', joined: '2024-10-18', avatar: '👩' },
  { id: 6, name: 'Frank Brown', email: 'frank@example.com', role: 'Viewer', status: 'Active', joined: '2024-11-02', avatar: '👨' },
  { id: 7, name: 'Grace Lee', email: 'grace@example.com', role: 'Editor', status: 'Inactive', joined: '2024-11-20', avatar: '👩' },
  { id: 8, name: 'Henry Taylor', email: 'henry@example.com', role: 'Viewer', status: 'Active', joined: '2025-01-08', avatar: '👨' },
];

export default function UsersPage() {
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('All');

  const filtered = users.filter((u) => {
    const matchesSearch = u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase());
    const matchesRole = roleFilter === 'All' || u.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  const columns = [
    { title: 'User', key: 'user', render: (_: unknown, record: User) => (<span style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Avatar>{record.avatar}</Avatar>{record.name}</span>) },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Role', dataIndex: 'role', key: 'role', render: (role: string) => <Tag color="blue">{role}</Tag> },
    { title: 'Status', dataIndex: 'status', key: 'status', render: (status: string) => <Badge status={status === 'Active' ? 'success' : 'default'} text={status} /> },
    { title: 'Joined', dataIndex: 'joined', key: 'joined' },
  ];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <div>
          <Title level={3} style={{ margin: 0 }}>Users</Title>
          <Text type="secondary">Manage your team members and their permissions.</Text>
        </div>
        <Button type="primary" icon={<PlusOutlined />}>Add User</Button>
      </div>
      <Card>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16, flexWrap: 'wrap', gap: 12 }}>
          <Search placeholder="Search users..." style={{ maxWidth: 300 }} value={search} onChange={(e) => setSearch(e.target.value)} />
          <Space>
            {['All', 'Admin', 'Editor', 'Viewer'].map((role) => (
              <Button key={role} type={roleFilter === role ? 'primary' : 'default'} onClick={() => setRoleFilter(role)}>{role}</Button>
            ))}
          </Space>
        </div>
        <Table dataSource={filtered} columns={columns} rowKey="id" pagination={false} />
      </Card>
    </div>
  );
}
