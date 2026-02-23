import StatsCards from '../components/StatsCards';
import { contacts } from '../data/contacts';

const statusStyles: Record<string, string> = {
  lead: 'bg-amber-100 text-amber-800',
  prospect: 'bg-blue-100 text-blue-800',
  customer: 'bg-emerald-100 text-emerald-800',
  churned: 'bg-red-100 text-red-800',
};

function DashboardHome() {
  const recentContacts = contacts.slice(0, 5);

  return (
    <div>
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
      </header>
      <StatsCards />
      <h2 className="text-lg font-semibold text-gray-900 mt-6 mb-4">Recent Contacts</h2>
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="text-left px-5 py-3 text-xs text-gray-500 uppercase tracking-wider bg-gray-50 border-b border-gray-200">Name</th>
              <th className="text-left px-5 py-3 text-xs text-gray-500 uppercase tracking-wider bg-gray-50 border-b border-gray-200">Email</th>
              <th className="text-left px-5 py-3 text-xs text-gray-500 uppercase tracking-wider bg-gray-50 border-b border-gray-200">Company</th>
              <th className="text-left px-5 py-3 text-xs text-gray-500 uppercase tracking-wider bg-gray-50 border-b border-gray-200">Status</th>
            </tr>
          </thead>
          <tbody>
            {recentContacts.map((c) => (
              <tr key={c.id}>
                <td className="px-5 py-3 border-b border-gray-100 text-sm font-semibold text-gray-900">{c.name}</td>
                <td className="px-5 py-3 border-b border-gray-100 text-sm text-gray-500">{c.email}</td>
                <td className="px-5 py-3 border-b border-gray-100 text-sm">{c.company}</td>
                <td className="px-5 py-3 border-b border-gray-100 text-sm">
                  <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium ${statusStyles[c.status.toLowerCase()] || ''}`}>
                    {c.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DashboardHome;
