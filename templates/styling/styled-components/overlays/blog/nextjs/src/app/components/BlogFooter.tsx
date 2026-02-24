'use client';

import Link from 'next/link';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background: #111827;
  color: #d1d5db;
  padding: 3rem 1.5rem 1.5rem;
  margin-top: 4rem;
`;

const FooterContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const FooterSection = styled.div`
  h3 {
    color: white;
    font-size: 1.15rem;
    margin-bottom: 0.75rem;
  }

  h4 {
    color: white;
    font-size: 0.95rem;
    margin-bottom: 0.75rem;
  }

  p {
    font-size: 0.85rem;
    line-height: 1.6;
  }

  ul {
    list-style: none;
  }

  li {
    padding: 0.2rem 0;
    font-size: 0.85rem;
    cursor: pointer;

    &:hover {
      color: white;
    }
  }

  a {
    text-decoration: none;
    color: #d1d5db;

    &:hover {
      color: white;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 1.4rem;
`;

const FooterBottom = styled.div`
  border-top: 1px solid #374151;
  padding-top: 1.5rem;
  text-align: center;
  font-size: 0.8rem;
`;

export function BlogFooter() {
  return (
    <StyledFooter>
      <FooterContainer>
        <FooterGrid>
          <FooterSection>
            <h3>📝 {'{{projectName}}'}</h3>
            <p>Sharing insights, tutorials, and stories about technology, design, and the web.</p>
          </FooterSection>
          <FooterSection>
            <h4>Categories</h4>
            <ul>
              <li><Link href="/category/technology">Technology</Link></li>
              <li><Link href="/category/design">Design</Link></li>
              <li><Link href="/category/business">Business</Link></li>
              <li><Link href="/category/tutorial">Tutorials</Link></li>
            </ul>
          </FooterSection>
          <FooterSection>
            <h4>Links</h4>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/">Home</Link></li>
              <li>RSS Feed</li>
              <li>Sitemap</li>
            </ul>
          </FooterSection>
          <FooterSection>
            <h4>Connect</h4>
            <SocialLinks>
              <span>🐦</span>
              <span>📘</span>
              <span>💼</span>
              <span>📷</span>
            </SocialLinks>
          </FooterSection>
        </FooterGrid>
        <FooterBottom>
          <p>&copy; 2025 {'{{projectName}}'}. All rights reserved.</p>
        </FooterBottom>
      </FooterContainer>
    </StyledFooter>
  );
}
