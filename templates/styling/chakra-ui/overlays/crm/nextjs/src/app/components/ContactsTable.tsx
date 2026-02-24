'use client';

import { Box, Flex, Heading, Text, Badge, Table, HStack } from '@chakra-ui/react';

interface Contact {
  id: number;
  name: string;
  email: string;
  company: string;
  phone: string;
  status: 'Lead' | 'Prospect' | 'Customer' | 'Inactive';
  value: string;
  avatar: string;
}

const contacts: Contact[] = [
  { id: 1, name: 'Sarah Chen', email: 'sarah@techcorp.com', company: 'TechCorp Inc.', phone: '+1 (555) 123-4567', status: 'Customer', value: '$45,000', avatar: '👩' },
  { id: 2, name: 'James Wilson', email: 'james@innovate.io', company: 'Innovate.io', phone: '+1 (555) 234-5678', status: 'Prospect', value: '$28,000', avatar: '👨' },
  { id: 3, name: 'Maria Garcia', email: 'maria@designlab.co', company: 'DesignLab Co.', phone: '+1 (555) 345-6789', status: 'Lead', value: '$15,000', avatar: '👩' },
  { id: 4, name: 'Robert Kim', email: 'robert@globalnet.com', company: 'GlobalNet Ltd.', phone: '+1 (555) 456-7890', status: 'Customer', value: '$62,000', avatar: '👨' },
  { id: 5, name: 'Emily Brown', email: 'emily@startupxyz.com', company: 'StartupXYZ', phone: '+1 (555) 567-8901', status: 'Prospect', value: '$18,500', avatar: '👩' },
  { id: 6, name: 'Michael Davis', email: 'michael@enterprise.com', company: 'Enterprise Solutions', phone: '+1 (555) 678-9012', status: 'Inactive', value: '$8,200', avatar: '👨' },
];

const statusColors: Record<string, { bg: string; color: string }> = {
  Customer: { bg: '#d1fae5', color: '#059669' },
  Prospect: { bg: '#dbeafe', color: '#2563eb' },
  Lead: { bg: '#fef3c7', color: '#d97706' },
  Inactive: { bg: '#f3f4f6', color: '#6b7280' },
};

interface ContactsTableProps {
  limit?: number;
  showSearch?: boolean;
}

export function ContactsTable({ limit, showSearch = false }: ContactsTableProps) {
  const displayContacts = limit ? contacts.slice(0, limit) : contacts;

  return (
    <Box bg="white" borderRadius="xl" border="1px solid" borderColor="gray.200" overflow="hidden">
      <Flex justify="space-between" align="center" p={5} px={6}>
        <Heading as="h3" size="sm" color="gray.900">{showSearch ? 'All Contacts' : 'Recent Contacts'}</Heading>
        {showSearch && <Text fontSize="0.85rem" color="gray.500" bg="gray.100" px={3} py={1} borderRadius="full">{contacts.length} contacts</Text>}
      </Flex>
      <Table.Root size="sm">
        <Table.Header>
          <Table.Row bg="gray.50">
            <Table.ColumnHeader px={6} py={3} fontSize="0.75rem" color="gray.500" textTransform="uppercase" letterSpacing="0.05em">Name</Table.ColumnHeader>
            <Table.ColumnHeader px={6} py={3} fontSize="0.75rem" color="gray.500" textTransform="uppercase" letterSpacing="0.05em">Company</Table.ColumnHeader>
            <Table.ColumnHeader px={6} py={3} fontSize="0.75rem" color="gray.500" textTransform="uppercase" letterSpacing="0.05em">Email</Table.ColumnHeader>
            <Table.ColumnHeader px={6} py={3} fontSize="0.75rem" color="gray.500" textTransform="uppercase" letterSpacing="0.05em">Status</Table.ColumnHeader>
            <Table.ColumnHeader px={6} py={3} fontSize="0.75rem" color="gray.500" textTransform="uppercase" letterSpacing="0.05em">Value</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {displayContacts.map((contact) => (
            <Table.Row key={contact.id}>
              <Table.Cell px={6} py={3}>
                <HStack gap={3}>
                  <Text fontSize="1.25rem">{contact.avatar}</Text>
                  <Box>
                    <Text fontWeight={600} color="gray.900">{contact.name}</Text>
                    <Text fontSize="0.75rem" color="gray.500">{contact.phone}</Text>
                  </Box>
                </HStack>
              </Table.Cell>
              <Table.Cell px={6} py={3} fontSize="0.9rem">{contact.company}</Table.Cell>
              <Table.Cell px={6} py={3} fontSize="0.9rem" color="#4f46e5">{contact.email}</Table.Cell>
              <Table.Cell px={6} py={3}><Badge px={3} py={1} borderRadius="full" fontSize="0.75rem" fontWeight={600} bg={statusColors[contact.status].bg} color={statusColors[contact.status].color}>{contact.status}</Badge></Table.Cell>
              <Table.Cell px={6} py={3} fontWeight={700} color="gray.900">{contact.value}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Box>
  );
}
