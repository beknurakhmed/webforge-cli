import type { Contact } from '../data/contacts';
import styles from './ContactsTable.module.css';

interface ContactsTableProps {
  contacts: Contact[];
}

const statusStyles: Record<string, string> = {
  Lead: styles.statusLead,
  Prospect: styles.statusProspect,
  Customer: styles.statusCustomer,
  Churned: styles.statusChurned,
};

function ContactsTable({ contacts }: ContactsTableProps) {
  return (
    <div className={styles.tableCard}>
      <table className={styles.dataTable}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Company</th>
            <th>Status</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((c) => (
            <tr key={c.id}>
              <td className={styles.contactName}>{c.name}</td>
              <td className={styles.contactEmail}>{c.email}</td>
              <td>{c.company}</td>
              <td>
                <span className={statusStyles[c.status]}>
                  {c.status}
                </span>
              </td>
              <td className={styles.contactPhone}>{c.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContactsTable;
