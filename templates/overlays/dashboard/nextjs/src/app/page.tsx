import { KPICards } from './components/KPICards';
import { ChartPlaceholder } from './components/ChartPlaceholder';
import { DataTable } from './components/DataTable';

export default function OverviewPage() {
  return (
    <div className="page">
      <div className="page-header">
        <h1>Overview</h1>
        <p>Welcome back! Here is what is happening with your business.</p>
      </div>
      <KPICards />
      <div className="charts-grid">
        <ChartPlaceholder title="Revenue Over Time" type="bar" />
        <ChartPlaceholder title="Growth Trend" type="line" />
      </div>
      <DataTable title="Recent Orders" limit={5} />
    </div>
  );
}
