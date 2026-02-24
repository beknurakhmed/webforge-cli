'use client';

import styled from 'styled-components';
import { BlogHeader } from './BlogHeader';
import { BlogFooter } from './BlogFooter';

const BlogBody = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: #374151;
  background: #f9fafb;
  line-height: 1.7;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
`;

export function BlogShell({ children }: { children: React.ReactNode }) {
  return (
    <BlogBody>
      <BlogHeader />
      <Main>{children}</Main>
      <BlogFooter />
    </BlogBody>
  );
}
