'use client';

import styled from 'styled-components';

const StyledFooter = styled.footer`
  background: #111827;
  color: #d1d5db;
  padding: 3rem 1.5rem 1.5rem;
  margin-top: 4rem;
`;

const FooterContainer = styled.div`
  max-width: 1200px;
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
    font-size: 1.2rem;
    margin-bottom: 0.75rem;
  }

  h4 {
    color: white;
    font-size: 1rem;
    margin-bottom: 0.75rem;
  }

  p {
    font-size: 0.9rem;
    line-height: 1.6;
  }

  ul {
    list-style: none;
  }

  li {
    padding: 0.25rem 0;
    font-size: 0.9rem;
    cursor: pointer;

    &:hover {
      color: white;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 1.5rem;
`;

const FooterBottom = styled.div`
  border-top: 1px solid #374151;
  padding-top: 1.5rem;
  text-align: center;
  font-size: 0.85rem;
`;

export function Footer() {
  return (
    <StyledFooter>
      <FooterContainer>
        <FooterGrid>
          <FooterSection>
            <h3>🛍️ {'{{projectName}}'}</h3>
            <p>Your one-stop shop for quality products at great prices.</p>
          </FooterSection>
          <FooterSection>
            <h4>Shop</h4>
            <ul>
              <li>New Arrivals</li>
              <li>Best Sellers</li>
              <li>Sale Items</li>
              <li>Gift Cards</li>
            </ul>
          </FooterSection>
          <FooterSection>
            <h4>Support</h4>
            <ul>
              <li>Help Center</li>
              <li>Shipping Info</li>
              <li>Returns</li>
              <li>Contact Us</li>
            </ul>
          </FooterSection>
          <FooterSection>
            <h4>Follow Us</h4>
            <SocialLinks>
              <span>📘</span>
              <span>🐦</span>
              <span>📷</span>
              <span>📌</span>
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
