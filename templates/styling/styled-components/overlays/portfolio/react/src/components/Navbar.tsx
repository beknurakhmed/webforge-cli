import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`;

const Logo = styled(NavLink)`
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: #6b7280;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.15s;

  &:hover,
  &.active {
    color: #4f46e5;
  }
`;

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

function Navbar() {
  return (
    <Nav>
      <Logo to="/">{'{{projectName}}'}</Logo>
      <NavLinks>
        {navItems.map((item) => (
          <StyledNavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
          >
            {item.label}
          </StyledNavLink>
        ))}
      </NavLinks>
    </Nav>
  );
}

export default Navbar;
