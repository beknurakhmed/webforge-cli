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
    <div className="page">
      <div className="page-header">
        <h1>Dashboard</h1>
        <p>Welcome back! Here is your sales overview.</p>
      </div>

      <StatsCards />

      <div className="dashboard-grid">
        <ContactsTable limit={4} />

        <div className="activity-card">
          <h3 className="activity-title">Recent Activity</h3>
          <div className="activity-list">
            {recentActivities.map((activity, i) => (
              <div key={i} className="activity-item">
                <span className="activity-icon">{activity.icon}</span>
                <div className="activity-info">
                  <p className="activity-action">{activity.action}</p>
                  <p className="activity-detail">{activity.detail}</p>
                  <p className="activity-time">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
