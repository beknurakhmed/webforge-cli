import { Box, Heading, Text, SimpleGrid, VStack } from '@chakra-ui/react';

interface Deal {
  id: number;
  company: string;
  value: number;
  contact: string;
  stage: string;
}

const deals: Deal[] = [
  { id: 1, company: 'Acme Corp', value: 25000, contact: 'John Smith', stage: 'Qualified' },
  { id: 2, company: 'Globex Inc', value: 18000, contact: 'Sarah Johnson', stage: 'Prospect' },
  { id: 3, company: 'Wayne Enterprises', value: 45000, contact: 'Emily Chen', stage: 'Proposal' },
  { id: 4, company: 'Stark Industries', value: 32000, contact: 'Alex Turner', stage: 'Won' },
  { id: 5, company: 'Initech', value: 12000, contact: 'Mike Davis', stage: 'Qualified' },
  { id: 6, company: 'Oscorp', value: 28000, contact: 'David Brown', stage: 'Prospect' },
  { id: 7, company: 'LexCorp', value: 55000, contact: 'Rachel Green', stage: 'Proposal' },
  { id: 8, company: 'Umbrella Corp', value: 15000, contact: 'Lisa Wang', stage: 'Won' },
];

const stages = ['Prospect', 'Qualified', 'Proposal', 'Won'];

function Deals() {
  return (
    <Box>
      <Heading as="h1" size="xl" color="gray.900" mb={8}>
        Deals Pipeline
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={4}>
        {stages.map((stage) => (
          <Box key={stage} bg="white" borderRadius="xl" p={4} border="1px solid" borderColor="gray.200">
            <Heading as="h3" size="sm" color="gray.700" mb={4} pb={3} borderBottom="2px solid" borderColor="#4f46e5">
              {stage}
            </Heading>
            <VStack gap={3} align="stretch">
              {deals
                .filter((d) => d.stage === stage)
                .map((deal) => (
                  <Box key={deal.id} bg="gray.50" borderRadius="lg" p={4} border="1px solid" borderColor="gray.200">
                    <Heading as="h4" size="sm" color="gray.900" mb={1}>
                      {deal.company}
                    </Heading>
                    <Text fontSize="lg" fontWeight={700} color="#4f46e5" my={1}>
                      ${deal.value.toLocaleString()}
                    </Text>
                    <Text fontSize="0.8rem" color="gray.500">
                      {deal.contact}
                    </Text>
                  </Box>
                ))}
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Deals;
