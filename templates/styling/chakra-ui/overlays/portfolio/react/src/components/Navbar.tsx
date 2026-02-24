import { NavLink } from 'react-router-dom';
import { Flex, HStack, Heading, Box } from '@chakra-ui/react';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

function Navbar() {
  return (
    <Flex as="nav" justify="space-between" align="center" maxW="1100px" mx="auto" w="100%" px={8} py={4}>
      <Heading as={NavLink} to="/" size="lg" color="gray.900" textDecoration="none">
        {'{{projectName}}'}
      </Heading>
      <HStack gap={8}>
        {navItems.map((item) => (
          <Box
            key={item.to}
            as={NavLink}
            to={item.to}
            end={item.to === '/' ? true : undefined}
            color="gray.500"
            fontWeight={500}
            textDecoration="none"
            transition="color 0.15s"
            _hover={{ color: '#4f46e5' }}
            css={{ '&.active': { color: '#4f46e5' } }}
          >
            {item.label}
          </Box>
        ))}
      </HStack>
    </Flex>
  );
}

export default Navbar;
