import { KPICards } from '../components/KPICards';
import { ChartPlaceholder } from '../components/ChartPlaceholder';
import { DataTable } from '../components/DataTable';

export function Overview() {
  return (
    <div className="page-overview">
      <div className="page-header">
        <h1>Dashboard</h1>
        <div className="header-actions">
          <input type="text" placeholder="Search..." className="search-input" />
          <div className="user-avatar">B</div>
        </div>
      </div>
      <KPICards />
      <div className="dashboard-grid">
        <ChartPlaceholder title="Revenue Overview" />
        <ChartPlaceholder title="User Growth" />
      </div>
      <DataTable />
    </div>
  );
}
