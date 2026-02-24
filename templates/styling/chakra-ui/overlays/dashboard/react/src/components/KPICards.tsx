import { SimpleGrid, Box, Text } from '@chakra-ui/react';

const kpis = [
  { label: 'Total Revenue', value: '$48,250', change: '+12%', positive: true },
  { label: 'Active Users', value: '2,420', change: '+8%', positive: true },
  { label: 'Orders', value: '1,210', change: '-3%', positive: false },
  { label: 'Conversion', value: '3.2%', change: '+0.5%', positive: true },
];

export function KPICards() {
  return (
    <SimpleGrid columns={{ base: 2, md: 4 }} gap={6} mb={8}>
      {kpis.map((kpi, i) => (
        <Box key={i} bg="white" borderRadius="xl" p={6} border="1px solid" borderColor="gray.200">
          <Text fontSize="0.85rem" color="gray.500" fontWeight={500}>
            {kpi.label}
          </Text>
          <Text fontSize="2rem" fontWeight={700} color="gray.900" my={1}>
            {kpi.value}
          </Text>
          <Text fontSize="0.8rem" color={kpi.positive ? 'green.500' : 'red.500'}>
            {kpi.change} from last month
          </Text>
        </Box>
      ))}
    </SimpleGrid>
  );
}
