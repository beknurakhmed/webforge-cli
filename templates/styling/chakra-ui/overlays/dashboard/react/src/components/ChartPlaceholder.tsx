import { Box, Heading, Flex } from '@chakra-ui/react';

interface ChartPlaceholderProps {
  title: string;
  data?: number[];
}

export function ChartPlaceholder({ title, data }: ChartPlaceholderProps) {
  const bars = data || [40, 65, 45, 80, 55, 70, 90, 60, 75, 50, 85, 95];

  return (
    <Box bg="white" borderRadius="xl" p={6} border="1px solid" borderColor="gray.200">
      <Heading as="h3" size="sm" fontWeight={600} mb={4} color="gray.900">
        {title}
      </Heading>
      <Flex h="200px" align="flex-end">
        <Flex gap={2} align="flex-end" h="100%" w="100%">
          {bars.map((h, i) => (
            <Box
              key={i}
              flex={1}
              bgGradient="linear-gradient(to top, #4f46e5, #818cf8)"
              borderTopRadius="sm"
              transition="height 0.3s"
              minW="12px"
              style={{ height: `${h}%` }}
            />
          ))}
        </Flex>
      </Flex>
    </Box>
  );
}
