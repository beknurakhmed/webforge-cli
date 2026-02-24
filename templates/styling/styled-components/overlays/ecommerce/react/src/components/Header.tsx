import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { CartItem } from '../data/products';

const StyledHeader = styled.header`
  background: white;
  border-bottom: 1px solid #e5e7eb;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.75rem;
    align-items: flex-start;
  }
`;

const StoreLogo = styled(NavLink)`
  font-size: 1.5rem;
  font-weight: 700;
  color: #4f46e5;
  text-decoration: none;
`;

const StoreNav = styled.nav`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

const StyledNavLink = styled(NavLink)<{ $isActive?: boolean }>`
  text-decoration: none;
  color: #6b7280;
  font-weight: 500;
  transition: color 0.2s;
  position: relative;

  &:hover,
  &.active {
    color: #4f46e5;
  }
`;

const CartBadge = styled.span`
  background: #4f46e5;
  color: white;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 0.15rem 0.45rem;
  border-radius: 9999px;
  margin-left: 0.35rem;
  vertical-align: super;
`;

interface HeaderProps {
  cart: CartItem[];
}

export function Header({ cart }: HeaderProps) {
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <StyledHeader>
      <HeaderContent>
        <StoreLogo to="/">🛍️ {'{{projectName}}'}</StoreLogo>
        <StoreNav>
          <StyledNavLink to="/" end>
            Home
          </StyledNavLink>
          <StyledNavLink to="/cart">
            🛒 Cart
            {cartCount > 0 && <CartBadge>{cartCount}</CartBadge>}
          </StyledNavLink>
        </StoreNav>
      </HeaderContent>
    </StyledHeader>
  );
}
