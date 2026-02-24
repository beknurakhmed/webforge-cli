'use client';

import { useState } from 'react';
import { Box, Heading, Text, Input, Flex, Button, Badge, Table, HStack } from '@chakra-ui/react';

interface Contact {
  id: number;
  name: string;
  email: string;
  company: string;
  phone: string;
  status: 'Lead' | 'Prospect' | 'Customer' | 'Inactive';
  value: string;
  avatar: string;
  lastContact: string;
}

const contacts: Contact[] = [
  { id: 1, name: 'Sarah Chen', email: 'sarah@techcorp.com', company: 'TechCorp Inc.', phone: '+1 (555) 123-4567', status: 'Customer', value: '$45,000', avatar: '👩', lastContact: '2025-01-15' },
  { id: 2, name: 'James Wilson', email: 'james@innovate.io', company: 'Innovate.io', phone: '+1 (555) 234-5678', status: 'Prospect', value: '$28,000', avatar: '👨', lastContact: '2025-01-14' },
  { id: 3, name: 'Maria Garcia', email: 'maria@designlab.co', company: 'DesignLab Co.', phone: '+1 (555) 345-6789', status: 'Lead', value: '$15,000', avatar: '👩', lastContact: '2025-01-13' },
  { id: 4, name: 'Robert Kim', email: 'robert@globalnet.com', company: 'GlobalNet Ltd.', phone: '+1 (555) 456-7890', status: 'Customer', value: '$62,000', avatar: '👨', lastContact: '2025-01-12' },
  { id: 5, name: 'Emily Brown', email: 'emily@startupxyz.com', company: 'StartupXYZ', phone: '+1 (555) 567-8901', status: 'Prospect', value: '$18,500', avatar: '👩', lastContact: '2025-01-11' },
  { id: 6, name: 'Michael Davis', email: 'michael@enterprise.com', company: 'Enterprise Solutions', phone: '+1 (555) 678-9012', status: 'Inactive', value: '$8,200', avatar: '👨', lastContact: '2024-12-20' },
];

const statusColors: Record<string, { bg: string; color: string }> = {
  Customer: { bg: '#d1fae5', color: '#059669' },
  Prospect: { bg: '#dbeafe', color: '#2563eb' },
  Lead: { bg: '#fef3c7', color: '#d97706' },
  Inactive: { bg: '#f3f4f6', color: '#6b7280' },
};

export default function ContactsPage() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const filtered = contacts.filter((c) => {
    const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.company.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === 'All' || c.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <Box>
      <Box mb={6}>
        <Heading as="h1" size="xl" color="gray.900" mb={1}>Contacts</Heading>
        <Text color="gray.500">Manage your contacts and customer relationships.</Text>
      </Box>

      <Box bg="white" borderRadius="xl" border="1px solid" borderColor="gray.200" overflow="hidden">
        <Flex p={5} px={6} gap={4} flexWrap="wrap" justify="space-between" align="center">
          <Flex align="center" gap={2} bg="gray.50" px={4} py={2} borderRadius="lg" border="1px solid" borderColor="gray.200" flex={1} maxW="300px">
            <Text>🔍</Text>
            <Input border="none" placeholder="Search contacts..." value={search} onChange={(e) => setSearch(e.target.value)} _focus={{ boxShadow: 'none' }} />
          </Flex>
          <HStack gap={1} flexWrap="wrap">
            {['All', 'Lead', 'Prospect', 'Customer', 'Inactive'].map((status) => (
              <Button key={status} size="sm" px={3} py={1} bg={statusFilter === status ? '#4f46e5' : 'white'} color={statusFilter === status ? 'white' : 'gray.600'} border="1px solid" borderColor={statusFilter === status ? '#4f46e5' : 'gray.200'} borderRadius="md" fontSize="0.8rem" fontWeight={500} onClick={() => setStatusFilter(status)} _hover={{ bg: statusFilter === status ? '#4338ca' : 'gray.50', borderColor: '#4f46e5' }}>{status}</Button>
            ))}
          </HStack>
        </Flex>

        <Table.Root size="sm">
          <Table.Header>
            <Table.Row bg="gray.50">
              <Table.ColumnHeader px={6} py={3} fontSize="0.75rem" color="gray.500" textTransform="uppercase" letterSpacing="0.05em">Name</Table.ColumnHeader>
              <Table.ColumnHeader px={6} py={3} fontSize="0.75rem" color="gray.500" textTransform="uppercase" letterSpacing="0.05em">Company</Table.ColumnHeader>
              <Table.ColumnHeader px={6} py={3} fontSize="0.75rem" color="gray.500" textTransform="uppercase" letterSpacing="0.05em">Email</Table.ColumnHeader>
              <Table.ColumnHeader px={6} py={3} fontSize="0.75rem" color="gray.500" textTransform="uppercase" letterSpacing="0.05em">Phone</Table.ColumnHeader>
              <Table.ColumnHeader px={6} py={3} fontSize="0.75rem" color="gray.500" textTransform="uppercase" letterSpacing="0.05em">Status</Table.ColumnHeader>
              <Table.ColumnHeader px={6} py={3} fontSize="0.75rem" color="gray.500" textTransform="uppercase" letterSpacing="0.05em">Value</Table.ColumnHeader>
              <Table.ColumnHeader px={6} py={3} fontSize="0.75rem" color="gray.500" textTransform="uppercase" letterSpacing="0.05em">Last Contact</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {filtered.map((contact) => (
              <Table.Row key={contact.id}>
                <Table.Cell px={6} py={3}>
                  <HStack gap={3}>
                    <Text fontSize="1.25rem">{contact.avatar}</Text>
                    <Text fontWeight={600} color="gray.900">{contact.name}</Text>
                  </HStack>
                </Table.Cell>
                <Table.Cell px={6} py={3} fontSize="0.9rem">{contact.company}</Table.Cell>
                <Table.Cell px={6} py={3} fontSize="0.9rem" color="#4f46e5">{contact.email}</Table.Cell>
                <Table.Cell px={6} py={3} fontSize="0.9rem">{contact.phone}</Table.Cell>
                <Table.Cell px={6} py={3}><Badge px={3} py={1} borderRadius="full" fontSize="0.75rem" fontWeight={600} bg={statusColors[contact.status].bg} color={statusColors[contact.status].color}>{contact.status}</Badge></Table.Cell>
                <Table.Cell px={6} py={3} fontWeight={700} color="gray.900">{contact.value}</Table.Cell>
                <Table.Cell px={6} py={3} fontSize="0.85rem" color="gray.500">{contact.lastContact}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>

        {filtered.length === 0 && (
          <Box textAlign="center" py={8} color="gray.500">
            <Text>No contacts found matching your criteria.</Text>
          </Box>
        )}
      </Box>
    </Box>
  );
}
