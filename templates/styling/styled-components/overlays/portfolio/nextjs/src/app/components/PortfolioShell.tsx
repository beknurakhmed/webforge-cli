'use client';

import styled from 'styled-components';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

const PortfolioBody = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: #374151;
  background: #f9fafb;
  line-height: 1.6;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
`;

export function PortfolioShell({ children }: { children: React.ReactNode }) {
  return (
    <PortfolioBody>
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </PortfolioBody>
  );
}
