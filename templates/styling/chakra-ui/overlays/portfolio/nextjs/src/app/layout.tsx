import './globals.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Box } from '@chakra-ui/react';
import { Providers } from './providers';

export const metadata = {
  title: '{{projectName}} - Portfolio',
  description: 'Portfolio and projects showcase for {{projectName}}',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          <Box as="main">{children}</Box>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
