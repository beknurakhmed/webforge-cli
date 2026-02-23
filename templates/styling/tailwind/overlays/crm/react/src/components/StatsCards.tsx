import { contacts } from '../data/contacts';

const stats = [
  { label: 'Total Contacts', value: contacts.length, color: 'bg-indigo-600' },
  { label: 'Leads', value: contacts.filter((c) => c.status === 'Lead').length, color: 'bg-amber-500' },
  { label: 'Customers', value: contacts.filter((c) => c.status === 'Customer').length, color: 'bg-emerald-500' },
  { label: 'Churned', value: contacts.filter((c) => c.status === 'Churned').length, color: 'bg-red-500' },
];

function StatsCards() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {stats.map((stat, i) => (
        <div key={i} className="bg-white rounded-xl p-5 border border-gray-200 relative overflow-hidden">
          <div className={`absolute top-0 left-0 w-1 h-full ${stat.color}`} />
          <span className="text-xs text-gray-500">{stat.label}</span>
          <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
        </div>
      ))}
    </div>
  );
}

export default StatsCards;
