import { Outlet } from 'react-router-dom';
import { Flex, Box } from '@chakra-ui/react';
import { Sidebar } from './Sidebar';

export function Layout() {
  return (
    <Flex minH="100vh">
      <Sidebar />
      <Box as="main" flex={1} bg="gray.50" p={6} overflowY="auto">
        <Outlet />
      </Box>
    </Flex>
  );
}
