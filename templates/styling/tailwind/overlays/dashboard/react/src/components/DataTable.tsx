interface Order {
  id: string;
  customer: string;
  email: string;
  amount: string;
  status: 'Completed' | 'Processing' | 'Cancelled';
}

const rows: Order[] = [
  { id: '#3210', customer: 'Olivia Martin', email: 'olivia@email.com', amount: '$42.00', status: 'Completed' },
  { id: '#3209', customer: 'Ava Johnson', email: 'ava@email.com', amount: '$74.99', status: 'Processing' },
  { id: '#3208', customer: 'Michael Brown', email: 'michael@email.com', amount: '$64.00', status: 'Completed' },
  { id: '#3207', customer: 'Lisa Anderson', email: 'lisa@email.com', amount: '$49.99', status: 'Cancelled' },
  { id: '#3206', customer: 'Thomas Wilson', email: 'thomas@email.com', amount: '$120.00', status: 'Completed' },
];

const statusClasses: Record<string, string> = {
  completed: 'bg-emerald-100 text-emerald-800',
  processing: 'bg-blue-100 text-blue-800',
  cancelled: 'bg-red-100 text-red-800',
};

export function DataTable() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="flex justify-between items-center px-4 lg:px-6 py-4 lg:py-5">
        <h3 className="text-lg font-semibold text-gray-900">Recent Orders</h3>
        <button className="border border-gray-300 px-3 lg:px-4 py-1.5 rounded-md text-sm text-gray-700 hover:bg-gray-50 transition-colors">
          View All
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="text-left px-4 lg:px-6 py-3 text-xs text-gray-500 uppercase tracking-wider border-t border-gray-200 bg-gray-50 font-medium">Order</th>
              <th className="text-left px-4 lg:px-6 py-3 text-xs text-gray-500 uppercase tracking-wider border-t border-gray-200 bg-gray-50 font-medium">Customer</th>
              <th className="text-left px-4 lg:px-6 py-3 text-xs text-gray-500 uppercase tracking-wider border-t border-gray-200 bg-gray-50 font-medium">Email</th>
              <th className="text-left px-4 lg:px-6 py-3 text-xs text-gray-500 uppercase tracking-wider border-t border-gray-200 bg-gray-50 font-medium">Amount</th>
              <th className="text-left px-4 lg:px-6 py-3 text-xs text-gray-500 uppercase tracking-wider border-t border-gray-200 bg-gray-50 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i}>
                <td className="px-4 lg:px-6 py-3 border-t border-gray-100 text-sm text-gray-700">{row.id}</td>
                <td className="px-4 lg:px-6 py-3 border-t border-gray-100 text-sm text-gray-700">{row.customer}</td>
                <td className="px-4 lg:px-6 py-3 border-t border-gray-100 text-sm text-gray-700">{row.email}</td>
                <td className="px-4 lg:px-6 py-3 border-t border-gray-100 text-sm text-gray-700">{row.amount}</td>
                <td className="px-4 lg:px-6 py-3 border-t border-gray-100 text-sm">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${statusClasses[row.status.toLowerCase()]}`}>
                    {row.status}
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
