import type { Contact } from '../data/contacts';

interface ContactsTableProps {
  contacts: Contact[];
}

const statusStyles: Record<string, string> = {
  lead: 'bg-amber-100 text-amber-800',
  prospect: 'bg-blue-100 text-blue-800',
  customer: 'bg-emerald-100 text-emerald-800',
  churned: 'bg-red-100 text-red-800',
};

function ContactsTable({ contacts }: ContactsTableProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="text-left px-5 py-3 text-xs text-gray-500 uppercase tracking-wider bg-gray-50 border-b border-gray-200">Name</th>
            <th className="text-left px-5 py-3 text-xs text-gray-500 uppercase tracking-wider bg-gray-50 border-b border-gray-200">Email</th>
            <th className="text-left px-5 py-3 text-xs text-gray-500 uppercase tracking-wider bg-gray-50 border-b border-gray-200">Company</th>
            <th className="text-left px-5 py-3 text-xs text-gray-500 uppercase tracking-wider bg-gray-50 border-b border-gray-200">Status</th>
            <th className="text-left px-5 py-3 text-xs text-gray-500 uppercase tracking-wider bg-gray-50 border-b border-gray-200">Phone</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((c) => (
            <tr key={c.id}>
              <td className="px-5 py-3 border-b border-gray-100 text-sm font-semibold text-gray-900">{c.name}</td>
              <td className="px-5 py-3 border-b border-gray-100 text-sm text-gray-500">{c.email}</td>
              <td className="px-5 py-3 border-b border-gray-100 text-sm">{c.company}</td>
              <td className="px-5 py-3 border-b border-gray-100 text-sm">
                <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium ${statusStyles[c.status.toLowerCase()] || ''}`}>
                  {c.status}
                </span>
              </td>
              <td className="px-5 py-3 border-b border-gray-100 text-sm text-gray-700">{c.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContactsTable;
