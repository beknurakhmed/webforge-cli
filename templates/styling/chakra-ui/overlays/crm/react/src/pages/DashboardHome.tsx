import { Box, Heading, Badge, Table, Text } from '@chakra-ui/react';
import StatsCards from '../components/StatsCards';
import { contacts } from '../data/contacts';

const statusColors: Record<string, { bg: string; color: string }> = {
  Lead: { bg: '#fef3c7', color: '#92400e' },
  Prospect: { bg: '#dbeafe', color: '#1e40af' },
  Customer: { bg: '#d1fae5', color: '#065f46' },
  Churned: { bg: '#fee2e2', color: '#991b1b' },
};

function DashboardHome() {
  const recentContacts = contacts.slice(0, 5);

  return (
    <Box>
      <Heading as="h1" size="xl" color="gray.900" mb={6}>
        Dashboard
      </Heading>
      <StatsCards />
      <Heading as="h2" size="md" fontWeight={600} color="gray.900" mt={6} mb={4}>
        Recent Contacts
      </Heading>
      <Box bg="white" borderRadius="xl" border="1px solid" borderColor="gray.200" overflow="hidden">
        <Table.Root size="sm">
          <Table.Header>
            <Table.Row bg="gray.50">
              <Table.ColumnHeader px={5} py={3} fontSize="0.8rem" color="gray.500" textTransform="uppercase" letterSpacing="0.05em">Name</Table.ColumnHeader>
              <Table.ColumnHeader px={5} py={3} fontSize="0.8rem" color="gray.500" textTransform="uppercase" letterSpacing="0.05em">Email</Table.ColumnHeader>
              <Table.ColumnHeader px={5} py={3} fontSize="0.8rem" color="gray.500" textTransform="uppercase" letterSpacing="0.05em">Company</Table.ColumnHeader>
              <Table.ColumnHeader px={5} py={3} fontSize="0.8rem" color="gray.500" textTransform="uppercase" letterSpacing="0.05em">Status</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {recentContacts.map((c) => (
              <Table.Row key={c.id}>
                <Table.Cell px={5} py={3} fontWeight={600} color="gray.900" fontSize="0.9rem">{c.name}</Table.Cell>
                <Table.Cell px={5} py={3} color="gray.500" fontSize="0.9rem">{c.email}</Table.Cell>
                <Table.Cell px={5} py={3} fontSize="0.9rem" color="gray.700">{c.company}</Table.Cell>
                <Table.Cell px={5} py={3}>
                  <Badge
                    px={2}
                    py={0.5}
                    borderRadius="full"
                    fontSize="0.75rem"
                    fontWeight={500}
                    bg={statusColors[c.status]?.bg}
                    color={statusColors[c.status]?.color}
                  >
                    {c.status}
                  </Badge>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Box>
    </Box>
  );
}

export default DashboardHome;
