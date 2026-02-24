'use client';

import { SimpleGrid, Box, Flex, Text } from '@chakra-ui/react';

interface KPI {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: string;
}

const kpis: KPI[] = [
  { title: 'Total Revenue', value: '$48,250', change: '+12.5%', trend: 'up', icon: '💰' },
  { title: 'Active Users', value: '2,340', change: '+8.1%', trend: 'up', icon: '👥' },
  { title: 'Orders', value: '1,120', change: '+23.4%', trend: 'up', icon: '📦' },
  { title: 'Conversion Rate', value: '3.2%', change: '-1.8%', trend: 'down', icon: '📈' },
];

export function KPICards() {
  return (
    <SimpleGrid columns={{ base: 2, md: 4 }} gap={6} mb={8}>
      {kpis.map((kpi) => (
        <Box key={kpi.title} bg="white" borderRadius="xl" p={6} border="1px solid" borderColor="gray.200">
          <Flex justify="space-between" align="center" mb={2}>
            <Text fontSize="xl">{kpi.icon}</Text>
            <Text fontSize="0.8rem" fontWeight={500} color={kpi.trend === 'up' ? 'green.500' : 'red.500'}>{kpi.change}</Text>
          </Flex>
          <Text fontSize="2rem" fontWeight={700} color="gray.900">{kpi.value}</Text>
          <Text fontSize="0.85rem" color="gray.500">{kpi.title}</Text>
        </Box>
      ))}
    </SimpleGrid>
  );
}
