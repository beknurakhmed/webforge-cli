'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';

const SidebarWrapper = styled.aside`
  width: 260px;
  background: #111827;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  z-index: 100;

  @media (max-width: 768px) {
    width: 70px;
    overflow: hidden;
  }
`;

const SidebarHeader = styled.div`
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border-bottom: 1px solid #1f2937;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SidebarLogo = styled.span`
  font-size: 1.5rem;
`;

const SidebarTitle = styled.span`
  font-size: 1.1rem;
  font-weight: 700;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SidebarNav = styled.nav`
  flex: 1;
  padding: 1rem 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const SidebarLink = styled(Link)<{ $active: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  color: ${props => props.$active ? 'white' : '#9ca3af'};
  transition: all 0.2s;
  font-weight: 500;
  text-decoration: none;
  background: ${props => props.$active ? '#4f46e5' : 'transparent'};

  &:hover {
    background: ${props => props.$active ? '#4f46e5' : '#1f2937'};
    color: white;
  }

  @media (max-width: 768px) {
    justify-content: center;
    padding: 0.75rem;
  }
`;

const SidebarIcon = styled.span`
  font-size: 1.2rem;
`;

const SidebarLinkText = styled.span`
  @media (max-width: 768px) {
    display: none;
  }
`;

const SidebarFooter = styled.div`
  padding: 1rem 1.25rem;
  border-top: 1px solid #1f2937;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const UserAvatar = styled.div`
  font-size: 1.5rem;
`;

const UserDetails = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const UserName = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
  color: white;
`;

const UserRole = styled.p`
  font-size: 0.75rem;
  color: #9ca3af;
`;

const navItems = [
  { href: '/', label: 'Overview', icon: '📊' },
  { href: '/analytics', label: 'Analytics', icon: '📈' },
  { href: '/users', label: 'Users', icon: '👥' },
  { href: '/settings', label: 'Settings', icon: '⚙️' },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <SidebarWrapper>
      <SidebarHeader>
        <SidebarLogo>📊</SidebarLogo>
        <SidebarTitle>{'{{projectName}}'}</SidebarTitle>
      </SidebarHeader>
      <SidebarNav>
        {navItems.map((item) => (
          <SidebarLink
            key={item.href}
            href={item.href}
            $active={pathname === item.href}
          >
            <SidebarIcon>{item.icon}</SidebarIcon>
            <SidebarLinkText>{item.label}</SidebarLinkText>
          </SidebarLink>
        ))}
      </SidebarNav>
      <SidebarFooter>
        <UserInfo>
          <UserAvatar>👤</UserAvatar>
          <UserDetails>
            <UserName>Admin User</UserName>
            <UserRole>Administrator</UserRole>
          </UserDetails>
        </UserInfo>
      </SidebarFooter>
    </SidebarWrapper>
  );
}
