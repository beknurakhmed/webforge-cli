import { NavLink } from 'react-router-dom';

const menuItems = [
  { icon: '📊', label: 'Overview', path: '/' },
  { icon: '📈', label: 'Analytics', path: '/analytics' },
  { icon: '👥', label: 'Users', path: '/users' },
  { icon: '⚙️', label: 'Settings', path: '/settings' },
];

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">{'{{projectName}}'}</div>
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) => `sidebar-item ${isActive ? 'active' : ''}`}
          >
            <span className="sidebar-icon">{item.icon}</span>
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
