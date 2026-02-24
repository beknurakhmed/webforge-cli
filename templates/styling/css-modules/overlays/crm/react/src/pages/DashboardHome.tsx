import StatsCards from '../components/StatsCards';
import { contacts } from '../data/contacts';
import styles from './DashboardHome.module.css';

const statusStyles: Record<string, string> = {
  Lead: styles.statusLead,
  Prospect: styles.statusProspect,
  Customer: styles.statusCustomer,
  Churned: styles.statusChurned,
};

function DashboardHome() {
  const recentContacts = contacts.slice(0, 5);

  return (
    <div>
      <header className={styles.crmHeader}>
        <h1>Dashboard</h1>
      </header>
      <StatsCards />
      <h2 className={styles.sectionTitle}>Recent Contacts</h2>
      <div className={styles.tableCard}>
        <table className={styles.dataTable}>
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
                <td className={styles.contactName}>{c.name}</td>
                <td className={styles.contactEmail}>{c.email}</td>
                <td>{c.company}</td>
                <td>
                  <span className={statusStyles[c.status]}>
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
