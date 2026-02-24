'use client';

import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { Box } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box minH="100vh">
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </Box>
  );
}
