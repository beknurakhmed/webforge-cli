import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const SidebarWrapper = styled.aside`
  width: 240px;
  background: #111827;
  color: white;
  padding: 1.5rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem;
  }
`;

const SidebarLogo = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  padding: 0.5rem 0.75rem;
  margin-bottom: 2rem;
  color: #4f46e5;
`;

const SidebarNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  @media (max-width: 768px) {
    flex-direction: row;
    overflow-x: auto;
    gap: 0.5rem;
  }
`;

const SidebarItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  border-radius: 8px;
  color: #9ca3af;
  text-decoration: none;
  transition: all 0.2s;
  font-size: 0.95rem;

  &:hover {
    background: #1f2937;
    color: white;
  }

  &.active {
    background: #4f46e5;
    color: white;
  }

  @media (max-width: 768px) {
    white-space: nowrap;
    padding: 0.5rem 0.75rem;
  }
`;

const SidebarIcon = styled.span`
  font-size: 1.1rem;
`;

const menuItems = [
  { icon: '📊', label: 'Overview', path: '/' },
  { icon: '📈', label: 'Analytics', path: '/analytics' },
  { icon: '👥', label: 'Users', path: '/users' },
  { icon: '⚙️', label: 'Settings', path: '/settings' },
];

export function Sidebar() {
  return (
    <SidebarWrapper>
      <SidebarLogo>{'{{projectName}}'}</SidebarLogo>
      <SidebarNav>
        {menuItems.map((item) => (
          <SidebarItem
            key={item.path}
            to={item.path}
            end={item.path === '/'}
          >
            <SidebarIcon>{item.icon}</SidebarIcon>
            {item.label}
          </SidebarItem>
        ))}
      </SidebarNav>
    </SidebarWrapper>
  );
}
