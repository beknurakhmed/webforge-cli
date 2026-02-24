import { NavLink } from 'react-router-dom';
import { Box, VStack, Flex, Text } from '@chakra-ui/react';

const navItems = [
  { to: '/', label: 'Dashboard', icon: '📊' },
  { to: '/contacts', label: 'Contacts', icon: '👤' },
  { to: '/deals', label: 'Deals', icon: '💼' },
  { to: '/settings', label: 'Settings', icon: '⚙️' },
];

function Sidebar() {
  return (
    <Box as="aside" w="240px" bg="gray.900" color="white" p={6} flexShrink={0}>
      <Text fontSize="xl" fontWeight={700} color="#4f46e5" px={3} mb={8}>
        {'{{projectName}}'}
      </Text>
      <VStack as="nav" gap={1} align="stretch">
        {navItems.map((item) => (
          <Flex
            key={item.to}
            as={NavLink}
            to={item.to}
            end={item.to === '/' ? true : undefined}
            align="center"
            gap={3}
            px={3}
            py={3}
            borderRadius="lg"
            color="gray.400"
            textDecoration="none"
            transition="all 0.15s"
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

export default Sidebar;
