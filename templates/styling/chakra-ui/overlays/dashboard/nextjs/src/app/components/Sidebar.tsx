'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Box, VStack, Flex, Text } from '@chakra-ui/react';

const navItems = [
  { href: '/', label: 'Overview', icon: '📊' },
  { href: '/analytics', label: 'Analytics', icon: '📈' },
  { href: '/users', label: 'Users', icon: '👥' },
  { href: '/settings', label: 'Settings', icon: '⚙️' },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <Box as="aside" w="240px" bg="gray.900" color="white" p={6} flexShrink={0} display="flex" flexDirection="column">
      <Flex align="center" gap={2} px={3} mb={8}>
        <Text fontSize="lg">📊</Text>
        <Text fontSize="xl" fontWeight={700} color="#4f46e5">{'{{projectName}}'}</Text>
      </Flex>
      <VStack as="nav" gap={1} align="stretch" flex={1}>
        {navItems.map((item) => (
          <Flex key={item.href} as={Link} href={item.href} align="center" gap={3} px={3} py={3} borderRadius="lg" color={pathname === item.href ? 'white' : 'gray.400'} bg={pathname === item.href ? '#4f46e5' : 'transparent'} textDecoration="none" transition="all 0.2s" _hover={{ bg: pathname === item.href ? '#4f46e5' : 'gray.800', color: 'white' }}>
            <Text fontSize="lg">{item.icon}</Text>
            <Text>{item.label}</Text>
          </Flex>
        ))}
      </VStack>
      <Flex align="center" gap={3} px={3} py={3}>
        <Flex w="36px" h="36px" bg="#4f46e5" borderRadius="full" align="center" justify="center">👤</Flex>
        <Box>
          <Text fontSize="sm" fontWeight={600}>Admin User</Text>
          <Text fontSize="xs" color="gray.400">Administrator</Text>
        </Box>
      </Flex>
    </Box>
  );
}
