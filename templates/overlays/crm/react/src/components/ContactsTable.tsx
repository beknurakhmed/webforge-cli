import type { Contact } from '../App';

interface ContactsTableProps {
  contacts: Contact[];
}

export function ContactsTable({ contacts }: ContactsTableProps) {
  return (
    <div className="table-card">
      <table className="data-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Company</th>
            <th>Email</th>
            <th>Status</th>
            <th>Deal Value</th>
            <th>Last Contact</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((c) => (
            <tr key={c.id}>
              <td className="contact-name">{c.name}</td>
              <td>{c.company}</td>
              <td className="contact-email">{c.email}</td>
              <td>
                <span className={`status-badge status-${c.status.toLowerCase()}`}>
                  {c.status}
                </span>
              </td>
              <td className="contact-value">{c.value}</td>
              <td className="contact-time">{c.lastContact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
