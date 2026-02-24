import styled from 'styled-components';

const HeroSection = styled.header`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding-bottom: 4rem;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  a {
    color: rgba(255, 255, 255, 0.9);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s;

    &:hover {
      color: white;
    }
  }
`;

const HeroContent = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  max-width: 800px;
  margin: 0 auto;

  h1 {
    font-size: 3.5rem;
    font-weight: 800;
    margin-bottom: 1.5rem;
    line-height: 1.1;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  p {
    font-size: 1.25rem;
    opacity: 0.9;
    margin-bottom: 2rem;
    line-height: 1.6;
  }
`;

const HeroActions = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const Button = styled.button<{ $variant?: 'primary' | 'secondary' }>`
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  border: 2px solid transparent;

  background: ${props => props.$variant === 'secondary' ? 'transparent' : '#4f46e5'};
  color: white;
  border-color: ${props => props.$variant === 'secondary' ? 'rgba(255, 255, 255, 0.5)' : '#4f46e5'};

  &:hover {
    background: ${props => props.$variant === 'secondary' ? 'rgba(255, 255, 255, 0.1)' : '#4338ca'};
    border-color: ${props => props.$variant === 'secondary' ? 'white' : '#4338ca'};
  }
`;

export function Hero() {
  return (
    <HeroSection>
      <Nav>
        <Logo>{'{{projectName}}'}</Logo>
        <NavLinks>
          <a href="#features">Features</a>
          <a href="#cta">Pricing</a>
          <a href="#contact">Contact</a>
        </NavLinks>
      </Nav>
      <HeroContent>
        <h1>Build Something Amazing</h1>
        <p>A modern landing page template to kickstart your next project. Fast, responsive, and ready for production.</p>
        <HeroActions>
          <Button $variant="primary">Get Started</Button>
          <Button $variant="secondary">Learn More</Button>
        </HeroActions>
      </HeroContent>
    </HeroSection>
  );
}
