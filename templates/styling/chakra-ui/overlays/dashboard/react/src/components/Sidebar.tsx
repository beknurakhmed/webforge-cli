import { NavLink } from 'react-router-dom';
import { Box, VStack, Flex, Text } from '@chakra-ui/react';

const menuItems = [
  { icon: '📊', label: 'Overview', path: '/' },
  { icon: '📈', label: 'Analytics', path: '/analytics' },
  { icon: '👥', label: 'Users', path: '/users' },
  { icon: '⚙️', label: 'Settings', path: '/settings' },
];

export function Sidebar() {
  return (
    <Box as="aside" w="240px" bg="gray.900" color="white" p={6} flexShrink={0}>
      <Text fontSize="xl" fontWeight={700} color="#4f46e5" px={3} mb={8}>
        {'{{projectName}}'}
      </Text>
      <VStack as="nav" gap={1} align="stretch">
        {menuItems.map((item) => (
          <Flex
            key={item.path}
            as={NavLink}
            to={item.path}
            end={item.path === '/' ? true : undefined}
            align="center"
            gap={3}
            px={3}
            py={3}
            borderRadius="lg"
            color="gray.400"
            textDecoration="none"
            fontSize="0.95rem"
            transition="all 0.2s"
            _hover={{ bg: 'gray.800', color: 'white' }}
            css={{ '&.active': { background: '#4f46e5', color: 'white' } }}
          >
            <Text fontSize="lg">{item.icon}</Text>
            {item.label}
          </Flex>
        ))}
      </VStack>
    </Box>
  );
}
