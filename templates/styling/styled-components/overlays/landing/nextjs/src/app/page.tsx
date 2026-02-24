'use client';

import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import styled from 'styled-components';

const Landing = styled.div`
  min-height: 100vh;
`;

export default function Home() {
  return (
    <Landing>
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </Landing>
  );
}
