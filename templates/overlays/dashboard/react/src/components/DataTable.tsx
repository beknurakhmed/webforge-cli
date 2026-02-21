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

export function DataTable() {
  return (
    <div className="table-card">
      <div className="table-header">
        <h3>Recent Orders</h3>
        <button className="table-btn">View All</button>
      </div>
      <table className="data-table">
        <thead>
          <tr>
            <th>Order</th>
            <th>Customer</th>
            <th>Email</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              <td>{row.id}</td>
              <td>{row.customer}</td>
              <td>{row.email}</td>
              <td>{row.amount}</td>
              <td>
                <span className={`status-badge status-${row.status.toLowerCase()}`}>
                  {row.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
