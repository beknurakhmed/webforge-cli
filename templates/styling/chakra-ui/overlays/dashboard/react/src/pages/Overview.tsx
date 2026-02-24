import { Box, Flex, Heading, Input, SimpleGrid, Center } from '@chakra-ui/react';
import { KPICards } from '../components/KPICards';
import { ChartPlaceholder } from '../components/ChartPlaceholder';
import { DataTable } from '../components/DataTable';

export function Overview() {
  return (
    <Box>
      <Flex justify="space-between" align="center" mb={6}>
        <Heading as="h1" size="xl" color="gray.900">
          Dashboard
        </Heading>
        <Flex align="center" gap={4}>
          <Input
            placeholder="Search..."
            border="1px solid"
            borderColor="gray.300"
            borderRadius="lg"
            fontSize="0.9rem"
            px={4}
            py={2}
            maxW="200px"
          />
          <Center
            w="36px"
            h="36px"
            bg="#4f46e5"
            color="white"
            borderRadius="full"
            fontWeight={600}
            fontSize="0.9rem"
          >
            B
          </Center>
        </Flex>
      </Flex>
      <KPICards />
      <SimpleGrid columns={{ base: 1, lg: 2 }} gap={6} mb={8}>
        <ChartPlaceholder title="Revenue Overview" />
        <ChartPlaceholder title="User Growth" />
      </SimpleGrid>
      <DataTable />
    </Box>
  );
}
