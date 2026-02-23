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

const statusStyles: Record<string, string> = {
  customer: 'bg-green-100 text-green-700',
  prospect: 'bg-blue-100 text-blue-700',
  lead: 'bg-yellow-100 text-yellow-700',
  inactive: 'bg-gray-100 text-gray-500',
};

interface ContactsTableProps {
  limit?: number;
  showSearch?: boolean;
}

export function ContactsTable({ limit, showSearch = false }: ContactsTableProps) {
  const displayContacts = limit ? contacts.slice(0, limit) : contacts;

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="flex justify-between items-center px-6 py-5">
        <h3 className="text-base font-semibold text-gray-900">{showSearch ? 'All Contacts' : 'Recent Contacts'}</h3>
        {showSearch && <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{contacts.length} contacts</span>}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-200 bg-gray-100">Name</th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-200 bg-gray-100">Company</th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-200 bg-gray-100">Email</th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-200 bg-gray-100">Status</th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-200 bg-gray-100">Value</th>
            </tr>
          </thead>
          <tbody>
            {displayContacts.map((contact) => (
              <tr key={contact.id} className="hover:bg-gray-50">
                <td className="px-6 py-3.5 text-sm border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{contact.avatar}</span>
                    <div>
                      <p className="font-semibold text-gray-900">{contact.name}</p>
                      <p className="text-xs text-gray-500">{contact.phone}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-3.5 text-sm border-b border-gray-200">{contact.company}</td>
                <td className="px-6 py-3.5 text-sm border-b border-gray-200 text-indigo-600">{contact.email}</td>
                <td className="px-6 py-3.5 text-sm border-b border-gray-200"><span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusStyles[contact.status.toLowerCase()]}`}>{contact.status}</span></td>
                <td className="px-6 py-3.5 text-sm border-b border-gray-200 font-bold text-gray-900">{contact.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
