'use client';

import { useState } from 'react';
import styles from './page.module.css';

interface Contact {
  id: number;
  name: string;
  email: string;
  company: string;
  phone: string;
  status: 'Lead' | 'Prospect' | 'Customer' | 'Inactive';
  value: string;
  avatar: string;
  lastContact: string;
}

const contacts: Contact[] = [
  { id: 1, name: 'Sarah Chen', email: 'sarah@techcorp.com', company: 'TechCorp Inc.', phone: '+1 (555) 123-4567', status: 'Customer', value: '$45,000', avatar: '👩', lastContact: '2025-01-15' },
  { id: 2, name: 'James Wilson', email: 'james@innovate.io', company: 'Innovate.io', phone: '+1 (555) 234-5678', status: 'Prospect', value: '$28,000', avatar: '👨', lastContact: '2025-01-14' },
  { id: 3, name: 'Maria Garcia', email: 'maria@designlab.co', company: 'DesignLab Co.', phone: '+1 (555) 345-6789', status: 'Lead', value: '$15,000', avatar: '👩', lastContact: '2025-01-13' },
  { id: 4, name: 'Robert Kim', email: 'robert@globalnet.com', company: 'GlobalNet Ltd.', phone: '+1 (555) 456-7890', status: 'Customer', value: '$62,000', avatar: '👨', lastContact: '2025-01-12' },
  { id: 5, name: 'Emily Brown', email: 'emily@startupxyz.com', company: 'StartupXYZ', phone: '+1 (555) 567-8901', status: 'Prospect', value: '$18,500', avatar: '👩', lastContact: '2025-01-11' },
  { id: 6, name: 'Michael Davis', email: 'michael@enterprise.com', company: 'Enterprise Solutions', phone: '+1 (555) 678-9012', status: 'Inactive', value: '$8,200', avatar: '👨', lastContact: '2024-12-20' },
];

const statusStyleMap: Record<string, string> = {
  Customer: styles.statusCustomer,
  Prospect: styles.statusProspect,
  Lead: styles.statusLead,
  Inactive: styles.statusInactive,
};

export default function ContactsPage() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const filtered = contacts.filter((c) => {
    const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.company.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === 'All' || c.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <h1>Contacts</h1>
        <p>Manage your contacts and customer relationships.</p>
      </div>

      <div className={styles.tableCard}>
        <div className={styles.tableControls}>
          <div className={styles.searchInput}>
            <span>🔍</span>
            <input
              type="text"
              placeholder="Search contacts..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className={styles.filterGroup}>
            {['All', 'Lead', 'Prospect', 'Customer', 'Inactive'].map((status) => (
              <button
                key={status}
                className={statusFilter === status ? styles.filterBtnActive : styles.filterBtn}
                onClick={() => setStatusFilter(status)}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.dataTable}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Company</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Status</th>
                <th>Value</th>
                <th>Last Contact</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((contact) => (
                <tr key={contact.id}>
                  <td>
                    <div className={styles.contactCell}>
                      <span className={styles.contactAvatar}>{contact.avatar}</span>
                      <span className={styles.contactName}>{contact.name}</span>
                    </div>
                  </td>
                  <td>{contact.company}</td>
                  <td className={styles.contactEmail}>{contact.email}</td>
                  <td>{contact.phone}</td>
                  <td><span className={statusStyleMap[contact.status]}>{contact.status}</span></td>
                  <td className={styles.contactValue}>{contact.value}</td>
                  <td className={styles.date}>{contact.lastContact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filtered.length === 0 && (
          <div className={styles.emptyState}>
            <p>No contacts found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
