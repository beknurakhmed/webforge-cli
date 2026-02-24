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

const HeaderContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
`;

const BlogLogo = styled(Link)`
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

const BlogNav = styled.nav`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    gap: 0.75rem;
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
  { href: '/category/technology', label: 'Technology' },
  { href: '/category/design', label: 'Design' },
  { href: '/about', label: 'About' },
];

export function BlogHeader() {
  const pathname = usePathname();

  return (
    <StyledHeader>
      <HeaderContainer>
        <BlogLogo href="/">
          <LogoIcon>📝</LogoIcon>
          <span>{'{{projectName}}'}</span>
        </BlogLogo>
        <BlogNav>
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              $active={pathname === item.href}
            >
              {item.label}
            </NavLink>
          ))}
        </BlogNav>
      </HeaderContainer>
    </StyledHeader>
  );
}
