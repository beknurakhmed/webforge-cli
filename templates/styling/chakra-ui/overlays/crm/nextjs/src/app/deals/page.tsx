'use client';

import { Box, Heading, Text, SimpleGrid, Flex, VStack } from '@chakra-ui/react';

interface Deal {
  id: number;
  company: string;
  value: number;
  contact: string;
  stage: string;
}

const deals: Deal[] = [
  { id: 1, company: 'TechCorp Inc.', value: 45000, contact: 'Sarah Chen', stage: 'Prospect' },
  { id: 2, company: 'Innovate.io', value: 28000, contact: 'James Wilson', stage: 'Proposal' },
  { id: 3, company: 'DesignLab Co.', value: 15000, contact: 'Maria Garcia', stage: 'Qualified' },
  { id: 4, company: 'GlobalNet Ltd.', value: 62000, contact: 'Robert Kim', stage: 'Won' },
  { id: 5, company: 'StartupXYZ', value: 18500, contact: 'Emily Brown', stage: 'Proposal' },
  { id: 6, company: 'Oscorp Labs', value: 34000, contact: 'Michael Davis', stage: 'Prospect' },
  { id: 7, company: 'LexCorp', value: 55000, contact: 'Rachel Green', stage: 'Qualified' },
  { id: 8, company: 'Umbrella Co.', value: 21000, contact: 'Lisa Wang', stage: 'Won' },
];

const stages = ['Prospect', 'Qualified', 'Proposal', 'Won'];

export default function DealsPage() {
  const pipelineTotal = deals
    .filter((d) => d.stage !== 'Won')
    .reduce((sum, d) => sum + d.value, 0);

  return (
    <Box>
      <Box mb={6}>
        <Heading as="h1" size="xl" color="gray.900" mb={1}>Deals Pipeline</Heading>
        <Text color="gray.500">Pipeline value: ${pipelineTotal.toLocaleString()}</Text>
      </Box>

      <SimpleGrid columns={{ base: 2, lg: 4 }} gap={5} minH="400px">
        {stages.map((stage) => {
          const stageDeals = deals.filter((d) => d.stage === stage);
          const stageTotal = stageDeals.reduce((sum, d) => sum + d.value, 0);

          return (
            <Box key={stage} bg="gray.100" borderRadius="xl" p={4}>
              <Flex justify="space-between" align="center" mb={1}>
                <Text fontSize="0.9rem" fontWeight={700} color="gray.900">{stage}</Text>
                <Flex w="24px" h="24px" borderRadius="full" bg="white" align="center" justify="center">
                  <Text fontSize="0.75rem" fontWeight={600} color="gray.500">{stageDeals.length}</Text>
                </Flex>
              </Flex>
              <Text fontSize="0.8rem" color="gray.500" mb={4}>${stageTotal.toLocaleString()}</Text>
              <VStack gap={3} align="stretch">
                {stageDeals.map((deal) => (
                  <Box key={deal.id} bg="white" p={4} borderRadius="lg" border="1px solid" borderColor="gray.200">
                    <Text fontSize="0.95rem" fontWeight={600} color="gray.900" mb={1}>{deal.company}</Text>
                    <Text fontSize="1.1rem" fontWeight={700} color="#4f46e5" mb={2}>${deal.value.toLocaleString()}</Text>
                    <Text fontSize="0.8rem" color="gray.500">👤 {deal.contact}</Text>
                  </Box>
                ))}
              </VStack>
            </Box>
          );
        })}
      </SimpleGrid>
    </Box>
  );
}
