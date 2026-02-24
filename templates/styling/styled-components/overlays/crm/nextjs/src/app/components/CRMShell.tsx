'use client';

import styled from 'styled-components';

const CRMLayout = styled.div`
  display: flex;
  min-height: 100vh;
`;

const CRMMain = styled.main`
  flex: 1;
  margin-left: 260px;
  padding: 2rem;
  overflow-x: hidden;
  background: #f3f4f6;

  @media (max-width: 768px) {
    margin-left: 70px;
    padding: 1rem;
  }
`;

export function CRMShell({ children }: { children: React.ReactNode }) {
  const childArray = Array.isArray(children) ? children : [children];
  const sidebar = childArray[0];
  const content = childArray.slice(1);

  return (
    <CRMLayout>
      {sidebar}
      <CRMMain>{content}</CRMMain>
    </CRMLayout>
  );
}
