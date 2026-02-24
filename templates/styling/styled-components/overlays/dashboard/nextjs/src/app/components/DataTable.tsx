'use client';

import styled from 'styled-components';

const TableCard = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  margin-bottom: 2rem;
`;

const TableTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #111827;
  padding: 1.25rem 1.5rem 0;
  margin-bottom: 1rem;
`;

const TableWrapper = styled.div`
  overflow-x: auto;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th {
    text-align: left;
    padding: 0.75rem 1.5rem;
    font-size: 0.75rem;
    font-weight: 600;
    color: #6b7280;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border-bottom: 1px solid #e5e7eb;
    background: #f3f4f6;
  }

  td {
    padding: 0.875rem 1.5rem;
    font-size: 0.9rem;
    border-bottom: 1px solid #e5e7eb;
  }

  tbody tr:hover {
    background: #f9fafb;
  }
`;

const OrderId = styled.td`
  font-weight: 600;
  color: #4f46e5;
`;

const Amount = styled.td`
  font-weight: 600;
`;

const DateCell = styled.td`
  color: #6b7280;
`;

const StatusBadge = styled.span<{ $status: string }>`
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  background: ${props => {
    switch (props.$status) {
      case 'completed': return '#d1fae5';
      case 'pending': return '#fef3c7';
      case 'processing': return '#dbeafe';
      case 'cancelled': return '#fee2e2';
      default: return '#f3f4f6';
    }
  }};
  color: ${props => {
    switch (props.$status) {
      case 'completed': return '#059669';
      case 'pending': return '#d97706';
      case 'processing': return '#2563eb';
      case 'cancelled': return '#dc2626';
      default: return '#6b7280';
    }
  }};
`;

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
    <TableCard>
      <TableTitle>{title}</TableTitle>
      <TableWrapper>
        <StyledTable>
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
                <OrderId>{order.id}</OrderId>
                <td>{order.customer}</td>
                <td>{order.product}</td>
                <Amount>{order.amount}</Amount>
                <td><StatusBadge $status={order.status.toLowerCase()}>{order.status}</StatusBadge></td>
                <DateCell>{order.date}</DateCell>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </TableWrapper>
    </TableCard>
  );
}
