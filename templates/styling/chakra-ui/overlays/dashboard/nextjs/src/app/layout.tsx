import { Flex, Box } from '@chakra-ui/react';
import { Sidebar } from './components/Sidebar';
import { Providers } from './providers';

export const metadata = {
  title: '{{projectName}} - Dashboard',
  description: 'Admin dashboard for {{projectName}}',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Flex minH="100vh">
            <Sidebar />
            <Box as="main" flex={1} bg="gray.50" p={6} overflowY="auto">{children}</Box>
          </Flex>
        </Providers>
      </body>
    </html>
  );
}
