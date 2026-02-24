'use client';

import { Box, Heading, Flex, Text } from '@chakra-ui/react';

interface ChartPlaceholderProps {
  title: string;
  type?: 'bar' | 'line' | 'pie';
}

export function ChartPlaceholder({ title, type = 'bar' }: ChartPlaceholderProps) {
  const bars = [40, 65, 45, 80, 55, 70, 60, 85, 50, 75, 90, 68];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return (
    <Box bg="white" borderRadius="xl" p={6} border="1px solid" borderColor="gray.200">
      <Heading as="h3" size="sm" fontWeight={600} mb={4} color="gray.900">{title}</Heading>
      {type === 'bar' && (
        <Flex gap={2} align="flex-end" h="200px">
          {bars.map((h, i) => (
            <Flex key={i} flex={1} flexDirection="column" align="center" gap={1} h="100%" justify="flex-end">
              <Box flex="none" w="100%" bgGradient="linear-gradient(to top, #4f46e5, #818cf8)" borderTopRadius="sm" style={{ height: `${h}%` }} />
              <Text fontSize="0.6rem" color="gray.400">{months[i]}</Text>
            </Flex>
          ))}
        </Flex>
      )}
      {type === 'line' && (
        <Box h="200px">
          <svg viewBox="0 0 400 150" style={{ width: '100%', height: '100%' }}>
            <polyline fill="none" stroke="#4f46e5" strokeWidth="2.5" points="0,120 35,90 70,100 105,50 140,70 175,30 210,45 245,20 280,55 315,40 350,25 385,10" />
            <polyline fill="rgba(79,70,229,0.1)" stroke="none" points="0,150 0,120 35,90 70,100 105,50 140,70 175,30 210,45 245,20 280,55 315,40 350,25 385,10 385,150" />
          </svg>
        </Box>
      )}
      {type === 'pie' && (
        <Flex align="center" justify="center" h="200px" gap={8} flexWrap="wrap">
          <Box w="120px" h="120px" borderRadius="full" bgGradient="conic-gradient(#4f46e5 0% 35%, #7c3aed 35% 60%, #06b6d4 60% 80%, #10b981 80% 100%)" />
          <Flex flexDirection="column" gap={2}>
            <Flex align="center" gap={2}><Box w={3} h={3} bg="#4f46e5" borderRadius="sm" /><Text fontSize="sm">Direct (35%)</Text></Flex>
            <Flex align="center" gap={2}><Box w={3} h={3} bg="#7c3aed" borderRadius="sm" /><Text fontSize="sm">Organic (25%)</Text></Flex>
            <Flex align="center" gap={2}><Box w={3} h={3} bg="#06b6d4" borderRadius="sm" /><Text fontSize="sm">Referral (20%)</Text></Flex>
            <Flex align="center" gap={2}><Box w={3} h={3} bg="#10b981" borderRadius="sm" /><Text fontSize="sm">Social (20%)</Text></Flex>
          </Flex>
        </Flex>
      )}
    </Box>
  );
}
