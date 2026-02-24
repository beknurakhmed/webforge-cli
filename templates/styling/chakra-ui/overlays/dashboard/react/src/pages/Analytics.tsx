import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { ChartPlaceholder } from '../components/ChartPlaceholder';

const metrics = [
  { label: 'Page Views', value: '124,892', change: '+14%' },
  { label: 'Bounce Rate', value: '42.3%', change: '-2.1%' },
  { label: 'Avg. Session', value: '4m 32s', change: '+8%' },
  { label: 'Conversions', value: '1,847', change: '+5.3%' },
];

export function Analytics() {
  return (
    <Box>
      <Heading as="h1" size="xl" color="gray.900" mb={6}>
        Analytics
      </Heading>
      <SimpleGrid columns={{ base: 2, md: 4 }} gap={6} mb={8}>
        {metrics.map((m, i) => (
          <Box key={i} bg="white" borderRadius="xl" p={5} border="1px solid" borderColor="gray.200">
            <Text fontSize="0.8rem" color="gray.500" fontWeight={500}>
              {m.label}
            </Text>
            <Text fontSize="1.5rem" fontWeight={700} color="gray.900" my={1}>
              {m.value}
            </Text>
            <Text fontSize="0.8rem" color="green.500" fontWeight={500}>
              {m.change}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, lg: 2 }} gap={6} mb={8}>
        <ChartPlaceholder title="Traffic Sources" data={[30, 55, 80, 45, 70, 60, 85, 50, 65, 75, 90, 40]} />
        <ChartPlaceholder title="Conversion Funnel" data={[95, 80, 60, 45, 30, 20, 15, 12, 10, 8, 6, 5]} />
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, lg: 2 }} gap={6}>
        <ChartPlaceholder title="Revenue by Channel" data={[70, 50, 85, 40, 60, 75, 55, 90, 45, 65, 80, 70]} />
        <ChartPlaceholder title="User Engagement" data={[20, 35, 50, 65, 45, 70, 55, 80, 60, 75, 85, 90]} />
      </SimpleGrid>
    </Box>
  );
}
