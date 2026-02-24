import styled from 'styled-components';

const StyledFooter = styled.footer`
  background: #111827;
  color: #d1d5db;
  padding: 4rem 2rem 2rem;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  gap: 4rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FooterBrand = styled.div`
  h3 {
    color: white;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    max-width: 300px;
    line-height: 1.6;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 4rem;
  flex-wrap: wrap;
`;

const FooterCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h4 {
    color: white;
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 0.5rem;
  }

  a {
    color: #9ca3af;
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.2s;

    &:hover {
      color: white;
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #374151;
  margin-top: 3rem;
  padding-top: 1.5rem;
  text-align: center;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  p {
    font-size: 0.875rem;
    color: #6b7280;
  }
`;

export function Footer() {
  return (
    <StyledFooter>
      <FooterContent>
        <FooterBrand>
          <h3>{'{{projectName}}'}</h3>
          <p>Building the future of the web, one project at a time.</p>
        </FooterBrand>
        <FooterLinks>
          <FooterCol>
            <h4>Product</h4>
            <a href="#features">Features</a>
            <a href="#cta">Pricing</a>
            <a href="#">Documentation</a>
          </FooterCol>
          <FooterCol>
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#contact">Contact</a>
          </FooterCol>
          <FooterCol>
            <h4>Legal</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </FooterCol>
        </FooterLinks>
      </FooterContent>
      <FooterBottom>
        <p>&copy; 2025 {'{{projectName}}'}. All rights reserved.</p>
      </FooterBottom>
    </StyledFooter>
  );
}
