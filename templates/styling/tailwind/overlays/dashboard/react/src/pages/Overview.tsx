import { KPICards } from '../components/KPICards';
import { ChartPlaceholder } from '../components/ChartPlaceholder';
import { DataTable } from '../components/DataTable';

export function Overview() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-6 lg:mb-8">
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Dashboard</h1>
        <div className="flex items-center gap-3 lg:gap-4">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 lg:px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10"
          />
          <div className="w-9 h-9 bg-indigo-600 text-white rounded-full flex items-center justify-center font-semibold text-sm shrink-0">
            B
          </div>
        </div>
      </div>
      <KPICards />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mb-6 lg:mb-8">
        <ChartPlaceholder title="Revenue Overview" />
        <ChartPlaceholder title="User Growth" />
      </div>
      <DataTable />
    </div>
  );
}
