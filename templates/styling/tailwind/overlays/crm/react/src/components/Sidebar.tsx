import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Dashboard', icon: '📊' },
  { to: '/contacts', label: 'Contacts', icon: '👤' },
  { to: '/deals', label: 'Deals', icon: '💼' },
  { to: '/settings', label: 'Settings', icon: '⚙️' },
];

function Sidebar() {
  return (
    <aside className="w-full md:w-60 bg-gray-900 text-white p-4 md:p-6 shrink-0">
      <div className="text-xl font-bold px-3 py-2 mb-8 text-indigo-600">
        {'{{projectName}}'}
      </div>
      <nav className="flex flex-row md:flex-col gap-1 overflow-x-auto md:overflow-x-visible">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all whitespace-nowrap ${
                isActive
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`
            }
          >
            <span className="text-base">{item.icon}</span>
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
