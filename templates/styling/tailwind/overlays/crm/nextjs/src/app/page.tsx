import { StatsCards } from './components/StatsCards';
import { ContactsTable } from './components/ContactsTable';

const recentActivities = [
  { action: 'New deal created', detail: 'TechCorp Inc. - Enterprise Plan', time: '2 hours ago', icon: '💼' },
  { action: 'Contact updated', detail: 'Sarah Chen - Status changed to Customer', time: '4 hours ago', icon: '👤' },
  { action: 'Deal closed', detail: 'GlobalNet Ltd. - Premium Package', time: '1 day ago', icon: '🎉' },
  { action: 'New contact added', detail: 'Emily Brown - StartupXYZ', time: '1 day ago', icon: '➕' },
  { action: 'Meeting scheduled', detail: 'James Wilson - Product Demo', time: '2 days ago', icon: '📅' },
];

export default function CRMDashboard() {
  return (
    <div className="max-w-7xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 mt-1">Welcome back! Here is your sales overview.</p>
      </div>

      <StatsCards />

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
        <ContactsTable limit={4} />

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-base font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="flex flex-col gap-4">
            {recentActivities.map((activity, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-xl flex-shrink-0">{activity.icon}</span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{activity.action}</p>
                  <p className="text-xs text-gray-700">{activity.detail}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
