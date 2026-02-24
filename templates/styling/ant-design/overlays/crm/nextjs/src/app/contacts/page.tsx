'use client';

import { Typography } from 'antd';
import { ContactsTable } from '../components/ContactsTable';

const { Title, Text } = Typography;

export default function ContactsPage() {
  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <Title level={3} style={{ margin: 0 }}>Contacts</Title>
        <Text type="secondary">Manage your contacts and leads.</Text>
      </div>
      <ContactsTable />
    </div>
  );
}
