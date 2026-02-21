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

interface DataTableProps {
  title?: string;
  limit?: number;
}

export function DataTable({ title = 'Recent Orders', limit }: DataTableProps) {
  const displayOrders = limit ? orders.slice(0, limit) : orders;

  return (
    <div className="table-card">
      <h3 className="table-title">{title}</h3>
      <div className="table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Product</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {displayOrders.map((order) => (
              <tr key={order.id}>
                <td className="order-id">{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.product}</td>
                <td className="amount">{order.amount}</td>
                <td><span className={`status-badge ${order.status.toLowerCase()}`}>{order.status}</span></td>
                <td className="date">{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
