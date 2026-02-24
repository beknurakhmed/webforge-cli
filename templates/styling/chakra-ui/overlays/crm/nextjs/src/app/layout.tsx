import './globals.css';
import { Sidebar } from './components/Sidebar';
import { Box, Flex } from '@chakra-ui/react';
import { Providers } from './providers';

export const metadata = {
  title: '{{projectName}} - CRM',
  description: 'Customer relationship management for {{projectName}}',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Flex minH="100vh">
            <Sidebar />
            <Box as="main" flex={1} ml="260px" p={8} bg="gray.50" overflowX="hidden">
              {children}
            </Box>
          </Flex>
        </Providers>
      </body>
    </html>
  );
}
