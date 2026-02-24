'use client';

import { Box, Heading, Badge, Table, Text } from '@chakra-ui/react';

interface Order { id: string; customer: string; product: string; amount: string; status: 'Completed' | 'Pending' | 'Processing' | 'Cancelled'; date: string; }

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

const statusColors: Record<string, { bg: string; color: string }> = {
  Completed: { bg: '#d1fae5', color: '#065f46' }, Pending: { bg: '#fef3c7', color: '#92400e' },
  Processing: { bg: '#dbeafe', color: '#1e40af' }, Cancelled: { bg: '#fee2e2', color: '#991b1b' },
};

interface DataTableProps { title?: string; limit?: number; }

export function DataTable({ title = 'Recent Orders', limit }: DataTableProps) {
  const displayOrders = limit ? orders.slice(0, limit) : orders;
  return (
    <Box bg="white" borderRadius="xl" border="1px solid" borderColor="gray.200" overflow="hidden">
      <Heading as="h3" size="sm" p={6} color="gray.900">{title}</Heading>
      <Table.Root size="sm">
        <Table.Header>
          <Table.Row bg="gray.50">
            <Table.ColumnHeader px={6} py={3} fontSize="0.8rem" color="gray.500" textTransform="uppercase">Order ID</Table.ColumnHeader>
            <Table.ColumnHeader px={6} py={3} fontSize="0.8rem" color="gray.500" textTransform="uppercase">Customer</Table.ColumnHeader>
            <Table.ColumnHeader px={6} py={3} fontSize="0.8rem" color="gray.500" textTransform="uppercase">Product</Table.ColumnHeader>
            <Table.ColumnHeader px={6} py={3} fontSize="0.8rem" color="gray.500" textTransform="uppercase">Amount</Table.ColumnHeader>
            <Table.ColumnHeader px={6} py={3} fontSize="0.8rem" color="gray.500" textTransform="uppercase">Status</Table.ColumnHeader>
            <Table.ColumnHeader px={6} py={3} fontSize="0.8rem" color="gray.500" textTransform="uppercase">Date</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {displayOrders.map((order) => (
            <Table.Row key={order.id}>
              <Table.Cell px={6} py={3} fontWeight={600} color="#4f46e5" fontSize="0.9rem">{order.id}</Table.Cell>
              <Table.Cell px={6} py={3} fontSize="0.9rem" color="gray.700">{order.customer}</Table.Cell>
              <Table.Cell px={6} py={3} fontSize="0.9rem" color="gray.700">{order.product}</Table.Cell>
              <Table.Cell px={6} py={3} fontWeight={600} fontSize="0.9rem">{order.amount}</Table.Cell>
              <Table.Cell px={6} py={3}><Badge px={3} py={1} borderRadius="full" fontSize="0.75rem" bg={statusColors[order.status].bg} color={statusColors[order.status].color}>{order.status}</Badge></Table.Cell>
              <Table.Cell px={6} py={3} fontSize="0.85rem" color="gray.500">{order.date}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Box>
  );
}
