import { KPICards } from './components/KPICards';
import { ChartPlaceholder } from './components/ChartPlaceholder';
import { DataTable } from './components/DataTable';

export default function OverviewPage() {
  return (
    <div className="max-w-7xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Overview</h1>
        <p className="text-gray-500 mt-1">Welcome back! Here is what is happening with your business.</p>
      </div>
      <KPICards />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-8">
        <ChartPlaceholder title="Revenue Over Time" type="bar" />
        <ChartPlaceholder title="Growth Trend" type="line" />
      </div>
      <DataTable title="Recent Orders" limit={5} />
    </div>
  );
}
