const menuItems = [
  { icon: '👥', label: 'Contacts', active: true },
  { icon: '🏢', label: 'Companies', active: false },
  { icon: '💰', label: 'Deals', active: false },
  { icon: '📧', label: 'Emails', active: false },
  { icon: '📅', label: 'Calendar', active: false },
  { icon: '📊', label: 'Reports', active: false },
  { icon: '⚙️', label: 'Settings', active: false },
];

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">{{projectName}}</div>
      <nav className="sidebar-nav">
        {menuItems.map((item, i) => (
          <a key={i} href="#" className={`sidebar-item ${item.active ? 'active' : ''}`}>
            <span>{item.icon}</span>
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
