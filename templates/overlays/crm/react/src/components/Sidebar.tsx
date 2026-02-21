import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Dashboard', icon: '📊' },
  { to: '/contacts', label: 'Contacts', icon: '👤' },
  { to: '/deals', label: 'Deals', icon: '💼' },
  { to: '/settings', label: 'Settings', icon: '⚙️' },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">{'{{projectName}}'}</div>
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
          >
            <span className="sidebar-icon">{item.icon}</span>
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
