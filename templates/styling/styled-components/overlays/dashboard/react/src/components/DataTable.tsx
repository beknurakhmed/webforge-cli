import styled from 'styled-components';

const TableCard = styled.div`
  background: white;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  overflow: hidden;
`;

const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1.5rem;

  h3 {
    margin: 0;
    font-size: 1.1rem;
    color: #111827;
  }
`;

const TableButton = styled.button`
  background: none;
  border: 1px solid #d1d5db;
  padding: 0.4rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.85rem;
  color: #374151;

  &:hover {
    background: #f9fafb;
  }
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th {
    text-align: left;
    padding: 0.75rem 1.5rem;
    font-size: 0.8rem;
    color: #6b7280;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border-top: 1px solid #e5e7eb;
    background: #f9fafb;
  }

  td {
    padding: 0.75rem 1.5rem;
    border-top: 1px solid #f3f4f6;
    font-size: 0.9rem;
    color: #374151;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;

    th, td {
      padding: 0.5rem 0.75rem;
    }
  }
`;

const StatusBadge = styled.span<{ $status: string }>`
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  background: ${props => {
    switch (props.$status) {
      case 'completed': return '#d1fae5';
      case 'processing': return '#dbeafe';
      case 'cancelled': return '#fee2e2';
      default: return '#f3f4f6';
    }
  }};
  color: ${props => {
    switch (props.$status) {
      case 'completed': return '#065f46';
      case 'processing': return '#1e40af';
      case 'cancelled': return '#991b1b';
      default: return '#374151';
    }
  }};
`;

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
    <TableCard>
      <TableHeader>
        <h3>Recent Orders</h3>
        <TableButton>View All</TableButton>
      </TableHeader>
      <StyledTable>
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
                <StatusBadge $status={row.status.toLowerCase()}>
                  {row.status}
                </StatusBadge>
              </td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </TableCard>
  );
}
