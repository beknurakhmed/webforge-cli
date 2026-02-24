'use client';

import { Box, Heading, Text, SimpleGrid } from '@chakra-ui/react';
import { KPICards } from './components/KPICards';
import { ChartPlaceholder } from './components/ChartPlaceholder';
import { DataTable } from './components/DataTable';

export default function OverviewPage() {
  return (
    <Box>
      <Box mb={6}>
        <Heading as="h1" size="xl" color="gray.900" mb={1}>Overview</Heading>
        <Text color="gray.500">Welcome back! Here is what is happening with your business.</Text>
      </Box>
      <KPICards />
      <SimpleGrid columns={{ base: 1, lg: 2 }} gap={6} mb={8}>
        <ChartPlaceholder title="Revenue Over Time" type="bar" />
        <ChartPlaceholder title="Growth Trend" type="line" />
      </SimpleGrid>
      <DataTable title="Recent Orders" limit={5} />
    </Box>
  );
}
