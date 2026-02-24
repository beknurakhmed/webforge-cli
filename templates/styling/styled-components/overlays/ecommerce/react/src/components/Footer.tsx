import styled from 'styled-components';

const StyledFooter = styled.footer`
  background: #111827;
  color: #d1d5db;
  padding: 3rem 2rem 1.5rem;
  margin-top: auto;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  gap: 3rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const FooterBrand = styled.div`
  h3 {
    color: white;
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const FooterCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h4 {
    color: white;
    font-size: 0.8rem;
    text-transform: uppercase;
    margin-bottom: 0.25rem;
  }

  a {
    color: #9ca3af;
    text-decoration: none;
    font-size: 0.9rem;

    &:hover {
      color: white;
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #374151;
  margin-top: 2rem;
  padding-top: 1rem;
  text-align: center;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  p {
    font-size: 0.8rem;
    color: #6b7280;
  }
`;

export function Footer() {
  return (
    <StyledFooter>
      <FooterContent>
        <FooterBrand>
          <h3>🛍️ {'{{projectName}}'}</h3>
          <p>Your one-stop shop for quality products.</p>
        </FooterBrand>
        <FooterLinks>
          <FooterCol>
            <h4>Shop</h4>
            <a href="#">All Products</a>
            <a href="#">New Arrivals</a>
            <a href="#">Sale</a>
          </FooterCol>
          <FooterCol>
            <h4>Support</h4>
            <a href="#">FAQ</a>
            <a href="#">Shipping</a>
            <a href="#">Returns</a>
          </FooterCol>
        </FooterLinks>
      </FooterContent>
      <FooterBottom>
        <p>&copy; {new Date().getFullYear()} {'{{projectName}}'}. All rights reserved.</p>
      </FooterBottom>
    </StyledFooter>
  );
}
