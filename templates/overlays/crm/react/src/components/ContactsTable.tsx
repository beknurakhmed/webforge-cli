import type { Contact } from '../data/contacts';

interface ContactsTableProps {
  contacts: Contact[];
}

function ContactsTable({ contacts }: ContactsTableProps) {
  return (
    <div className="table-card">
      <table className="data-table">
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
              <td className="contact-name">{c.name}</td>
              <td className="contact-email">{c.email}</td>
              <td>{c.company}</td>
              <td>
                <span className={`status-badge status-${c.status.toLowerCase()}`}>
                  {c.status}
                </span>
              </td>
              <td className="contact-phone">{c.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContactsTable;
