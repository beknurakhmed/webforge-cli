'use client';

import { Box, Heading, Text, SimpleGrid, Flex, VStack } from '@chakra-ui/react';
import { StatsCards } from './components/StatsCards';
import { ContactsTable } from './components/ContactsTable';

const recentActivities = [
  { action: 'New deal created', detail: 'TechCorp Inc. - Enterprise Plan', time: '2 hours ago', icon: '💼' },
  { action: 'Contact updated', detail: 'Sarah Chen - Status changed to Customer', time: '4 hours ago', icon: '👤' },
  { action: 'Deal closed', detail: 'GlobalNet Ltd. - Premium Package', time: '1 day ago', icon: '🎉' },
  { action: 'New contact added', detail: 'Emily Brown - StartupXYZ', time: '1 day ago', icon: '➕' },
  { action: 'Meeting scheduled', detail: 'James Wilson - Product Demo', time: '2 days ago', icon: '📅' },
];

export default function CRMDashboard() {
  return (
    <Box>
      <Box mb={8}>
        <Heading as="h1" size="xl" color="gray.900" mb={1}>Dashboard</Heading>
        <Text color="gray.500">Welcome back! Here is your sales overview.</Text>
      </Box>

      <StatsCards />

      <SimpleGrid columns={{ base: 1, lg: 2 }} gap={6} templateColumns={{ base: '1fr', lg: '2fr 1fr' }}>
        <ContactsTable limit={4} />

        <Box bg="white" borderRadius="xl" border="1px solid" borderColor="gray.200" p={6}>
          <Heading as="h3" size="sm" color="gray.900" mb={4}>Recent Activity</Heading>
          <VStack gap={4} align="stretch">
            {recentActivities.map((activity, i) => (
              <Flex key={i} gap={3}>
                <Text fontSize="1.25rem" flexShrink={0}>{activity.icon}</Text>
                <Box>
                  <Text fontWeight={600} color="gray.900" fontSize="0.9rem">{activity.action}</Text>
                  <Text fontSize="0.8rem" color="gray.600">{activity.detail}</Text>
                  <Text fontSize="0.75rem" color="gray.400">{activity.time}</Text>
                </Box>
              </Flex>
            ))}
          </VStack>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
