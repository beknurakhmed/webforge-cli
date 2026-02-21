import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { StatsCards } from './components/StatsCards';
import { ContactsTable } from './components/ContactsTable';
import { Filters } from './components/Filters';
import './App.css';

export interface Contact {
  id: number;
  name: string;
  email: string;
  company: string;
  status: 'Lead' | 'Prospect' | 'Customer' | 'Churned';
  value: string;
  lastContact: string;
}

const initialContacts: Contact[] = [
  { id: 1, name: 'Sarah Connor', email: 'sarah@acme.com', company: 'Acme Corp', status: 'Customer', value: '$12,400', lastContact: '2 hours ago' },
  { id: 2, name: 'John Smith', email: 'john@globex.com', company: 'Globex Inc', status: 'Lead', value: '$8,200', lastContact: '1 day ago' },
  { id: 3, name: 'Emma Wilson', email: 'emma@wayne.com', company: 'Wayne Enterprises', status: 'Prospect', value: '$34,000', lastContact: '3 days ago' },
  { id: 4, name: 'Mike Chen', email: 'mike@stark.com', company: 'Stark Industries', status: 'Customer', value: '$22,500', lastContact: '5 hours ago' },
  { id: 5, name: 'Lisa Park', email: 'lisa@initech.com', company: 'Initech', status: 'Churned', value: '$5,100', lastContact: '2 weeks ago' },
  { id: 6, name: 'David Lee', email: 'david@umbrella.com', company: 'Umbrella Corp', status: 'Lead', value: '$15,800', lastContact: '4 hours ago' },
];

function App() {
  const [contacts] = useState<Contact[]>(initialContacts);
  const [filter, setFilter] = useState<string>('all');

  const filtered = filter === 'all' ? contacts : contacts.filter((c) => c.status.toLowerCase() === filter);

  return (
    <div className="crm">
      <Sidebar />
      <main className="crm-main">
        <header className="crm-header">
          <h1>Contacts</h1>
          <button className="btn-primary">+ Add Contact</button>
        </header>
        <StatsCards contacts={contacts} />
        <Filters activeFilter={filter} onFilterChange={setFilter} />
        <ContactsTable contacts={filtered} />
      </main>
    </div>
  );
}

export default App;
