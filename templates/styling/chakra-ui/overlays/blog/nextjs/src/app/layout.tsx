import './globals.css';
import { BlogHeader } from './components/BlogHeader';
import { BlogFooter } from './components/BlogFooter';
import { Box } from '@chakra-ui/react';
import { Providers } from './providers';

export const metadata = {
  title: '{{projectName}} - Blog',
  description: 'Latest articles and insights from {{projectName}}',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <BlogHeader />
          <Box as="main">{children}</Box>
          <BlogFooter />
        </Providers>
      </body>
    </html>
  );
}
