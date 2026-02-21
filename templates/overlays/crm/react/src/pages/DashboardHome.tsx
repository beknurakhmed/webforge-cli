import StatsCards from '../components/StatsCards';
import { contacts } from '../data/contacts';

function DashboardHome() {
  const recentContacts = contacts.slice(0, 5);

  return (
    <div>
      <header className="crm-header">
        <h1>Dashboard</h1>
      </header>
      <StatsCards />
      <h2 className="section-title">Recent Contacts</h2>
      <div className="table-card">
        <table className="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Company</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {recentContacts.map((c) => (
              <tr key={c.id}>
                <td className="contact-name">{c.name}</td>
                <td className="contact-email">{c.email}</td>
                <td>{c.company}</td>
                <td>
                  <span className={`status-badge status-${c.status.toLowerCase()}`}>
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
