import { useState } from 'react';
import { Typography, Input } from 'antd';
import ContactsTable from '../components/ContactsTable';
import { contacts } from '../data/contacts';

const { Title } = Typography;
const { Search } = Input;

function Contacts() {
  const [search, setSearch] = useState('');

  const filtered = contacts.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase()) ||
      c.company.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, flexWrap: 'wrap', gap: 16 }}>
        <Title level={3} style={{ margin: 0 }}>Contacts</Title>
        <Search
          placeholder="Search contacts..."
          allowClear
          style={{ maxWidth: 300 }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <ContactsTable contacts={filtered} />
    </div>
  );
}

export default Contacts;
