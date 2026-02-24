'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Box, Flex, Text, VStack } from '@chakra-ui/react';

const navItems = [
  { href: '/', label: 'Dashboard', icon: '📊' },
  { href: '/contacts', label: 'Contacts', icon: '👤' },
  { href: '/deals', label: 'Deals', icon: '💼' },
  { href: '/settings', label: 'Settings', icon: '⚙️' },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <Box as="aside" w="260px" bg="gray.900" color="white" position="fixed" top={0} left={0} h="100vh" display="flex" flexDirection="column" zIndex={100}>
      <Flex align="center" gap={3} p={6} borderBottom="1px solid" borderColor="gray.700">
        <Text fontSize="1.5rem">💼</Text>
        <Text fontSize="1.1rem" fontWeight={700}>{'{{projectName}}'}</Text>
      </Flex>
      <VStack as="nav" flex={1} gap={1} p={3} align="stretch">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} style={{ textDecoration: 'none' }}>
            <Flex
              align="center"
              gap={3}
              px={4}
              py={3}
              borderRadius="lg"
              fontWeight={500}
              color={pathname === item.href ? 'white' : 'gray.400'}
              bg={pathname === item.href ? '#4f46e5' : 'transparent'}
              _hover={{ bg: pathname === item.href ? '#4f46e5' : 'gray.800', color: 'white' }}
              transition="all 0.2s"
            >
              <Text fontSize="1.2rem">{item.icon}</Text>
              <Text>{item.label}</Text>
            </Flex>
          </Link>
        ))}
      </VStack>
      <Box p={5} borderTop="1px solid" borderColor="gray.700">
        <Flex align="center" gap={3}>
          <Text fontSize="1.5rem">👤</Text>
          <Box>
            <Text fontSize="0.9rem" fontWeight={600} color="white">Sales Manager</Text>
            <Text fontSize="0.75rem" color="gray.400">Team Lead</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
