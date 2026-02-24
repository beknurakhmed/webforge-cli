'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background: white;
  border-bottom: 1px solid #e5e7eb;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const NavbarContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
`;

const NavbarLogo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  text-decoration: none;
`;

const LogoIcon = styled.span`
  font-size: 1.4rem;
`;

const NavbarNav = styled.nav`
  display: flex;
  gap: 1.75rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const NavLink = styled(Link)<{ $active: boolean }>`
  color: ${props => props.$active ? '#4f46e5' : '#374151'};
  font-weight: 500;
  transition: color 0.2s;
  padding: 0.25rem 0;
  border-bottom: 2px solid ${props => props.$active ? '#4f46e5' : 'transparent'};
  text-decoration: none;

  &:hover {
    color: #4f46e5;
  }
`;

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <StyledHeader>
      <NavbarContainer>
        <NavbarLogo href="/">
          <LogoIcon>🚀</LogoIcon>
          <span>{'{{projectName}}'}</span>
        </NavbarLogo>
        <NavbarNav>
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              $active={pathname === item.href}
            >
              {item.label}
            </NavLink>
          ))}
        </NavbarNav>
      </NavbarContainer>
    </StyledHeader>
  );
}
