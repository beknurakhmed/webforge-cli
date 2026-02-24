'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Box, Flex, Text } from '@chakra-ui/react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <Box as="header" bg="white" borderBottom="1px solid" borderColor="gray.200" position="sticky" top={0} zIndex={100}>
      <Flex maxW="1100px" mx="auto" px={6} align="center" justify="space-between" h="64px">
        <Link href="/" style={{ textDecoration: 'none' }}>
          <Flex align="center" gap={2}>
            <Text fontSize="1.4rem">🚀</Text>
            <Text fontSize="1.25rem" fontWeight={700} color="gray.900">{'{{projectName}}'}</Text>
          </Flex>
        </Link>
        <Flex as="nav" gap={7}>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} style={{ textDecoration: 'none' }}>
              <Text
                fontWeight={500}
                color={pathname === item.href ? '#4f46e5' : 'gray.600'}
                borderBottom="2px solid"
                borderColor={pathname === item.href ? '#4f46e5' : 'transparent'}
                py={1}
                _hover={{ color: '#4f46e5' }}
                transition="color 0.2s"
              >
                {item.label}
              </Text>
            </Link>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
}
