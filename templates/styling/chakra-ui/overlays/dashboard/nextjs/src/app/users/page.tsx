'use client';

import { useState } from 'react';
import { Box, Heading, Text, Input, Flex, Button, Badge, Table, HStack } from '@chakra-ui/react';

interface User { id: number; name: string; email: string; role: string; status: 'Active' | 'Inactive'; joined: string; avatar: string; }
const users: User[] = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', status: 'Active', joined: '2024-06-15', avatar: '👩' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Editor', status: 'Active', joined: '2024-07-22', avatar: '👨' },
  { id: 3, name: 'Carol Davis', email: 'carol@example.com', role: 'Viewer', status: 'Active', joined: '2024-08-10', avatar: '👩' },
  { id: 4, name: 'David Wilson', email: 'david@example.com', role: 'Editor', status: 'Inactive', joined: '2024-09-05', avatar: '👨' },
  { id: 5, name: 'Eva Martinez', email: 'eva@example.com', role: 'Admin', status: 'Active', joined: '2024-10-18', avatar: '👩' },
  { id: 6, name: 'Frank Brown', email: 'frank@example.com', role: 'Viewer', status: 'Active', joined: '2024-11-02', avatar: '👨' },
  { id: 7, name: 'Grace Lee', email: 'grace@example.com', role: 'Editor', status: 'Inactive', joined: '2024-11-20', avatar: '👩' },
  { id: 8, name: 'Henry Taylor', email: 'henry@example.com', role: 'Viewer', status: 'Active', joined: '2025-01-08', avatar: '👨' },
];

const statusColors: Record<string, { bg: string; color: string }> = { Active: { bg: '#d1fae5', color: '#065f46' }, Inactive: { bg: '#fee2e2', color: '#991b1b' } };

export default function UsersPage() {
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('All');
  const filtered = users.filter((u) => {
    const matchesSearch = u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase());
    return matchesSearch && (roleFilter === 'All' || u.role === roleFilter);
  });

  return (
    <Box>
      <Box mb={6}><Heading as="h1" size="xl" color="gray.900" mb={1}>Users</Heading><Text color="gray.500">Manage your team members and their permissions.</Text></Box>
      <Box bg="white" borderRadius="xl" border="1px solid" borderColor="gray.200" overflow="hidden">
        <Flex p={6} gap={4} flexWrap="wrap" justify="space-between" align="center">
          <Flex align="center" gap={2} bg="gray.50" px={4} py={2} borderRadius="lg" border="1px solid" borderColor="gray.200">
            <Text>🔍</Text>
            <Input border="none" placeholder="Search users..." value={search} onChange={(e) => setSearch(e.target.value)} _focus={{ boxShadow: 'none' }} />
          </Flex>
          <HStack gap={2}>
            {['All', 'Admin', 'Editor', 'Viewer'].map((role) => (
              <Button key={role} size="sm" bg={roleFilter === role ? '#4f46e5' : 'white'} color={roleFilter === role ? 'white' : 'gray.500'} border="1px solid" borderColor={roleFilter === role ? '#4f46e5' : 'gray.200'} borderRadius="full" onClick={() => setRoleFilter(role)} _hover={{ borderColor: '#4f46e5' }}>{role}</Button>
            ))}
          </HStack>
        </Flex>
        <Table.Root size="sm">
          <Table.Header><Table.Row bg="gray.50">
            <Table.ColumnHeader px={6} py={3} fontSize="0.8rem" color="gray.500" textTransform="uppercase">User</Table.ColumnHeader>
            <Table.ColumnHeader px={6} py={3} fontSize="0.8rem" color="gray.500" textTransform="uppercase">Email</Table.ColumnHeader>
            <Table.ColumnHeader px={6} py={3} fontSize="0.8rem" color="gray.500" textTransform="uppercase">Role</Table.ColumnHeader>
            <Table.ColumnHeader px={6} py={3} fontSize="0.8rem" color="gray.500" textTransform="uppercase">Status</Table.ColumnHeader>
            <Table.ColumnHeader px={6} py={3} fontSize="0.8rem" color="gray.500" textTransform="uppercase">Joined</Table.ColumnHeader>
          </Table.Row></Table.Header>
          <Table.Body>
            {filtered.map((user) => (
              <Table.Row key={user.id}>
                <Table.Cell px={6} py={3}><HStack gap={3}><Text fontSize="1.5rem">{user.avatar}</Text><Text fontWeight={500}>{user.name}</Text></HStack></Table.Cell>
                <Table.Cell px={6} py={3} fontSize="0.9rem" color="gray.700">{user.email}</Table.Cell>
                <Table.Cell px={6} py={3}><Badge px={2} py={0.5} borderRadius="md" bg="#ede9fe" color="#4f46e5" fontSize="0.75rem">{user.role}</Badge></Table.Cell>
                <Table.Cell px={6} py={3}><Badge px={3} py={1} borderRadius="full" fontSize="0.75rem" bg={statusColors[user.status].bg} color={statusColors[user.status].color}>{user.status}</Badge></Table.Cell>
                <Table.Cell px={6} py={3} fontSize="0.85rem" color="gray.500">{user.joined}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Box>
    </Box>
  );
}
