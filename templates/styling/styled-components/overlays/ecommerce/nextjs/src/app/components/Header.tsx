'use client';

import Link from 'next/link';
import styled from 'styled-components';
import { useCart } from './CartProvider';

const StyledHeader = styled.header`
  background: white;
  border-bottom: 1px solid #e5e7eb;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const HeaderContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;

  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  text-decoration: none;
`;

const LogoIcon = styled.span`
  font-size: 1.5rem;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const NavLink = styled(Link)`
  color: #374151;
  font-weight: 500;
  transition: color 0.2s;
  text-decoration: none;

  &:hover {
    color: #4f46e5;
  }
`;

const CartLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  position: relative;
  color: #374151;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: #4f46e5;
  }
`;

const CartBadge = styled.span`
  background: #4f46e5;
  color: white;
  font-size: 0.7rem;
  font-weight: 700;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -8px;
  right: -10px;
`;

export function Header() {
  const { totalItems } = useCart();

  return (
    <StyledHeader>
      <HeaderContainer>
        <Logo href="/">
          <LogoIcon>🛍️</LogoIcon>
          <span>{'{{projectName}}'}</span>
        </Logo>
        <Nav>
          <NavLink href="/">Home</NavLink>
          <CartLink href="/cart">
            <span>🛒</span>
            <span>Cart</span>
            {totalItems > 0 && <CartBadge>{totalItems}</CartBadge>}
          </CartLink>
        </Nav>
      </HeaderContainer>
    </StyledHeader>
  );
}
