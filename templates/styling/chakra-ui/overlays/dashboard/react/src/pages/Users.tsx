import { Box, Flex, Heading, Button, Badge, Table, Text, HStack } from '@chakra-ui/react';

interface User {
  avatar: string;
  name: string;
  email: string;
  role: string;
  status: 'Active' | 'Inactive';
}

const users: User[] = [
  { avatar: '👩', name: 'Sarah Chen', email: 'sarah@email.com', role: 'Admin', status: 'Active' },
  { avatar: '👨', name: 'James Miller', email: 'james@email.com', role: 'Editor', status: 'Active' },
  { avatar: '👩', name: 'Emily Davis', email: 'emily@email.com', role: 'Viewer', status: 'Inactive' },
  { avatar: '👨', name: 'Robert Wilson', email: 'robert@email.com', role: 'Editor', status: 'Active' },
  { avatar: '👩', name: 'Maria Garcia', email: 'maria@email.com', role: 'Admin', status: 'Active' },
  { avatar: '👨', name: 'David Lee', email: 'david@email.com', role: 'Viewer', status: 'Inactive' },
  { avatar: '👩', name: 'Anna Taylor', email: 'anna@email.com', role: 'Editor', status: 'Active' },
];

const statusColors: Record<string, { bg: string; color: string }> = {
  Active: { bg: '#d1fae5', color: '#065f46' },
  Inactive: { bg: '#fee2e2', color: '#991b1b' },
};

export function Users() {
  return (
    <Box>
      <Flex justify="space-between" align="center" mb={6}>
        <Heading as="h1" size="xl" color="gray.900">
          Users
        </Heading>
        <Button bg="#4f46e5" color="white" borderRadius="lg" fontWeight={600} fontSize="0.9rem" px={5} _hover={{ bg: '#4338ca' }}>
          Add User
        </Button>
      </Flex>
      <Box bg="white" borderRadius="xl" border="1px solid" borderColor="gray.200" overflow="hidden">
        <Table.Root size="sm">
          <Table.Header>
            <Table.Row bg="gray.50">
              <Table.ColumnHeader px={6} py={3} fontSize="0.8rem" color="gray.500" textTransform="uppercase" letterSpacing="0.05em">User</Table.ColumnHeader>
              <Table.ColumnHeader px={6} py={3} fontSize="0.8rem" color="gray.500" textTransform="uppercase" letterSpacing="0.05em">Email</Table.ColumnHeader>
              <Table.ColumnHeader px={6} py={3} fontSize="0.8rem" color="gray.500" textTransform="uppercase" letterSpacing="0.05em">Role</Table.ColumnHeader>
              <Table.ColumnHeader px={6} py={3} fontSize="0.8rem" color="gray.500" textTransform="uppercase" letterSpacing="0.05em">Status</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {users.map((user, i) => (
              <Table.Row key={i}>
                <Table.Cell px={6} py={3}>
                  <HStack gap={3}>
                    <Text fontSize="1.5rem">{user.avatar}</Text>
                    <Text fontSize="0.9rem" color="gray.700">{user.name}</Text>
                  </HStack>
                </Table.Cell>
                <Table.Cell px={6} py={3} fontSize="0.9rem" color="gray.700">{user.email}</Table.Cell>
                <Table.Cell px={6} py={3}>
                  <Badge px={2} py={0.5} borderRadius="md" fontSize="0.75rem" fontWeight={500} bg="#ede9fe" color="#4f46e5">
                    {user.role}
                  </Badge>
                </Table.Cell>
                <Table.Cell px={6} py={3}>
                  <Badge
                    px={3}
                    py={1}
                    borderRadius="full"
                    fontSize="0.75rem"
                    fontWeight={500}
                    bg={statusColors[user.status].bg}
                    color={statusColors[user.status].color}
                  >
                    {user.status}
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
