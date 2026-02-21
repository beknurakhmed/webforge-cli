interface Contact {
  id: number;
  name: string;
  email: string;
  company: string;
  phone: string;
  status: 'Lead' | 'Prospect' | 'Customer' | 'Inactive';
  value: string;
  avatar: string;
}

const contacts: Contact[] = [
  { id: 1, name: 'Sarah Chen', email: 'sarah@techcorp.com', company: 'TechCorp Inc.', phone: '+1 (555) 123-4567', status: 'Customer', value: '$45,000', avatar: '👩' },
  { id: 2, name: 'James Wilson', email: 'james@innovate.io', company: 'Innovate.io', phone: '+1 (555) 234-5678', status: 'Prospect', value: '$28,000', avatar: '👨' },
  { id: 3, name: 'Maria Garcia', email: 'maria@designlab.co', company: 'DesignLab Co.', phone: '+1 (555) 345-6789', status: 'Lead', value: '$15,000', avatar: '👩' },
  { id: 4, name: 'Robert Kim', email: 'robert@globalnet.com', company: 'GlobalNet Ltd.', phone: '+1 (555) 456-7890', status: 'Customer', value: '$62,000', avatar: '👨' },
  { id: 5, name: 'Emily Brown', email: 'emily@startupxyz.com', company: 'StartupXYZ', phone: '+1 (555) 567-8901', status: 'Prospect', value: '$18,500', avatar: '👩' },
  { id: 6, name: 'Michael Davis', email: 'michael@enterprise.com', company: 'Enterprise Solutions', phone: '+1 (555) 678-9012', status: 'Inactive', value: '$8,200', avatar: '👨' },
];

interface ContactsTableProps {
  limit?: number;
  showSearch?: boolean;
}

export function ContactsTable({ limit, showSearch = false }: ContactsTableProps) {
  const displayContacts = limit ? contacts.slice(0, limit) : contacts;

  return (
    <div className="table-card">
      <div className="table-header">
        <h3 className="table-title">{showSearch ? 'All Contacts' : 'Recent Contacts'}</h3>
        {showSearch && <span className="contact-count">{contacts.length} contacts</span>}
      </div>
      <div className="table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Company</th>
              <th>Email</th>
              <th>Status</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {displayContacts.map((contact) => (
              <tr key={contact.id}>
                <td>
                  <div className="contact-cell">
                    <span className="contact-avatar">{contact.avatar}</span>
                    <div>
                      <p className="contact-name">{contact.name}</p>
                      <p className="contact-phone">{contact.phone}</p>
                    </div>
                  </div>
                </td>
                <td>{contact.company}</td>
                <td className="contact-email">{contact.email}</td>
                <td><span className={`status-badge ${contact.status.toLowerCase()}`}>{contact.status}</span></td>
                <td className="contact-value">{contact.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
