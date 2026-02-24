'use client';

import { Box, Heading, Text, SimpleGrid, Flex, Table, Badge } from '@chakra-ui/react';
import { ChartPlaceholder } from '../components/ChartPlaceholder';

const metrics = [
  { label: 'Page Views', value: '124,892', change: '+14.2%', icon: '👁️' },
  { label: 'Bounce Rate', value: '32.1%', change: '-2.4%', icon: '📉' },
  { label: 'Avg. Session', value: '4m 32s', change: '+8.7%', icon: '⏱️' },
  { label: 'New Visitors', value: '8,432', change: '+18.9%', icon: '🆕' },
];

const topPages = [
  { page: '/home', views: '24,521', percentage: 32 },
  { page: '/products', views: '18,432', percentage: 24 },
  { page: '/about', views: '12,841', percentage: 17 },
  { page: '/blog', views: '9,234', percentage: 12 },
  { page: '/contact', views: '6,128', percentage: 8 },
  { page: '/pricing', views: '5,432', percentage: 7 },
];

export default function AnalyticsPage() {
  return (
    <Box>
      <Box mb={6}><Heading as="h1" size="xl" color="gray.900" mb={1}>Analytics</Heading><Text color="gray.500">Track your website performance and user engagement.</Text></Box>
      <SimpleGrid columns={{ base: 2, md: 4 }} gap={6} mb={8}>
        {metrics.map((m) => (
          <Box key={m.label} bg="white" borderRadius="xl" p={6} border="1px solid" borderColor="gray.200">
            <Flex justify="space-between" mb={2}><Text fontSize="xl">{m.icon}</Text><Text fontSize="0.8rem" color={m.change.startsWith('+') ? 'green.500' : 'red.500'}>{m.change}</Text></Flex>
            <Text fontSize="1.5rem" fontWeight={700} color="gray.900">{m.value}</Text>
            <Text fontSize="0.85rem" color="gray.500">{m.label}</Text>
          </Box>
        ))}
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, lg: 2 }} gap={6} mb={8}>
        <ChartPlaceholder title="Traffic Sources" type="pie" />
        <ChartPlaceholder title="Visitor Trend" type="line" />
      </SimpleGrid>
      <Box bg="white" borderRadius="xl" border="1px solid" borderColor="gray.200" overflow="hidden">
        <Heading as="h3" size="sm" p={6} color="gray.900">Top Pages</Heading>
        <Table.Root size="sm">
          <Table.Header><Table.Row bg="gray.50">
            <Table.ColumnHeader px={6} py={3} fontSize="0.8rem" color="gray.500" textTransform="uppercase">Page</Table.ColumnHeader>
            <Table.ColumnHeader px={6} py={3} fontSize="0.8rem" color="gray.500" textTransform="uppercase">Views</Table.ColumnHeader>
            <Table.ColumnHeader px={6} py={3} fontSize="0.8rem" color="gray.500" textTransform="uppercase">Share</Table.ColumnHeader>
            <Table.ColumnHeader px={6} py={3} fontSize="0.8rem" color="gray.500" textTransform="uppercase">Progress</Table.ColumnHeader>
          </Table.Row></Table.Header>
          <Table.Body>
            {topPages.map((page) => (
              <Table.Row key={page.page}>
                <Table.Cell px={6} py={3} fontWeight={600} color="#4f46e5" fontSize="0.9rem">{page.page}</Table.Cell>
                <Table.Cell px={6} py={3} fontSize="0.9rem">{page.views}</Table.Cell>
                <Table.Cell px={6} py={3} fontSize="0.9rem">{page.percentage}%</Table.Cell>
                <Table.Cell px={6} py={3}><Box w="100%" bg="gray.100" borderRadius="full" h="8px"><Box bg="#4f46e5" borderRadius="full" h="8px" style={{ width: `${page.percentage}%` }} /></Box></Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Box>
    </Box>
  );
}
