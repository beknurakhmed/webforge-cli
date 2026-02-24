'use client';

import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react';

interface Stat {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: string;
}

const stats: Stat[] = [
  { title: 'Total Contacts', value: '1,248', change: '+12.5%', trend: 'up', icon: '👥' },
  { title: 'Active Deals', value: '42', change: '+8.3%', trend: 'up', icon: '💼' },
  { title: 'Revenue Pipeline', value: '$284,500', change: '+23.1%', trend: 'up', icon: '💰' },
  { title: 'Conversion Rate', value: '24.8%', change: '-2.1%', trend: 'down', icon: '📈' },
];

export function StatsCards() {
  return (
    <SimpleGrid columns={{ base: 2, md: 4 }} gap={5} mb={8}>
      {stats.map((stat) => (
        <Box key={stat.title} bg="white" p={6} borderRadius="xl" border="1px solid" borderColor="gray.200">
          <Flex justify="space-between" align="center" mb={2}>
            <Text fontSize="1.5rem">{stat.icon}</Text>
            <Text fontSize="0.8rem" fontWeight={600} px={2} py={0.5} borderRadius="full" bg={stat.trend === 'up' ? '#d1fae5' : '#fee2e2'} color={stat.trend === 'up' ? '#059669' : '#dc2626'}>{stat.change}</Text>
          </Flex>
          <Text fontSize="1.75rem" fontWeight={800} color="gray.900">{stat.value}</Text>
          <Text fontSize="0.85rem" color="gray.500" mt={1}>{stat.title}</Text>
        </Box>
      ))}
    </SimpleGrid>
  );
}
