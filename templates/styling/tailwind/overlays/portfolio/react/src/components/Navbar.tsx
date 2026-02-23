import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

function Navbar() {
  return (
    <nav className="flex flex-col md:flex-row justify-between items-center px-8 py-4 max-w-[1100px] mx-auto w-full gap-3 md:gap-0">
      <NavLink to="/" className="text-2xl font-bold text-gray-900 no-underline">{'{{projectName}}'}</NavLink>
      <div className="flex gap-4 md:gap-8">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) =>
              `font-medium no-underline transition-colors duration-150 ${
                isActive ? 'text-indigo-600' : 'text-gray-500 hover:text-indigo-600'
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
