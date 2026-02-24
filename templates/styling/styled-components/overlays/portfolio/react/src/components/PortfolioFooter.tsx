import styled from 'styled-components';

const StyledFooter = styled.footer`
  background: #111827;
  color: #9ca3af;
  padding: 2rem;
  text-align: center;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1100px;
  margin: 0 auto;

  p {
    font-size: 0.85rem;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-bottom: 1rem;

  a {
    color: #9ca3af;
    text-decoration: none;

    &:hover {
      color: white;
    }
  }
`;

function PortfolioFooter() {
  return (
    <StyledFooter>
      <FooterContent>
        <FooterLinks>
          <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="#">LinkedIn</a>
          <a href="#">Twitter</a>
        </FooterLinks>
        <p>&copy; 2025 {'{{projectName}}'}. All rights reserved.</p>
      </FooterContent>
    </StyledFooter>
  );
}

export default PortfolioFooter;
