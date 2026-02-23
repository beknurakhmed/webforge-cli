interface Order {
  id: string;
  customer: string;
  product: string;
  amount: string;
  status: 'Completed' | 'Pending' | 'Processing' | 'Cancelled';
  date: string;
}

const orders: Order[] = [
  { id: 'ORD-001', customer: 'Alice Johnson', product: 'Wireless Headphones', amount: '$79.99', status: 'Completed', date: '2025-01-15' },
  { id: 'ORD-002', customer: 'Bob Smith', product: 'Smart Watch', amount: '$199.99', status: 'Processing', date: '2025-01-15' },
  { id: 'ORD-003', customer: 'Carol Davis', product: 'Running Shoes', amount: '$129.99', status: 'Pending', date: '2025-01-14' },
  { id: 'ORD-004', customer: 'David Wilson', product: 'Backpack', amount: '$59.99', status: 'Completed', date: '2025-01-14' },
  { id: 'ORD-005', customer: 'Eva Martinez', product: 'Coffee Maker', amount: '$89.99', status: 'Cancelled', date: '2025-01-13' },
  { id: 'ORD-006', customer: 'Frank Brown', product: 'Desk Lamp', amount: '$45.99', status: 'Completed', date: '2025-01-13' },
  { id: 'ORD-007', customer: 'Grace Lee', product: 'Yoga Mat', amount: '$34.99', status: 'Processing', date: '2025-01-12' },
  { id: 'ORD-008', customer: 'Henry Taylor', product: 'Sunglasses', amount: '$149.99', status: 'Completed', date: '2025-01-12' },
];

const statusStyles: Record<string, string> = {
  completed: 'bg-green-100 text-green-700',
  pending: 'bg-yellow-100 text-yellow-700',
  processing: 'bg-blue-100 text-blue-700',
  cancelled: 'bg-red-100 text-red-700',
};

interface DataTableProps {
  title?: string;
  limit?: number;
}

export function DataTable({ title = 'Recent Orders', limit }: DataTableProps) {
  const displayOrders = limit ? orders.slice(0, limit) : orders;

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
      <h3 className="text-base font-semibold text-gray-900 px-6 pt-5 mb-4">{title}</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-200 bg-gray-100">Order ID</th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-200 bg-gray-100">Customer</th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-200 bg-gray-100">Product</th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-200 bg-gray-100">Amount</th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-200 bg-gray-100">Status</th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-200 bg-gray-100">Date</th>
            </tr>
          </thead>
          <tbody>
            {displayOrders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="px-6 py-3.5 text-sm border-b border-gray-200 font-semibold text-indigo-600">{order.id}</td>
                <td className="px-6 py-3.5 text-sm border-b border-gray-200">{order.customer}</td>
                <td className="px-6 py-3.5 text-sm border-b border-gray-200">{order.product}</td>
                <td className="px-6 py-3.5 text-sm border-b border-gray-200 font-semibold">{order.amount}</td>
                <td className="px-6 py-3.5 text-sm border-b border-gray-200"><span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusStyles[order.status.toLowerCase()]}`}>{order.status}</span></td>
                <td className="px-6 py-3.5 text-sm border-b border-gray-200 text-gray-500">{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
