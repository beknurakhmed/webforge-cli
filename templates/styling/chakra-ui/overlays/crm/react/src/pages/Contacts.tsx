import { useState } from 'react';
import { Flex, Heading, Input } from '@chakra-ui/react';
import ContactsTable from '../components/ContactsTable';
import { contacts } from '../data/contacts';

function Contacts() {
  const [search, setSearch] = useState('');

  const filtered = contacts.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase()) ||
      c.company.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Flex as="header" justify="space-between" align="center" mb={8}>
        <Heading as="h1" size="xl" color="gray.900">
          Contacts
        </Heading>
        <Input
          placeholder="Search contacts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          maxW="260px"
          border="1px solid"
          borderColor="gray.300"
          borderRadius="lg"
          fontSize="0.9rem"
          px={4}
          py={2}
          _focus={{ borderColor: '#4f46e5', boxShadow: '0 0 0 2px rgba(79, 70, 229, 0.15)' }}
        />
      </Flex>
      <ContactsTable contacts={filtered} />
    </div>
  );
}

export default Contacts;
