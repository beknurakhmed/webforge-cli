import { SimpleGrid, Box, Text } from '@chakra-ui/react';
import { contacts } from '../data/contacts';

const stats = [
  { label: 'Total Contacts', value: contacts.length, color: '#4f46e5' },
  { label: 'Leads', value: contacts.filter((c) => c.status === 'Lead').length, color: '#f59e0b' },
  { label: 'Customers', value: contacts.filter((c) => c.status === 'Customer').length, color: '#10b981' },
  { label: 'Churned', value: contacts.filter((c) => c.status === 'Churned').length, color: '#ef4444' },
];

function StatsCards() {
  return (
    <SimpleGrid columns={{ base: 2, md: 4 }} gap={4} mb={6}>
      {stats.map((stat, i) => (
        <Box key={i} bg="white" borderRadius="xl" p={5} border="1px solid" borderColor="gray.200" position="relative" overflow="hidden">
          <Box position="absolute" top={0} left={0} w="4px" h="100%" bg={stat.color} />
          <Text fontSize="0.8rem" color="gray.500">{stat.label}</Text>
          <Text fontSize="1.75rem" fontWeight={700} color="gray.900">{stat.value}</Text>
        </Box>
      ))}
    </SimpleGrid>
  );
}

export default StatsCards;
