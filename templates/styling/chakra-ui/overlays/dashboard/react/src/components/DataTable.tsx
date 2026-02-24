import { Box, Flex, Heading, Button, Table, Badge } from '@chakra-ui/react';

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

const statusColors: Record<string, { bg: string; color: string }> = {
  Completed: { bg: '#d1fae5', color: '#065f46' },
  Processing: { bg: '#dbeafe', color: '#1e40af' },
  Cancelled: { bg: '#fee2e2', color: '#991b1b' },
};

export function DataTable() {
  return (
    <Box bg="white" borderRadius="xl" border="1px solid" borderColor="gray.200" overflow="hidden">
      <Flex justify="space-between" align="center" px={6} py={5}>
        <Heading as="h3" size="sm" color="gray.900">Recent Orders</Heading>
        <Button variant="outline" size="sm" borderColor="gray.300" color="gray.700" fontSize="0.85rem">
          View All
        </Button>
      </Flex>
      <Table.Root size="sm">
        <Table.Header>
          <Table.Row bg="gray.50">
            <Table.ColumnHeader px={6} py={3} fontSize="0.8rem" color="gray.500" textTransform="uppercase" letterSpacing="0.05em">Order</Table.ColumnHeader>
            <Table.ColumnHeader px={6} py={3} fontSize="0.8rem" color="gray.500" textTransform="uppercase" letterSpacing="0.05em">Customer</Table.ColumnHeader>
            <Table.ColumnHeader px={6} py={3} fontSize="0.8rem" color="gray.500" textTransform="uppercase" letterSpacing="0.05em">Email</Table.ColumnHeader>
            <Table.ColumnHeader px={6} py={3} fontSize="0.8rem" color="gray.500" textTransform="uppercase" letterSpacing="0.05em">Amount</Table.ColumnHeader>
            <Table.ColumnHeader px={6} py={3} fontSize="0.8rem" color="gray.500" textTransform="uppercase" letterSpacing="0.05em">Status</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {rows.map((row, i) => (
            <Table.Row key={i}>
              <Table.Cell px={6} py={3} fontSize="0.9rem" color="gray.700">{row.id}</Table.Cell>
              <Table.Cell px={6} py={3} fontSize="0.9rem" color="gray.700">{row.customer}</Table.Cell>
              <Table.Cell px={6} py={3} fontSize="0.9rem" color="gray.700">{row.email}</Table.Cell>
              <Table.Cell px={6} py={3} fontSize="0.9rem" color="gray.700">{row.amount}</Table.Cell>
              <Table.Cell px={6} py={3}>
                <Badge
                  px={3}
                  py={1}
                  borderRadius="full"
                  fontSize="0.75rem"
                  fontWeight={500}
                  bg={statusColors[row.status].bg}
                  color={statusColors[row.status].color}
                >
                  {row.status}
                </Badge>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Box>
  );
}
