import { useState } from 'react';
import ContactsTable from '../components/ContactsTable';
import { contacts } from '../data/contacts';
import styles from './Contacts.module.css';

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
      <header className={styles.crmHeader}>
        <h1>Contacts</h1>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search contacts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </header>
      <ContactsTable contacts={filtered} />
    </div>
  );
}

export default Contacts;
