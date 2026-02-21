const menuItems = [
  { icon: '📊', label: 'Dashboard', active: true },
  { icon: '👥', label: 'Users', active: false },
  { icon: '📦', label: 'Products', active: false },
  { icon: '📋', label: 'Orders', active: false },
  { icon: '📈', label: 'Analytics', active: false },
  { icon: '⚙️', label: 'Settings', active: false },
];

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">{{projectName}}</div>
      <nav className="sidebar-nav">
        {menuItems.map((item, i) => (
          <a key={i} href="#" className={`sidebar-item ${item.active ? 'active' : ''}`}>
            <span className="sidebar-icon">{item.icon}</span>
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
